import "@mantine/core/styles.css";
import '@mantine/carousel/styles.css';

import {Links, Meta, Outlet, Scripts, ScrollRestoration,} from "@remix-run/react";
import {ColorSchemeScript, MantineProvider} from "@mantine/core";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />
        <Meta />
        <Links />
        <ColorSchemeScript/>
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
      <MantineProvider>
          <Outlet/>
      </MantineProvider>
  );
}

export function HydrateFallback() {
  return <p>Loading...</p>;
}
