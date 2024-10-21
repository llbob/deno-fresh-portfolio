import { JSX } from "preact";
import { StripeScript } from "./StripeScript.tsx";

// Define the layout component that accepts children
export function MainLayout({ children }: { children: JSX.Element }) {
  return (
    <html>
      <head>
        <StripeScript />
      </head>
      <body>
        <div class="app">
          <a href="/" class="title-card">
            <span class="page-name h5 page-name-item">Deno Fresh Indexhibit</span>
          </a>
          <div class="app-container">
            <nav class="main-menu">
              <ul>
                <li><a href="/projects" class="menu-item"><span class="h5">Projects</span></a></li>
                <li><a href="/press" class="menu-item"><span class="h5">Press</span></a></li>
                <li><a href="/about" class="menu-item"><span class="h5">About</span></a></li>
              </ul>
            </nav>
            <main class="content">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
