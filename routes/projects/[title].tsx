import { Handlers, PageProps } from "$fresh/server.ts";
import { MainLayout } from "../../components/MainLayout.tsx";
import { Project } from "../../types/project.ts";
import { getProjects } from "../../utils/projects.ts";
import ProjectCarousel from "../../islands/ProjectCarousel.tsx";

export const handler: Handlers<Project | null> = {
  async GET(_req, ctx) {
    const projects = await getProjects();
    const project = projects.find((p) => p.id === ctx.params.title);
    return ctx.render(project || null);
  },
};

export default function ProjectPage({ data }: PageProps<Project>) {
  if (!data) {
    return (
      <MainLayout>
        <p>Project not found.</p>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div class="max-w-3xl">
        <ProjectCarousel project={data} />
        <p class="text-3xl font-serif mb-2">{data.title}</p>
        <p class="text-2xl font-serif mb-4">Year: {data.year}</p>
        <div dangerouslySetInnerHTML={{ __html: data.content }} />
      </div>
    </MainLayout>
  );
}
