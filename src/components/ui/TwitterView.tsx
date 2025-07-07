import type { CardProps } from "./Card";

const TwitterView = ({ link }: Pick<CardProps, "link">) => {
  return (
    <blockquote className="twitter-tweet">
      <a href={link}></a>
    </blockquote>
  );
};
// replace x.com to twitter.com
export default TwitterView;
