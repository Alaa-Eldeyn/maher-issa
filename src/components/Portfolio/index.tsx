import SectionTitle from "../Common/SectionTitle";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    id: 7,
    title: "مشروع 7",
    category: "تصميم",
    image: "/images/logo.png",
    description: "وصف المشروع 7",
    isPrivate: true,
  },
  {
    id: 8,
    title: "مشروع 8",
    category: "تطوير",
    image: "/images/logo.png",
    description: "وصف المشروع 8",
    isPrivate: true,
  },
  {
    id: 9,
    title: "مشروع 9",
    category: "تصميم",
    image: "/images/logo.png",
    description: "وصف المشروع 9",
    isPrivate: true,
  },
];

const Portfolio = () => {
  return (
    <>
      <section
        id="portfolio"
        className="relative z-10 bg-gray-light py-16 dark:bg-bg-color-dark md:py-20 lg:py-28"
      >
        <div className="container">
          <SectionTitle
            title="أعمالنا"
            paragraph="نماذج من أعمالنا السابقة"
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
      <hr className="container h-[1px] w-full border-none bg-gray-500  dark:bg-gray-700" />
    </>
  );
};
export default Portfolio;
