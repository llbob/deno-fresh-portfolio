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
      <div class="page-wrapper">
        <div class="page-content">
          <p class="message">{data.subtitle}</p>
          {data.sections.map((section, index) => (
            <div key={index}>
              <h5 class="h5 cv-title">{section.title}</h5>
              <ul class="cv-list">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} class="message">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
