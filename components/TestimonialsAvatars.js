import Image from "next/image";

const avatars = [
  {
    alt: "User",
    // Ideally, load from a statically generated image for better SEO performance (import userImage from "@/public/userImage.png")
    src: "https://images.unsplash.com/photo-1699899657675-1003c7d28f2d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGVhZCUyMHNob3R8ZW58MHx8MHx8fDI%3D",
  },
  {
    alt: "User",
    src: "https://images.unsplash.com/photo-1597677012542-ef144cff4a70?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGhlYWQlMjBzaG90fGVufDB8fDB8fHwy",
  },
  {
    alt: "User",
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM2fHxoZWFkJTIwc2hvdHxlbnwwfHwwfHx8Mg%3D%3D",
  },
  {
    alt: "User",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
  },
  {
    alt: "User",
    src: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZCUyMHNob3QlMjBtYW4lMjBwcm9mZmVzc2lvbmFsfGVufDB8fDB8fHwy",
  },
];

const TestimonialsAvatars = ({ priority = false }) => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-3">
      {/* AVATARS */}
      <div className={`-space-x-5 avatar-group justy-start`}>
        {avatars.map((image, i) => (
          <div className="avatar w-12 h-12" key={i}>
            <Image
              src={image.src}
              alt={image.alt}
              priority={priority}
              width={50}
              height={50}
            />
          </div>
        ))}
      </div>

      {/* RATING */}
      <div className="flex flex-col justify-center items-center md:items-start gap-1">
        <div className="rating">
          {[...Array(5)].map((_, i) => (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 text-yellow-500"
              key={i}
            >
              <path
                fillRule="evenodd"
                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                clipRule="evenodd"
              />
            </svg>
          ))}
        </div>

        <div className="text-base text-base-content/80">
          <span className="font-semibold text-base-content">32</span> teachers
          endorse APST
        </div>
      </div>
    </div>
  );
};

export default TestimonialsAvatars;


