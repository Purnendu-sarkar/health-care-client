"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface StepCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  index: number;
}

const bgColors = [
  "bg-blue-50 dark:bg-blue-950/20",
  "bg-pink-50 dark:bg-pink-950/20",
  "bg-green-50 dark:bg-green-950/20",
  "bg-yellow-50 dark:bg-yellow-950/20",
  "bg-pink-50 dark:bg-pink-950/20",
  "bg-blue-50 dark:bg-blue-950/20",
  "bg-yellow-50 dark:bg-yellow-950/20",
  "bg-green-50 dark:bg-green-950/20",
];

const textColors = [
  "text-blue-500 dark:text-blue-400",
  "text-pink-500 dark:text-pink-400",
  "text-green-500 dark:text-green-400",
  "text-yellow-500 dark:text-yellow-400",
  "text-pink-500 dark:text-pink-400",
  "text-blue-500 dark:text-blue-400",
  "text-yellow-500 dark:text-yellow-400",
  "text-green-500 dark:text-green-400",
];

const StepCard: React.FC<StepCardProps> = ({
  icon: Icon,
  title,
  description,
  index,
}) => {
  const colorIndex = index % bgColors.length;

  return (
    <Card
      className={`${bgColors[colorIndex]} transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg focus-within:ring-2 focus-within:ring-primary`}
      role="article"
      aria-labelledby={`step-title-${index}`}
    >
      <CardContent className="p-6 flex items-start space-x-4">
        <div
          className={`p-3 rounded-full bg-white dark:bg-gray-900 shadow-sm ${textColors[colorIndex]}`}
          aria-hidden="true"
        >
          <Icon size={28} />
        </div>
        <div>
          <h3
            id={`step-title-${index}`}
            className="font-semibold text-lg text-foreground"
          >
            {title}
          </h3>
          <p className="text-sm text-muted-foreground leading-snug">
            {description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default StepCard;
