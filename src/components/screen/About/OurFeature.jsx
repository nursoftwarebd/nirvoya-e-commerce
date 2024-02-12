import { ourFeature } from "@/data/ourFeature";
import Image from "next/image";
import Title from "./Title";

const OurFeature = () => {
  return (
    <div className="pt-16">
      <div className="container_fluid">
        <Title
          heading="Feature"
          sebHeading="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
        />
        <div className="mt-9 px-[100px] py-10 bg-white shadow-md border-[1px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {ourFeature.map((ourFeature) => {
            return (
              <div key={ourFeature.id}>
                <div className="text-center">
                  <div className="flex items-center justify-center">
                    <div className="w-[133px] h-[133px] border-dashed border border-secondary rounded-md flex items-center justify-center">
                      <Image
                        src={ourFeature.img}
                        alt={`feature ${ourFeature.category}`}
                      />
                    </div>
                  </div>
                  <div className="pt-9 space-y-2">
                    <h2 className="text-2xl md:text-heading30 xl:text-heading40 font-semibold leading-[60px] text-blackPrimary">
                      {ourFeature.figure}
                    </h2>
                    <h5 className="text-2xl text-gray53 leading-9">
                      {ourFeature.category}
                    </h5>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurFeature;
