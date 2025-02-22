import { extract } from "$std/front_matter/yaml.ts";
import { CV } from "../types/cv.ts";

export async function getCV(): Promise<CV | null> {
  try {
    const mdContent = await Deno.readTextFile("cv.md");
    const { attrs, body } = extract(mdContent);
    const { subtitle, sections } = attrs as {
      subtitle: string;
      sections: { title: string; items: string[] }[];
    };
    
    return {
      subtitle,
      sections,
      content: body
    };
  } catch (error) {
    console.error("Error reading cv.md:", error);
    return null;
  }
} 