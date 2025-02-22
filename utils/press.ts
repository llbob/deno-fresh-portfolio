import { extract } from "$std/front_matter/yaml.ts";
import { Press } from "../types/press.ts";

export async function getPress(): Promise<Press | null> {
  try {
    const mdContent = await Deno.readTextFile("press.md");
    const { attrs, body } = extract(mdContent);
    const { items } = attrs as {
      items: { title: string; url: string; }[];
    };
    
    return {
      items,
      content: body
    };
  } catch (error) {
    console.error("Error reading press.md:", error);
    return null;
  }
} 