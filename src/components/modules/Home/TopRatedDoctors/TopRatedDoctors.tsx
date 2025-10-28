"use client";

import { doctors } from "./Doctordata";
import DoctorCard from "./DoctorCard";
import { Button } from "@/components/ui/button";

export default function TopRatedDoctors() {
  return (
    <section
      className="bg-secondary/40 py-24 scroll-mt-16"
      id="top-rated-doctors"
      aria-labelledby="top-rated-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2
            id="top-rated-heading"
            className="text-3xl md:text-4xl font-bold text-foreground"
          >
            Our Top Rated Doctors
          </h2>
          <p className="text-muted-foreground mt-4 text-base md:text-lg">
            Access trusted experts from various medical specialities, ready to
            provide world-class healthcare services.
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor) => (
            <DoctorCard key={doctor.name} doctor={doctor} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button size="lg" aria-label="View all doctors">
            View All Doctors
          </Button>
        </div>
      </div>
    </section>
  );
}
