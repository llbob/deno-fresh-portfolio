import { Handlers, PageProps } from "$fresh/server.ts";
import { MainLayout } from "../components/MainLayout.tsx";
import { CVContent, CV_CONTENT } from "./data/cv.ts";

export const handler: Handlers<CVContent> = {
  GET(_req, ctx) {
    return ctx.render(CV_CONTENT);
  },
};

export default function CV({ data }: PageProps<CVContent>) {
  return (
    <MainLayout>
      <div class="bg-white">
        <div class="max-w-3xl space-y-8">
          <p class="mb-4">{data.subtitle}</p>
          {data.sections.map((section, index) => (
            <div key={index} class="mb-6">
              <p class="text-xl font-serif mb-2">{section.title}</p>
              <ul class="space-y-4">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
