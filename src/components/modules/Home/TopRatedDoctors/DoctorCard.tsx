"use client";

import { Star } from "lucide-react";
import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Doctor } from "./Doctordata";

interface DoctorCardProps {
  doctor: Doctor;
}

export default function DoctorCard({ doctor }: DoctorCardProps) {
  return (
    <Card
      className="text-center overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-card"
      role="article"
      aria-label={`Profile of ${doctor.name}, ${doctor.specialty}`}
    >
      <CardHeader className="bg-secondary/40 flex flex-col items-center p-6">
        <div className="relative w-24 h-24">
          <Image
            src={doctor.image}
            alt={`${doctor.name} - ${doctor.specialty}`}
            fill
            className="object-cover rounded-full border-4 border-background shadow-md"
            sizes="(max-inline-size: 768px) 96px, 128px"
            priority
          />
        </div>
      </CardHeader>

      <CardContent className="p-6">
        <CardTitle className="text-lg text-foreground font-semibold">
          {doctor.name}
        </CardTitle>
        <p className="text-primary font-medium mt-1">{doctor.specialty}</p>

        <div
          className="flex items-center justify-center mt-3 text-sm"
          aria-label={`Rated ${doctor.rating} out of 5 from ${doctor.reviews} reviews`}
        >
          <Star className="text-yellow-400 fill-yellow-400" size={16} aria-hidden="true" />
          <span className="ml-2 text-foreground font-semibold">{doctor.rating}</span>
          <span className="ml-2 text-muted-foreground">
            ({doctor.reviews} reviews)
          </span>
        </div>
      </CardContent>

      <CardFooter className="grid grid-cols-2 gap-2 p-4 pt-0">
        <Button variant="outline" aria-label={`View profile of ${doctor.name}`}>
          View Profile
        </Button>
        <Button aria-label={`Book an appointment with ${doctor.name}`}>Book Now</Button>
      </CardFooter>
    </Card>
  );
}
