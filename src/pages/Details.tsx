import { useParams } from "react-router";
import data from "../data.json";

function Details() {
  const { id } = useParams();
  const singlePost = data.toursdata.find((item) => item.title === id);
  console.log(singlePost);

  const images = [
    singlePost?.image1,
    singlePost?.image2,
    singlePost?.image3,
    singlePost?.image4,
    singlePost?.image5,
    singlePost?.image6,
    singlePost?.image7,
    singlePost?.image8,
    singlePost?.image9,
    singlePost?.image10,
    singlePost?.image11,
    singlePost?.image12,
    singlePost?.image13,
    singlePost?.image14,
  ];

  const videos = [singlePost?.video1, singlePost?.video2, singlePost?.video3];

  return (
    <div className="p-8">
      <h1>{singlePost?.title}</h1>
      <div className="w-full h-[1px] bg-black mt-2"></div>
      <p className="mt-2 text-lg">{singlePost?.textPhoto}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-items-center">
        {images.map(
          (image, index) =>
            image && (
              <img
                key={index}
                src={image}
                alt={`image ${index + 1}`}
                className="w-[300px] h-[300px] mt-2 object-cover"
              />
            )
        )}
      </div>
      <p className="mt-4 text-lg">{singlePost?.textVideo}</p>
      <div className="w-full h-[1px] bg-black mt-2"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 justify-items-center mt-4">
        {videos.map(
          (video, index) =>
            video && (
              <video
                key={index}
                src={video}
                controls
                className="w-full h-auto mt-2"
              >
                Your browser does not support the video tag.
              </video>
            )
        )}
      </div>
    </div>
  );
}

export default Details;
