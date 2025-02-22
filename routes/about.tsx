import { Handlers, PageProps } from "$fresh/server.ts";
import { MainLayout } from "../components/MainLayout.tsx";
import { getAbout } from "../utils/about.ts";
import type { About } from "../types/about.ts";

export const handler: Handlers<About> = {
  async GET(_req, ctx) {
    const about = await getAbout();
    if (!about) {
      return ctx.render({ paragraphs: [], imageUrl: "", content: "" });
    }
    return ctx.render(about);
  },
};

export default function About({ data }: PageProps<About>) {
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
