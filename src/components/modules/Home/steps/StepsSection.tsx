"use client";

import StepCard from "./StepCard";
import { steps } from "./stepsData";

const Steps = () => {
  return (
    <section
      id="how-it-works"
      className="py-20 bg-background"
      aria-labelledby="steps-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2
            id="steps-heading"
            className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight"
          >
            Easy Steps to Get Your Solution
          </h2>
          <p className="text-muted-foreground mt-4 text-base sm:text-lg">
            We provide advanced technologies and high-quality facilities to
            ensure your health journey is smooth and stress-free.
          </p>
        </div>

        {/* Step Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <StepCard key={index} {...step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
