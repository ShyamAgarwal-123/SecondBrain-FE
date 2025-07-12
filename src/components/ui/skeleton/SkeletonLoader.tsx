import {
  TwitterCardSkeleton,
  YoutubeCardSkeleton,
  CardSkeleton,
} from "./index";

interface SkeletonLoaderProps {
  count?: number;
  type?: "mixed" | "twitter" | "youtube" | "generic";
}

const SkeletonLoader = ({ count = 4, type = "mixed" }: SkeletonLoaderProps) => {
  const renderSkeleton = (index: number) => {
    if (type === "twitter") {
      return <TwitterCardSkeleton key={index} />;
    }
    if (type === "youtube") {
      return <YoutubeCardSkeleton key={index} />;
    }
    if (type === "generic") {
      return <CardSkeleton key={index} />;
    }

    // Mixed type - alternate between Twitter and YouTube
    return index % 2 === 0 ? (
      <TwitterCardSkeleton key={index} />
    ) : (
      <YoutubeCardSkeleton key={index} />
    );
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
      {Array.from({ length: count }, (_, index) => renderSkeleton(index))}
    </div>
  );
};

export default SkeletonLoader;
