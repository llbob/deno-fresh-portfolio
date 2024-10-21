import { Handlers, PageProps } from "$fresh/server.ts";
import { MainLayout } from "../components/MainLayout.tsx";
import { HomeContent, HOME_CONTENT } from "./data/home.ts";

export const handler: Handlers<HomeContent> = {
  GET(_req, ctx) {
    return ctx.render(HOME_CONTENT);
  },
};

export default function Home({ data }: PageProps<HomeContent>) {
  return (
    <MainLayout>
      <div class="page-wrapper">
        <div class="page-content">
          {/* <h1 class="title">{data.title}</h1> */}
          <img
            class="projects-image mb-4"
            src={data.imageUrl}
            alt={data.title}
          />
          <p class="message">
            {data.message}
          </p>
        </div>
      </div>
    </MainLayout>
  );
}
