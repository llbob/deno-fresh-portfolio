import { PageProps } from "$fresh/server.ts";

export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/style.css" />
        <title>Deno Fresh Indexhibit</title>
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Domine:wght@400..700&display=swap');
          `}
        </style>
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
