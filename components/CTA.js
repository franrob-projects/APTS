import Image from "next/image";
import config from "@/config";

const CTA = () => {
  return (
    <section className="relative hero overflow-hidden min-h-screen">
      <Image
        src="https://images.unsplash.com/photo-1671737916207-b157faca1ac1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z298ZW58MHx8MHx8fDA%3D"
        alt="Background"
        className="object-cover w-full"
        fill
      />
      <div className="relative hero-overlay bg-neutral bg-opacity-70"></div>
      <div className="relative hero-content text-center text-neutral-content p-8">
        <div className="flex flex-col items-center max-w-xl p-8 md:p-0">
          <h2 className="font-bold text-3xl md:text-5xl tracking-tight mb-8 md:mb-12">
          Take charge of your future
          </h2>
          <p className="text-lg opacity-80 mb-12 md:mb-16">
          Explore new opportunities 
          </p>

          <button className="btn btn-primary btn-wide">
            Enroll {config.appName}
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
