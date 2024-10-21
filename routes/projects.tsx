import { Handlers, PageProps } from "$fresh/server.ts";
import { MainLayout } from "../components/MainLayout.tsx";
import { Project, PROJECTS } from "./data/projects.ts";

export const handler: Handlers<Project[]> = {
  GET(_req, ctx) {
    return ctx.render(PROJECTS);
  },
};

export default function ProjectsPage({ data }: PageProps<Project[]>) {
  if (!data) {
    return (
      <MainLayout>
        <p>Project not found.</p>
      </MainLayout>
    );
  }
  return (
    <MainLayout>
      <div class="bg-white">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((project) => (
            <div class="mb-16" key={project.id}>
              <a
                href={`/projects/${encodeURIComponent(
                  project.title.replace(/\s+/g, "-").toLowerCase(),
                )}`}
              >
                <p class="text-xl font-serif">{project.title}</p>
                <p class="text-xl font-serif mb-2">Year: {project.year}</p>
                <img
                  class="projects-image"
                  src={project.imageUrls[0]}
                  alt={project.title}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
