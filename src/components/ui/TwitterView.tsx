import type { CardProps } from "./Card";
import { useEffect } from "react";

const TwitterView = ({ link }: Pick<CardProps, "link">) => {
  useEffect(() => {
    // Check if twttr is available and call widgets.load
    if (window && (window as any).twttr && (window as any).twttr.widgets) {
      (window as any).twttr.widgets.load();
    }
  }, [link]);

  return (
    <blockquote className="twitter-tweet">
      <a href={link}></a>
    </blockquote>
  );
};

export default TwitterView;
