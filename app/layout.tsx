import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'Custodi del Plemmirio',
  description: "Simulatore gestionale dell'Area Marina Protetta",
  openGraph: {
    title: "🌊 Custodi del Plemmirio - Gioca Ora",
    description: "Mettiti alla prova come Direttore dell'Area Marina Protetta. Riuscirai a proteggere la biodiversità e gestire le emergenze senza far fallire l'Ente?",
    url: "https://custodi-del-plemmirio.vercel.app",
    siteName: "Custodi del Plemmirio",
    images: [
      {
        url: "https://custodi-del-plemmirio.vercel.app/mappa-mare.jpg", 
        width: 1200,
        height: 630,
        alt: "Mappa dell'Area Marina Protetta del Plemmirio",
      },
    ],
    locale: "it_IT",
    type: "website",
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="it">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}