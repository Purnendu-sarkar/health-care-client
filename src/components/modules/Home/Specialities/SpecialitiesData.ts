import { HeartPulse, Brain, Bone, Baby } from "lucide-react";

export interface Specialist {
  name: string;
  icon: React.ElementType;
  bgColor: string;
  iconColor: string;
}

export const specialists: Specialist[] = [
  {
    name: "Cardiology",
    icon: HeartPulse,
    bgColor: "bg-red-100",
    iconColor: "text-red-500",
  },
  {
    name: "Neurology",
    icon: Brain,
    bgColor: "bg-blue-100",
    iconColor: "text-blue-500",
  },
  {
    name: "Orthopedic",
    icon: Bone,
    bgColor: "bg-pink-100",
    iconColor: "text-pink-500",
  },
  {
    name: "Pediatric",
    icon: Baby,
    bgColor: "bg-green-100",
    iconColor: "text-green-500",
  },
];
