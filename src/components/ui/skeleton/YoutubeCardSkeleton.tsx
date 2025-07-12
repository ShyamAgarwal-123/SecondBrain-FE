const YoutubeCardSkeleton = () => {
  return (
    <div className="bg-white rounded-md border-2 border-gray-100 max-w-72 p-4 flex flex-col gap-4 animate-pulse">
      {/* Header */}
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
          <div className="h-4 bg-gray-200 rounded w-20"></div>
        </div>
        <div className="flex gap-2 items-center">
          <div className="w-4 h-4 bg-gray-200 rounded"></div>
          <div className="w-4 h-4 bg-gray-200 rounded"></div>
        </div>
      </div>

      {/* YouTube Video Skeleton */}
      <div className="relative">
        {/* Video Thumbnail Placeholder */}
        <div className="w-full h-32 bg-gray-200 rounded-lg relative">
          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
              <div className="w-0 h-0 border-l-[8px] border-l-gray-400 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-1"></div>
            </div>
          </div>
        </div>

        {/* Video Info */}
        <div className="mt-3 space-y-2">
          <div className="h-3 bg-gray-200 rounded w-full"></div>
          <div className="h-3 bg-gray-200 rounded w-3/4"></div>
          <div className="flex items-center gap-2 mt-2">
            <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
            <div className="h-2 bg-gray-200 rounded w-16"></div>
            <div className="h-2 bg-gray-200 rounded w-12"></div>
          </div>
        </div>
      </div>

      {/* Bottom spacing */}
      <div></div>
      <div></div>
    </div>
  );
};

export default YoutubeCardSkeleton;
