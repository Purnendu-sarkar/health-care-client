import Hero from "@/components/modules/Home/Hero";
import Specialities from "@/components/modules/Home/Specialities/Specialities";
import Steps from "@/components/modules/Home/steps/StepsSection";
import Testimonials from "@/components/modules/Home/testimonials/Testimonials";


import TopRatedDoctors from "@/components/modules/Home/TopRatedDoctors/TopRatedDoctors";


export default function Home() {
  return (
    <main>
      <Hero
        title="Find Trusted Doctors Easily"
        subtitle="AI-Driven Healthcare Platform"
        description="Search, book, and consult with verified doctors effortlessly using our intelligent health platform."
        primaryAction={{
          text: "Get Started",
        }}
        secondaryAction={{ text: "Learn More" }}
      />

      <Specialities />
      <TopRatedDoctors />
      <Steps />
      <Testimonials />
    </main>
  );
}
