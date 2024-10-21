import { Handlers, PageProps } from "$fresh/server.ts";
import { MainLayout } from "../components/MainLayout.tsx";
import { AboutContent, ABOUT_CONTENT } from "./data/about.ts";

export const handler: Handlers<AboutContent> = {
  GET(_req, ctx) {
    return ctx.render(ABOUT_CONTENT);
  },
};

export default function About({ data }: PageProps<AboutContent>) {
  return (
    <MainLayout>
      <div class="page-wrapper">
        <div class="page-content">
          {/* <h1 class="title">{data.title}</h1> */}
          {data.paragraphs.map((paragraph, index) => (
            <p key={index} class="message">{paragraph}</p>
          ))}
          <p class="message">
            <a class="press-link" href="/cv">
              Link to CV
            </a>
          </p>
          <h2 class="cv-title"></h2>
          <img class="avatar" src={data.imageUrl} alt="Vicky Am See" />
        </div>
      </div>
    </MainLayout>
  );
}
