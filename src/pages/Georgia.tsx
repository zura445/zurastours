function Georgia() {
  return (
    <div className="">
      <p className="mt-4 font-bold">
        "Discover Georgia with Zura Tours - where East meets West in perfect
        harmony. From snow-capped mountains to lush valleys, ancient churches to
        modern cities, Georgia offers a unique blend of history and comfort.
        Indulge in our halal-friendly cuisine, relax in luxurious resorts, and
        immerse yourself in our rich culture. Watch our videos and let Georgia
        captivate you - your next extraordinary adventure with Zura Tours
        awaits!"
      </p>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-8 mt-8">
        <video
          src="/video/video-georgia.mp4"
          controls
          className="w-full h-[370px]"
        ></video>
        <video
          src="/video/video-georgia1.mp4"
          controls
          className="w-full h-[370px]"
        ></video>
        <video
          src="/video/video-georgia2.mp4"
          controls
          className="w-full h-[370px]"
        ></video>
        <video
          src="/video/video-georgia3.mp4"
          controls
          className="w-full h-[370px]"
        ></video>
      </div>
    </div>
  );
}

export default Georgia;
