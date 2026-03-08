import { IconType } from "react-icons";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  icon: IconType;
  image?: string;
  url?: string;
}

export function ProjectCard({
  title,
  description,
  tags,
  icon: Icon,
  image,
  url,
}: ProjectCardProps) {
  return (
    <div
      className={`bg-white border-4 border-secondary overflow-hidden flex flex-col h-full ${url ? "cursor-pointer transition-transform hover:-translate-y-1 hover:shadow-lg" : ""}`}
      onClick={() => url && window.open(url, "_blank")}
    >
      <div className="h-48 bg-secondary flex items-center justify-center overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={title}
            className=" h-[70%]  object-contain border rounded-full "
          />
        ) : (
          <Icon className="h-24 w-24 text-white" />
        )}
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-2xl font-bold text-primary mb-3">{title}</h3>
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
