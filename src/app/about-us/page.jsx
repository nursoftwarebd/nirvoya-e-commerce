import AboutHero from "@/components/screen/About/AboutHero";
import OurFeature from "@/components/screen/About/OurFeature";
import OurMission from "@/components/screen/About/OurMission";

export const metadata = {
  title: "NIRVOYA - About us Page",
  description: "Generated by Nur IT Software LTD.",
};

const page = () => {
  return (
    <section className=" bg-backgroundPage">
      <AboutHero />
      <OurMission />
      <OurFeature />
    </section>
  );
};

export default page;
