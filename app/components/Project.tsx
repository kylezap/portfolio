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
    <div className="flex max-w-full flex-col items-start gap-4 p-4">
      <div>
        <h2 className="text-2xl font-medium tracking-tight text-white">{title}</h2>
        <p className="mt-2 max-w-lg text-lg/6 text-gray-400">{description}</p>
      </div>
      <div className="flex w-full justify-center">
        <Image
          src={image}
          alt={title}
          width={300}
          height={300}
          className="h-auto w-full min-w-0 max-w-lg rounded-md object-cover"
        />
      </div>
      <Link
        href={link}
        className="inline-block text-sm font-semibold hover:text-gray-400"
      >
        View project →
      </Link>
    </div>
  );
}
