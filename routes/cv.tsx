import { Handlers, PageProps } from "$fresh/server.ts";
import { MainLayout } from "../components/MainLayout.tsx";
import { getCV } from "../utils/cv.ts";
import type { CV } from "../types/cv.ts";

export const handler: Handlers<CV> = {
  async GET(_req, ctx) {
    const cv = await getCV();
    if (!cv) {
      return ctx.render({ subtitle: "", sections: [], content: "" });
    }
    return ctx.render(cv);
  },
};

export default function CV({ data }: PageProps<CV>) {
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
          <div dangerouslySetInnerHTML={{ __html: data.content }} />
        </div>
      </div>
    </MainLayout>
  );
}
