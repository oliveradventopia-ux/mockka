import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Cormorant_Garamond, JetBrains_Mono, Lora } from 'next/font/google';
import './globals.css';

// Classical faces, self-hosted at build time via next/font — zero runtime
// font requests. The CSS variables feed the --font-* token stacks in
// globals.css, which carry serif fallbacks for the network-free exports.
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-cormorant',
  display: 'swap',
});
const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-lora',
  display: 'swap',
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jbmono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Mockka',
  description:
    'Original, blueprint-weighted practice exams for professional certifications.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${lora.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
