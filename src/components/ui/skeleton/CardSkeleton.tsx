const CardSkeleton = () => {
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

      {/* Content Area */}
      <div className="space-y-3">
        <div className="h-3 bg-gray-200 rounded w-full"></div>
        <div className="h-3 bg-gray-200 rounded w-3/4"></div>
        <div className="h-3 bg-gray-200 rounded w-1/2"></div>
      </div>

      {/* Bottom spacing */}
      <div></div>
      <div></div>
    </div>
  );
};

export default CardSkeleton;
