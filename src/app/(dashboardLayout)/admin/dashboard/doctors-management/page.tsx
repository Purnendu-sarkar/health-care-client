import DoctorsManagementHeader from "@/components/modules/Admin/DoctorsManagement/DoctorsManagementHeader";
import DoctorsTable from "@/components/modules/Admin/DoctorsManagement/DoctorsTable";
import RefreshButton from "@/components/shared/RefreshButton";
import SearchFilter from "@/components/shared/SearchFilter";
import SelectFilter from "@/components/shared/SelectFilter";
import { TableSkeleton } from "@/components/shared/TableSkeleton";
import { getDoctors } from "@/services/admin/doctorManagement";
import { getSpecialities } from "@/services/admin/specialitiesManagement";
import { ISpecialty } from "@/types/specialities.interface";
import { Suspense } from "react";

const dminDoctorsManagementPage = async () => {
  const specialitiesResult = await getSpecialities();
  const doctorsResult = await getDoctors();
  return (
    <div className="space-y-6">
      <DoctorsManagementHeader specialities={specialitiesResult.data} />
      <div className="flex space-x-2">
        <SearchFilter paramName="searchTerm" placeholder="Search doctors..." />
        <SelectFilter
          paramName="speciality" // ?speciality="Cardiology"
          options={specialitiesResult.data.map((speciality: ISpecialty) => ({
            label: speciality.title,
            value: speciality.title,
          }))}
          placeholder="Filter by speciality"
        />
        <RefreshButton />
      </div>
      <Suspense fallback={<TableSkeleton columns={10} rows={10} />}>
        <DoctorsTable doctors={doctorsResult.data} />
      </Suspense>
    </div>
  );
};

export default dminDoctorsManagementPage;
