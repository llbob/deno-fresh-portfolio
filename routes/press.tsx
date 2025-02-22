import { Handlers, PageProps } from "$fresh/server.ts";
import { MainLayout } from "../components/MainLayout.tsx";
import { getPress } from "../utils/press.ts";
import type { Press } from "../types/press.ts";

export const handler: Handlers<Press> = {
  async GET(_req, ctx) {
    const press = await getPress();
    if (!press) {
      return ctx.render({ items: [], content: "" });
    }
    return ctx.render(press);
  },
};

export default function PressPage({ data }: PageProps<Press>) {
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
