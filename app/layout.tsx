import "./globals.css";
import Navbar from "../components/Navbar/index";
import Footer from "../components/Footer/Footer";
import GraphQLProvider from "../lib/provider";

export const metadata = {
  title: "ЖМ ДРИЙМ",
  description: "Сургалтын төв",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <GraphQLProvider>
          <Navbar />
          {children}
          <Footer />
        </GraphQLProvider>
      </body>
    </html>
  );
}
