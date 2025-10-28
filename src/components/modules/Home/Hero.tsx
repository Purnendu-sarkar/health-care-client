"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SearchIcon } from "@/components/ui/SearchIcon";
import { Calendar, Star } from "lucide-react";

interface HeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
  primaryAction?: {
    text: string;
    onClick?: () => void;
  };
  secondaryAction?: {
    text: string;
    onClick?: () => void;
  };
}

export default function Hero({
  title = "Find Your Perfect Doctor",
  subtitle = "AI-Powered Healthcare at Your Fingertips",
  description = "Our intelligent platform helps you connect with expert doctors, schedule appointments, and get personalized care instantly.",
  primaryAction = { text: "Find a Doctor" },
  secondaryAction = { text: "Book Appointment" },
}: HeroProps) {
  return (
    <section
      className="relative overflow-hidden from-blue-50 to-white"
      aria-labelledby="hero-heading"
    >
      {/* Background Gradient */}
      <div
        className="absolute inset-0 z-0 "
        style={{
          background:
            "radial-gradient(125% 125% at 50% 90%, #fff 30%, #155DFC 100%)",
        }}
      />

      <div className="container mx-auto flex flex-col items-center px-6 py-16 text-center md:flex-row md:justify-between md:py-24 lg:px-12 relative">
        {/* Left Column */}
        <div className="max-w-xl space-y-6 md:text-left">
          <h1
            id="hero-heading"
            className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl"
          >
            <span className="block text-primary">{subtitle}</span>
            {title}
          </h1>

          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            {description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-start">
            <Button
              onClick={primaryAction.onClick}
              className="h-12 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <SearchIcon className="mr-2 h-5 w-5" /> {primaryAction.text}
            </Button>
            <Button
              onClick={secondaryAction.onClick}
              variant="outline"
              className="h-12 rounded-lg border-primary text-primary hover:bg-primary/10"
            >
              <Calendar className="mr-2 h-5 w-5" /> {secondaryAction.text}
            </Button>
          </div>

          {/* Stats Section */}
          <div className="mt-10 grid grid-cols-3 gap-4 text-center md:text-left">
            <div>
              <p className="text-2xl font-semibold text-foreground">50K+</p>
              <p className="text-sm text-muted-foreground">Patients Served</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-foreground">1000+</p>
              <p className="text-sm text-muted-foreground">Expert Doctors</p>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <p className="text-2xl font-semibold text-foreground flex items-center gap-1">
                4.9{" "}
                <Star className="h-4 w-4 fill-yellow-400 stroke-yellow-400" />
              </p>
              <p className="text-sm text-muted-foreground ml-2">
                Patient Rating
              </p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="mt-12 md:mt-0">
          <div className="w-full max-w-sm rounded-2xl bg-card p-6 shadow-lg sm:p-8">
            <h2 className="mb-4 text-lg font-semibold text-foreground">
              Quick Health Check
            </h2>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-4"
              aria-label="AI Doctor Finder Form"
            >
              <div>
                <Label htmlFor="symptoms">Describe your symptoms</Label>
                <Input
                  id="symptoms"
                  placeholder="e.g., headache, fever, cough"
                  className="rounded-lg border-input"
                  aria-describedby="symptoms-help"
                />
              </div>
              <div>
                <Label htmlFor="specialty">Select Specialty</Label>
                <select
                  id="specialty"
                  className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground"
                  defaultValue="General Physician"
                >
                  <option>General Physician</option>
                  <option>Cardiologist</option>
                  <option>Dermatologist</option>
                  <option>Pediatrician</option>
                  <option>Orthopedic</option>
                </select>
              </div>
              <Button
                type="submit"
                className="w-full rounded-lg bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Get AI Recommendations
              </Button>
            </form>
            <p
              id="symptoms-help"
              className="mt-4 text-center text-xs text-muted-foreground"
            >
              ✨ Powered by AI to match your symptoms with expert doctors.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
