import { Handlers, PageProps } from "$fresh/server.ts";
import { MainLayout } from "../components/MainLayout.tsx";
import { PressContent, PRESS_CONTENT } from "./data/press.ts";

export const handler: Handlers<PressContent> = {
  GET(_req, ctx) {
    return ctx.render(PRESS_CONTENT);
  },
};

export default function Press({ data }: PageProps<PressContent>) {
  return (
    <MainLayout>
      <div class="bg-white">
        <div class="max-w-3xl space-y-8">
          {data.items.map((item, index) => (
            <p key={index}>
              <a
                class="link"
                href={item.url}
              >
                {item.title}
              </a>
            </p>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
