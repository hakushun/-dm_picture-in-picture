import type { Metadata } from 'next';
import './styles/reset.css';
import './styles/global.css';

export const metadata: Metadata = {
  title: 'Demo Picture-in-Picture',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
