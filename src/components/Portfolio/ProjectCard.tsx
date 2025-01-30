import Image from "next/image";

interface Project {
  title: string;
  image: string;
  description: string;
  isPrivate: boolean;
}

const ProjectCard = ({ project }: { project: Project }) => {
  const { title, image, description, isPrivate } = project;

  return (
    <div
      className={`bg-muted soft group relative z-10 flex w-full cursor-pointer flex-col items-center rounded-xl border-2 border-transparent shadow-lg hover:border-primary`}
    >
      <div className="relative w-full overflow-hidden rounded-t-xl">
        <Image
          src={image}
          alt="preview"
          width={400}
          height={300}
          className="soft h-[250px] object-cover w-full rounded-t-xl group-hover:scale-105 "
        />
        {isPrivate && (
          <div className="soft absolute left-0 top-0 flex h-full w-full items-center justify-center rounded-t-xl bg-black/50">
            <button className="flex items-center justify-center gap-2 rounded-xl border border-gray-500 bg-[#23293A] px-5 py-2 text-sm">
              <Image
                src={"images/private.svg"}
                alt="lock"
                width={15}
                height={15}
                className="soft"
              />
              <span>قريبا</span>
            </button>
          </div>
        )}
      </div>
      <div className="w-full p-4 text-start">
        <h4 className="soft text-xl font-semibold tracking-wide text-white group-hover:text-primary">
          {title}
        </h4>
        <p className="soft text-[10px] text-[#868490] group-hover:text-white 2xl:text-[13px]">
          {description}
        </p>
      </div>
    </div>
  );
};
export default ProjectCard;
