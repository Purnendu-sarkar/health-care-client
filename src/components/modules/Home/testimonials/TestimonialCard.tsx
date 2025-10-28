"use client";

import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";

interface Testimonial {
  name: string;
  role: string;
  image: string | StaticImageData;
  quote: string;
  rating: number;
}

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({
  testimonial,
}) => {
  return (
    <Card
      className="bg-background border border-border shadow-sm hover:shadow-lg transition-all duration-300 focus-within:ring-2 focus-within:ring-primary"
      role="article"
      aria-labelledby={`testimonial-${testimonial.name}`}
    >
      <CardContent className="relative p-8 flex flex-col justify-between h-full">
        {/* Decorative Quote Icon */}
        <Quote
          className="absolute top-0 left-4 text-primary/30 dark:text-primary/40"
          size={48}
          aria-hidden="true"
        />

        {/* Quote Text */}
        <p
          id={`testimonial-${testimonial.name}`}
          className="text-muted-foreground mt-1 mb-6 leading-relaxed relative z-10"
        >
          {testimonial.quote}
        </p>

        {/* Author Info */}
        <div className="flex items-center mt-auto relative z-10">
          <Image
            src={testimonial.image}
            alt={`${testimonial.name}, ${testimonial.role}`}
            width={64}
            height={64}
            className="rounded-full object-cover"
            loading="lazy"
          />
          <div className="ml-4">
            <h4 className="font-semibold text-foreground">
              {testimonial.name}
            </h4>
            <p className="text-sm text-muted-foreground">{testimonial.role}</p>

            {/* Rating */}
            <div
              className="flex mt-1"
              aria-label={`Rating: ${testimonial.rating} out of 5 stars`}
            >
              {[...Array(Math.max(0, Math.min(5, Math.floor(testimonial.rating))))].map((_, i) => (
                <Star
                  key={i}
                  className="text-yellow-400 fill-yellow-400"
                  size={16}
                  aria-hidden="true"
                />
              ))}            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
