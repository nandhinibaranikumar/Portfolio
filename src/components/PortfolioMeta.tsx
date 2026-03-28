import { useEffect } from "react";
import { portfolioData } from "@/data/portfolioData";

const ensureMetaTag = (selector: string, attributes: Record<string, string>) => {
  let tag = document.head.querySelector<HTMLMetaElement>(selector);

  if (!tag) {
    tag = document.createElement("meta");
    Object.entries(attributes).forEach(([key, value]) => {
      tag?.setAttribute(key, value);
    });
    document.head.appendChild(tag);
  }

  return tag;
};

const PortfolioMeta = () => {
  useEffect(() => {
    const { site } = portfolioData;

    document.title = site.title;

    ensureMetaTag('meta[name="description"]', { name: "description" }).setAttribute(
      "content",
      site.description
    );
    ensureMetaTag('meta[name="author"]', { name: "author" }).setAttribute(
      "content",
      site.author
    );
    ensureMetaTag('meta[property="og:title"]', { property: "og:title" }).setAttribute(
      "content",
      site.ogTitle
    );
    ensureMetaTag('meta[property="og:description"]', {
      property: "og:description",
    }).setAttribute("content", site.ogDescription);
  }, []);

  return null;
};

export default PortfolioMeta;
