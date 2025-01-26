import Image from 'next/image';

export default function Tech() {
  const technologies = [
    { name: 'Node.js', logo: '/Node.js_logo.svg' },
    { name: 'React', logo: '/React-icon.svg' },
    { name: 'Postgres', logo: '/postgres.svg' },
    { name: 'Next.js', logo: '/Nextjs-logo.svg' },
    { name: 'Tailwind CSS', logo: '/tailwind-logo.svg' },
    { name: 'Typescript', logo: '/typescript-logo.svg' },
    { name: 'Java', logo: '/java-logo.svg' },
    { name: 'MongoDB', logo: '/mongodb-logo.svg' },
    { name: 'Spring Boot', logo: '/spring-logo.svg' },
    { name: 'Docker', logo: '/docker-logo.svg' },
    { name: 'AWS', logo: '/aws-logo.svg' },
    { name: 'Github', logo: '/github.svg' },
  ];

  return (
    <>
      <section id="tech" className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
            Technologies
          </h2>
          <p className="mt-8 text-pretty text-lg font-medium text-gray-400 sm:text-xl/8">
            I build with a variety of technologies and tools. Here are a few that I use most frequently:
          </p>
        </div>
      </section>
      <section className=" py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3">
            {technologies.map((tech) => (
                <div key={tech.name} className="bg-white/5 p-6 sm:p-10 hover:bg-white/10 transition duration-300 ease-in-out">
                  <Image
                    alt={tech.name}
                    src={tech.logo}
                    width={158}
                    height={48}
                    className="max-h-12 w-full object-contain"
                  />
                </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
