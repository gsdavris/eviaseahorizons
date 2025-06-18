import { useEffect } from "react";
import { useRouter } from "next/router";
import Script from "next/script";
import AOS from "aos";
import "@/styles/global.css";
import "aos/dist/aos.css";
import { ModalProvider } from "@/context";
import { ApolloProvider } from "@apollo/client";
import client from "@/apollo/client";
import * as gtag from "@/utils/gtag";

export default function MyApp ({ Component, pageProps, router }) {
  const myRouter = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    myRouter.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      myRouter.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [myRouter.events]);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <ApolloProvider client={ client }>
      <ModalProvider>
        {/* Google Analytics Script */ }
        <Script
          strategy="beforeInteractive"
          src={ `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}` }
        />
        <Script
          id="google-analytics"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={ {
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
              page_path: window.location.pathname,
            });
          `,
          } }
        />
        <Component { ...pageProps } key={ router.asPath } />
      </ModalProvider>
    </ApolloProvider>
  );
}
