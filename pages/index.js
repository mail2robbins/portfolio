import Head from "next/head";
import { useEffect, useMemo, useState } from "react";
import LeftColumn from "../components/LeftColumn";
import RightColumn from "../components/RightColumn";

export default function Home() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {}, []);

  const calculate = useMemo(() => Math.min(scroll / 15, 100), [scroll]);

  const backgroundStyles = {
    background: `linear-gradient(0deg, rgba(59,0,145,1)  0%,rgba(36,36,36,1) ${calculate}%)`,
  };

  return (
    <div>
      <Head>
        <title>Robin | Developer</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:url"
          content="https://portfolio-robbie.vercel.app"
          key="ogurl"
        />
        <meta property="og:site_name" content="Article" key="ogsitename" />
        <meta
          property="og:title"
          content="Robin Thomas | ASP.Net / C# / .Net Core / Web API / Azure / SQL / Angular / React / NodeJs / Next / Python / Selenium Developer"
          key="ogtitle"
        />
        <meta
          property="og:description"
          content="Built Using Next.js, Tailwind CSS and Framer Motion. This portfolio is showcase my projects as well as technologies I work on."
          key="ogdesc"
        />
      </Head>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 min-h-screen">
        <div
          className="col-span-1 md:max-h-screen bg-primary overflow-auto overflow-x-hidden"
          style={backgroundStyles}
        >
          <LeftColumn />
        </div>
        <div className="col-span-2 lg:col-span-3 overflow-y-hidden bg-secondary">
          <RightColumn scroll={scroll} setScroll={setScroll} />
        </div>
      </div>
    </div>
  );
}
