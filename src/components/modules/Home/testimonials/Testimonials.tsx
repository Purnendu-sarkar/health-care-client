"use client";

import TestimonialCard from "./TestimonialCard";
import { testimonials } from "./testimonialsData";


const Testimonials: React.FC = () => {
  return (
    <section
      id="testimonials"
      className="bg-card py-20 sm:py-24"
      aria-labelledby="testimonials-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <h2
            id="testimonials-heading"
            className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight"
          >
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground mt-4 text-base sm:text-lg">
            We are committed to providing you with the best medical and healthcare services.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}        </div>
      </div>
    </section>
  );
};

export default Testimonials;
