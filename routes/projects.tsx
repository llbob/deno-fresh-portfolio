import { Handlers, PageProps } from "$fresh/server.ts";
import { MainLayout } from "../components/MainLayout.tsx";
import { Project } from "../types/project.ts";
import { getProjects } from "../utils/projects.ts";

export const handler: Handlers<Project[]> = {
  async GET(_req, ctx) {
    const projects = await getProjects();
    return ctx.render(projects);
  },
};

export default function ProjectsPage({ data }: PageProps<Project[]>) {
  if (!data) {
    return (
      <MainLayout>
        <p>No projects found.</p>
      </MainLayout>
    );
  }
  
  return (
    <MainLayout>
      <div class="bg-white">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((project) => (
            <div class="mb-16" key={project.id}>
              <a href={`/projects/${project.id}`}>
                <p class="text-xl font-serif">{project.title}</p>
                <p class="text-xl font-serif mb-2">Year: {project.year}</p>
                <img
                  class="projects-image"
                  src={project.images[0]}
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
