// app/layout.js
import { Inter } from "next/font/google";
import "./globals.css";
import "./style.css";
import "./modal.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './components/navBar';
import Footer from './components/Footer';
import Line from './line/page';
import { CustomProviders } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "รับทำโฆษณาGoogleAdsสายเทา โฆษณาสายเทาเพื่อธุรกิจของคุณ",
  description: "รับทำโฆษณาออนไลน์สายเทา ผู้เชี่ยวชาญด้านการตลาดบน Google, YouTube และ Facebook",
  keywords: "ยิงads,facebook,สายเทา,โฆษณา,ยิงads facebook สายเทา,รับยิงads,รับยิงแอด สายเทา,facebook ads,google ads,google,รับยิงแอด,ads,รับทำโฆษณา,รับโฆษณา,Facebook,การตลาด,โฆษณาออนไลน์,เว็บไซต์,ตลาดเป้าหมาย,โฆษณาบนโซเชียลมีเดีย,Google Ads,การโฆษณาบน Facebook,การโฆษณาออนไลน์บนสื่อต่าง ๆ,การตลาดออนไลน์,การโปรโมท,โฆษณา Facebook,การโฆษณา Google,การโฆษณาสินค้า,การโฆษณาโปรโมชั่น,วิธีการโฆษณา,ความสำเร็จในการตลาด,บริการโฆษณา,การตลาดออนไลน์บน Facebook,การโฆษณาบนเว็บ,การวางแผนโฆษณา,รับจ้างโฆษณา",
  image: "https://www.adsdeps.com/img/ads.jpg",
  name: "adsmanager",
  canonical: 'https://adsdeps.com',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.image} />
        <meta property="og:url" content={metadata.canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={metadata.name} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={metadata.title} />
        <meta property="twitter:description" content={metadata.description} />
        <meta property="twitter:image" content={metadata.image} />
        <meta property="twitter:url" content={metadata.canonical} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={metadata.canonical} />
      </head>
      <body className={inter.className}>
        <CustomProviders>
          <NavBar />
          <Line />
          {children}
          <Footer />
        </CustomProviders>
      </body>
    </html>
  );
}
