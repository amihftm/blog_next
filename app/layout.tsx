import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local'
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { ThemeProvider } from "@/providers/theme/themeContext";
import BWTheme from "@/providers/bwTheme/BWTheme";
import AuthProvider from "@/providers/auth/AuthProvider";

const Bidad = localFont({src: [
  {path: './fonts/Bidad-Thin.ttf', weight:'100'},
  {path: './fonts/Bidad-Light.ttf', weight:'300'},
  {path: './fonts/Bidad-Regular.ttf', weight:'400'},
  {path: './fonts/Bidad-Medium.ttf', weight:'500'},
  {path: './fonts/Bidad-SemiBold.ttf', weight:'600'},
  {path: './fonts/Bidad-Bold.ttf', weight:'700'},
  {path: './fonts/Bidad-Black.ttf', weight:'900'},
]})

export const metadata: Metadata = {
  title: "برنامه وبلاگ نویسی",
  description: "برنامه وبلاگ نویسی کد نویسی شده به زبان NEXT.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={Bidad.className}>
        <AuthProvider>
          <ThemeProvider>
            <BWTheme>
              <div className="container">
                <div className="wrapper">
                  <Navbar />
                  {children}
                  <Footer />
                </div>
              </div>
            </BWTheme>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
