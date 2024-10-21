import { JSX } from "preact";
import { StripeScript } from "./StripeScript.tsx";

// Define the layout component that accepts children
export function MainLayout({ children }: { children: JSX.Element }) {
  return (
    <html>
      <head>
        <StripeScript />
      </head>
      <body class="font-sans leading-relaxed">
        <div class="max-w-none mx-4 my-4">
          <a href="/" class="block mb-2 md:mb-4 lg:mb-8">
            <span class="text-xl font-serif hover:underline">Deno Fresh Indexhibit</span>
          </a>
          <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
            <nav class="md:col-span-1">
              <ul class="flex md:flex-col space-y-0 md:space-y-1 space-x-4 md:space-x-0">
                <li><a href="/projects" class="font-serif text-xl hover:underline">Projects</a></li>
                <li><a href="/about" class="font-serif text-xl hover:underline">About</a></li>
                {/* <li><a href="/cv" class="font-serif text-xl hover:underline">CV</a></li> */}
                <li><a href="/press" class="font-serif text-xl hover:underline">Press</a></li>
              </ul>
            </nav>
            <main class="md:col-span-3">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
