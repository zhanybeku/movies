import "@styles/globals.css"
import Nav from "@components/Nav";

export const metadata = {
  title: "NEMATIQ",
  description: "Everything for movies using TMDB API",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
