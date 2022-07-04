import React from "react";
import NextHead from "next/head";
import { MetaHeadEmbed } from "@phntms/react-share";

const Head = ({ pageTitle = "Home", description = "", pagePath = "home" }) => {
  return (
    <MetaHeadEmbed
      render={(meta) => <NextHead>{meta}</NextHead>}
      siteTitle="Jed Adrian Denosta"
      pageTitle={pageTitle}
      titleTemplate="[siteTitle] | [pageTitle]"
      description={description}
      baseSiteUrl="https://jedadrian.vercel.app/"
      pagePath={pagePath}
      keywords={["creative-agency", "phantom", "work"]}
      imageUrl="/"
      imageAlt="Jed Logo"
      twitter={{
        cardSize: "large",
        siteUsername: "@jed",
        creatorUsername: "@jed",
      }}
    />
  );
};

export default Head;
