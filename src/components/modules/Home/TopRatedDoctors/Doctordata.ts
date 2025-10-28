/* eslint-disable @typescript-eslint/no-explicit-any */
import cardioDoc from "@/assets/images/doctor-cardiologist.jpg";
import neurolDoc from "@/assets/images/doctor-neurologist.jpg";
import orthoDoc from "@/assets/images/doctor-orthopedic.jpg";

export interface Doctor {
  name: string;
  specialty: string;
  rating: number;
  reviews: number;
  image: any;
}

export const doctors: Doctor[] = [
  {
    name: "Dr. Cameron Williamson",
    specialty: "Cardiologist",
    rating: 4.9,
    reviews: 23,
    image: cardioDoc,
  },
  {
    name: "Dr. Leslie Alexander",
    specialty: "Neurologist",
    rating: 4.8,
    reviews: 45,
    image: neurolDoc,
  },
  {
    name: "Dr. Robert Fox",
    specialty: "Orthopedic",
    rating: 4.9,
    reviews: 32,
    image: orthoDoc,
  },
];
