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
      <div class="bg-white">
        <div class="max-w-3xl space-y-8">
          {data.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          <p>
            <a class="link" href="/cv">
              Link to CV
            </a>
          </p>
          <img class="w-full h-auto rounded" src={data.imageUrl} alt="..." />
        </div>
      </div>
    </MainLayout>
  );
}
