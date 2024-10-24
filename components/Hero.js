import Image from "next/image";
import TestimonialsAvatars from "./TestimonialsAvatars";

const Hero = () => {
  const someVariable = "This is an example of using &apos;single quotes&apos; in JSX.";

  return (
    <section className="max-w-7xl mx-auto bg-base-100 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 px-8 py-8 lg:py-20">
      <div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start">
        <a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 122 37"
            className="w-32 md:w-36 fill-base-content/80 group-hover:fill-base-content"
          >
            {/* SVG content */}
          </svg>
        </a>

        <h1 className="font-extrabold text-4xl lg:text-6xl tracking-tight md:-mb-4">
          Education &amp; training providers
        </h1>
        <p className="text-lg opacity-80 leading-relaxed">
          APST&apos;s offer Uniformed Protective Services qualifications &amp; Duke of Edinburgh (DofE) awards.
        </p>

        <TestimonialsAvatars priority={true} />
      </div>
      <div className="lg:w-full">
        <Image
          src="/blog/introducing-supabase/images/APST-cover.png" // Use the public path
          alt="Product Demo"
          className="w-full"
          priority={true}
          width={600}
          height={600}
        />
      </div>
    </section>
  );
};

export default Hero;
