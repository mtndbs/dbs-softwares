import { AppTitle } from "./AppTitle";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  url?: string;
}

export function ProjectCard({
  title,
  description,
  tags,
  image,
  url,
}: ProjectCardProps) {
  return (
    <div
      className={`surface-brand border-4 border-secondary overflow-hidden flex flex-col h-full ${url ? "cursor-pointer transition-transform hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(19,61,99,0.22)]" : ""}`}
      onClick={() => url && window.open(url, "_blank")}
    >
      <div className="h-48 bg-brand-gradient flex items-center justify-center overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={title}
            className=" h-48 w-60  object-contain  "
          />
        ) : (
          <div className="text-white text-3xl font-bold">{title[0]}</div>
        )}
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <AppTitle as="h3" className="text-2xl text-brand-gradient mb-3">
          {title}
        </AppTitle>
        <p className="text-gray-700 mb-4 flex-grow">{description}</p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="px-3 py-1 bg-primary text-white text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
