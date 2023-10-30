export const metadata = {
  title: 'Imsety',
  description: 'The personal website of Imsety Taylor'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
