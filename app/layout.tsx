import "./globals.css";
import Navbar from "../components/Navbar/index";
import Footer from "../components/Footer/Footer";
import GraphQLProvider from "../lib/provider";
import { AuthProvider } from "@/lib/authContext";

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
        <AuthProvider>
          <GraphQLProvider>
            <Navbar />
            {children}
            <Footer />
          </GraphQLProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
