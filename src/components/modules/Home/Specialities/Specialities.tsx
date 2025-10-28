"use client";

import { specialists } from "./SpecialitiesData";
import SpecialistCard from "./SpecialistCard";

export default function Specialities() {
  return (
    <section className="py-24 mt-24 md:mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold text-foreground">
              Our Specialists
            </h2>
            <p className="text-muted-foreground max-w-md mt-2">
              Access medical experts across all major specialities.
            </p>
          </div>
          <a
            href="#"
            className="text-primary font-semibold hover:underline mt-4 sm:mt-0"
            aria-label="View all specialists"
          >
            View All
          </a>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialists.map((specialist) => (
            <SpecialistCard key={specialist.name} specialist={specialist} />
          ))}
        </div>
      </div>
    </section>
  );
}
