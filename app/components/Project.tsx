import Image from "next/image";
import Link from "next/link";

export default function Project({
  title,
  description,
  image,
  link,
}: {
  title: string;
  description: string;
  image: string;
  link: string;
}) {
  return (
    
      <div className="flex items-start gap-4 p-4">
        <Image
          src={image}
          alt={title}
          width={300}
          height={300}
          className="rounded-md object-cover"
        />
        <div>
          <h2 className="text-2xl font-medium tracking-tight text-white">{title}</h2>
          <p className="mt-2 max-w-lg text-lg/6 text-gray-400">{description}</p>
          <Link
            href={link}
            className="mt-3 inline-block text-sm font-semibold hover:text-gray-400"
          >
            View project →
          </Link>
        </div>
      </div>
  );
}
