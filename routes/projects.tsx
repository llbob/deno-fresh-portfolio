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
      <div class="page-wrapper">
        <div class="projects-content">
          {/* <h1 class="title">Projects</h1> */}
          <div class="projects-innerwrapper">
            {data.map((project) => (
              <div class="projects-card" key={project.id}>
                <a
                  href={`/projects/${encodeURIComponent(
                    project.title.replace(/\s+/g, "-").toLowerCase(),
                  )}`}
                >
                  <h5 class="h5">{project.title}</h5>
                  <h5 class="h5">Year: {project.year}</h5>
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
      </div>
    </MainLayout>
  );
}
