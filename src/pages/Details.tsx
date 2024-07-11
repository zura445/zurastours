import { useParams } from "react-router";
import data from "../data.json";

function Details() {
  const { id } = useParams();
  const singlePost = data.toursdata.find((item) => item.title === id);
  console.log(singlePost);

  return (
    <div className="p-8">
      <h1>{singlePost?.title}</h1>
      <div className="w-full h-[1px] bg-black"></div>
      <img
        src={singlePost?.image}
        alt="images"
        className="w-[300px] h-[300px] mt-2"
      />
    </div>
  );
}

export default Details;
