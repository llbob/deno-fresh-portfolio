import { extract } from "$std/front_matter/yaml.ts";
import { Index } from "../types/index.ts";

export async function getIndex(): Promise<Index | null> {
  try {
    const mdContent = await Deno.readTextFile("index.md");
    const { attrs, body } = extract(mdContent);
    const { title, imageUrl, message } = attrs as {
      title: string;
      imageUrl: string;
      message: string;
    };
    
    return {
      title,
      imageUrl,
      message,
      content: body
    };
  } catch (error) {
    console.error("Error reading index.md:", error);
    return null;
  }
} 