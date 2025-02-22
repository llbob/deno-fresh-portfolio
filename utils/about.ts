import { extract } from "$std/front_matter/yaml.ts";
import { About } from "../types/about.ts";

export async function getAbout(): Promise<About | null> {
  try {
    const mdContent = await Deno.readTextFile("about.md");
    const { attrs, body } = extract(mdContent);
    const { paragraphs, imageUrl } = attrs as {
      paragraphs: string[];
      imageUrl: string;
    };
    
    return {
      paragraphs,
      imageUrl,
      content: body
    };
  } catch (error) {
    console.error("Error reading about.md:", error);
    return null;
  }
} 