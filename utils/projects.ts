import { extract } from "$std/front_matter/yaml.ts";
import { Project } from "../types/project.ts";
import { join } from "$std/path/mod.ts";

export async function getProjects(): Promise<Project[]> {
  const projects: Project[] = [];
  
  for await (const dirEntry of Deno.readDir("_projects")) {
    if (dirEntry.name.endsWith('.md')) {
      const mdContent = await Deno.readTextFile(
        join("_projects", dirEntry.name)
      );
      
      const { attrs, body } = extract(mdContent);
      const { title, year, imageUrl } = attrs as {
        title: string;
        year: number;
        imageUrl: string | string[];
      };

      // Handle both single imageUrl and array of imageUrls
      const imageUrls = Array.isArray(imageUrl) ? imageUrl : [imageUrl];
      
      projects.push({
        id: title.toLowerCase().replace(/\s+/g, '-'),
        title,
        year,
        images: imageUrls.map(img => {
          return img.replace(/^\/?(public\/)?/, '/');
        }),
        content: body
      });
    }
  }

  return projects.sort((a, b) => b.year - a.year);
} 