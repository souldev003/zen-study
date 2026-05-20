import Banner from "@/components/Banner";
import ExperienceSection from "@/components/UI/ExperienceSection";
import HowItWorks from "@/components/UI/HowItWorks";
import RoomsGrid from "@/components/UI/RoomsGrid";
import WhyChooseUs from "@/components/UI/WhyChooseUs";
import { Suspense } from "react";
import { HashLoader } from "react-spinners";

export default async function Home() {
  const res = await fetch("http://localhost:5001/latest-rooms");
  const LatestRoomsData = await res.json();

  return (
    <div>
      <Banner />
      <WhyChooseUs />
      <Suspense fallback={<HashLoader size={60} color="#ab8e66" />}>
        <RoomsGrid rooms={LatestRoomsData} />
      </Suspense>
      <ExperienceSection />
      <HowItWorks />
    </div>
  );
}
