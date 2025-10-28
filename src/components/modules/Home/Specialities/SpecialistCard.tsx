"use client";

import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Specialist } from "./SpecialitiesData";

interface SpecialistCardProps {
  specialist: Specialist;
}

export default function SpecialistCard({ specialist }: SpecialistCardProps) {
  const Icon = specialist.icon;

  return (
    <Card
      className={cn(
        "text-center transition-all duration-300 cursor-pointer hover:shadow-lg hover:-translate-y-1 hover:bg-primary hover:text-primary-foreground"
      )}
    >
      <CardContent className="p-6">
        <div
          className={cn(
            "w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4",
            specialist.bgColor
          )}
        >
          <Icon className={cn(specialist.iconColor)} size={32} />
        </div>
        <h3 className="text-lg font-semibold">{specialist.name}</h3>
      </CardContent>
    </Card>
  );
}
