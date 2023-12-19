import "./globals.css";
import classes from "./Layout.module.css";
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: "DJ Events",
  description: "Instructed by Brad Traversy",
  keywords: "music, dj, edm, events",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={classes.container}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
