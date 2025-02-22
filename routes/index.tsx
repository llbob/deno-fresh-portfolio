import { Handlers, PageProps } from "$fresh/server.ts";
import { MainLayout } from "../components/MainLayout.tsx";
import { getIndex } from "../utils/index.ts";
import type { Index } from "../types/index.ts";

export const handler: Handlers<Index> = {
  async GET(_req, ctx) {
    const index = await getIndex();
    if (!index) {
      return ctx.render({ title: "", imageUrl: "", message: "", content: "" });
    }
    return ctx.render(index);
  },
};

export default function Home({ data }: PageProps<Index>) {
  return (
    <MainLayout>
      <div class="max-w-3xl">
        <div>
          {/* <h1 class="title">{data.title}</h1> */}
          <img
            className="index-image"
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
