import "@/styles/globals.css";
import "./styles/style.css";
import "./styles/responsive.css";
import "./styles/slider.css";
// Tiptap editor global styles
import "@/components/tiptap-templates/simple/simple-editor.scss";
import "@/components/tiptap-node/blockquote-node/blockquote-node.scss";
import "@/components/tiptap-node/code-block-node/code-block-node.scss";
import "@/components/tiptap-node/horizontal-rule-node/horizontal-rule-node.scss";
import "@/components/tiptap-node/list-node/list-node.scss";
import "@/components/tiptap-node/image-node/image-node.scss";
import "@/components/tiptap-node/heading-node/heading-node.scss";
import "@/components/tiptap-node/paragraph-node/paragraph-node.scss";
import "@/components/tiptap-node/image-upload-node/image-upload-node.scss";
import "@/components/tiptap-ui-primitive/button/button-colors.scss";
import "@/components/tiptap-ui-primitive/button/button-group.scss";
import "@/components/tiptap-ui-primitive/button/button.scss";
import "@/components/tiptap-ui-primitive/card/card.scss";
import "@/components/tiptap-ui-primitive/dropdown-menu/dropdown-menu.scss";
import "@/components/tiptap-ui-primitive/input/input.scss";
import "@/components/tiptap-ui-primitive/popover/popover.scss";
import "@/components/tiptap-ui-primitive/separator/separator.scss";
import "@/components/tiptap-ui-primitive/toolbar/toolbar.scss";
import "@/components/tiptap-ui-primitive/tooltip/tooltip.scss";
import "@/components/tiptap-ui/color-highlight-button/color-highlight-button.scss";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";
import Footer from "./footer";
import Header from "./header";
import Head from "next/head";
import dynamic from "next/dynamic";
import SnowfallEffect from "../components/SnowfallEffect";
import SantaAnimation from '../components/SantaAnimation';

const TawkMessenger = dynamic(() => import('../components/TawkMessenger'), { ssr: false });

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");

    // Initialize GTM properly
    import("react-gtm-module").then(({ default: TagManager }) => {
      TagManager.initialize({ gtmId: "GTM-WFWXZHTW" });
    });
  }, []);

  return (
    <div>
      <Head>
        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="1Q8o_x3M1br7MBNk8PzVL5In21lZ1GaSPN4KTOXCaQw"
        />

        {/* Favicon */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="icon"
          href="https://res.cloudinary.com/daggx9p24/image/upload/v1737789998/spamcloud-logo-sm_vj7kcc.png"
        />

        {/* Preconnect to Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      </Head>

      <Header />
      {/* Global snowfall effect on all pages */}
      <SnowfallEffect />
      <SantaAnimation />
      <Component {...pageProps} />
      <TawkMessenger />
      <Footer />
    </div>
  );
};

export default MyApp;
