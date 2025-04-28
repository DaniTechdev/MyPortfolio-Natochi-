// pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        {/* This script runs before React hydration or anything else loads */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function() {
              try {
                var savedTheme = localStorage.getItem('theme');
                var theme = savedTheme || 'dark';
                document.documentElement.setAttribute('data-theme', theme);
              } catch (err) {
                console.error('Failed to access localStorage for theme');
                document.documentElement.setAttribute('data-theme', 'dark');
              }
            })();
          `,
          }}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
