import type { CardProps } from "./Card";

const YoutubeView = ({ link }: Pick<CardProps, "link">) => {
  return (
    <iframe
      className="rounded w-full"
      src={link} // make sure replace watch with embed
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  );
};

export default YoutubeView;
//"https://www.youtube.com/embed/jp06g8Vkq3w?si=TDuUSTPc6igdtUJt"

//https://youtu.be/jp06g8Vkq3w?si=HscDak7KTuv0Pxbu
