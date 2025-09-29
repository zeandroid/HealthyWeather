
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Healthy Weather - Weather-driven Health Insights',
  description: 'Transform weather and environmental data into personalized health solutions with our advanced machine learning technology.',
  keywords: 'weather, health, allergy tracker, environmental health, machine learning',
  authors: [{ name: 'Healthy Weather Team' }],
  openGraph: {
    title: 'Healthy Weather - Weather-driven Health Insights',
    description: 'Weather-driven health insights for a better tomorrow',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="smooth-scroll">
      <head>
        <link rel="icon" href="/logo.png" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
