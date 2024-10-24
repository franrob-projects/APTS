/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from 'next/image';

const features = [
  {
    title: "Adventures",
    description: "Survival skills and bond as a team.",
    styles: "bg-primary text-primary-content",
    image: (
      <Image 
        src="/blog/introducing-supabase/images/PHOTO-2024-09-27-11-57-54.jpg" 
        alt="Image description" 
        width={900} // Adjust the width as needed
        height={900} // Adjust the height as needed
      />
    )
  },
  {
    title: "Academics",
    description: "Skills to thrive in the world.",
    styles: "bg-primary text-primary-content",
    image: (
      <Image 
        src="/blog/introducing-supabase/images/PHOTO-2024-09-27-12-02-47.jpg" 
        alt="Image description" 
        width={900} // Adjust the width as needed
        height={900} // Adjust the height as needed
      />
    )
  },
  {
    title: "Awards",
    description: "Recognition for hard work.",
    styles: "bg-primary text-primary-content",
    image: (
      <Image 
        src="/blog/introducing-supabase/images/PHOTO-2024-09-27-12-52-53.jpg" 
        alt="Image description" 
        width={900} // Adjust the width as needed
        height={900} // Adjust the height as needed
      />
    )
  },
  // Add more feature objects here if needed
];

const FeaturesGrid = () => {
  return (
    <section className="flex justify-center items-center w-full bg-base-200/50 text-base-content py-20 lg:py-32">
      <div className="flex flex-col max-w-[82rem] gap-16 md:gap-20 px-4">
        <h2 className="max-w-3xl font-black text-4xl md:text-6xl tracking-[-0.01em]">
          16 to 18 year old <br /> students{" "}
          <span className="underline decoration-dashed underline-offset-8 decoration-base-300">
            really want
          </span>
        </h2>
        <div className="flex flex-col w-full h-fit gap-4 lg:gap-10 text-text-default max-w-[82rem]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-10">
            {features.map((feature) => (
              <div
                key={feature.title}
                className={`${feature.styles} rounded-3xl flex flex-col gap-6 w-full h-[22rem] lg:h-[25rem] pt-6 overflow-hidden group`}
              >
                <div className="px-6 space-y-2">
                  <h3 className="font-bold text-xl lg:text-3xl tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="opacity-80">{feature.description}</p>
                </div>
                {feature.image}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
