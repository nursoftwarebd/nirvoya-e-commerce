import Footer from "@/components/shared/Footer/Footer";
import Navbar from "@/components/shared/Navbar/Navbar";
import Providers from "@/redux/Provider";
import { ToastContainer } from "react-toastify";
import "../styles/globals.css";
import "../styles/hero-click-slider.css";

export const metadata = {
  title: "Nirvoya",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Providers>
          <header>
            <link
              rel="stylesheet"
              type="text/css"
              charset="UTF-8"
              href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            />
            <link
              rel="stylesheet"
              type="text/css"
              href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            />
            <Navbar />
          </header>
          <main>{children}</main>
          <ToastContainer />
          <footer>
            <Footer />
          </footer>
        </Providers>
      </body>
    </html>
  );
}
