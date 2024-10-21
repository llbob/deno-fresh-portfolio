import { Handlers, PageProps } from "$fresh/server.ts";
import { MainLayout } from "../../components/MainLayout.tsx";
import { Project, PROJECTS } from "../data/projects.ts";
import ProjectCarousel from "../../islands/ProjectCarousel.tsx";

export const handler: Handlers<Project | null> = {
  GET(_req, ctx) {
    const projectId = ctx.params.title;
    const project = PROJECTS.find((p) => p.id === projectId);
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
        <div dangerouslySetInnerHTML={{ __html: data.descriptionText }} />
      </div>
    </MainLayout>
  );
}
