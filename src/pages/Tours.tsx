import { Link } from "react-router-dom";
import data from "../data.json";

function Tours() {
  return (
    <div className="mt-4">
      <div className="flex gap-5">
        {data.toursdata.map((tour) => {
          return (
            <div className="">
              <h2 className="text-2xl">{tour.title}</h2>
              <img
                src={tour.image}
                alt=""
                className="object-cover w-[300px] h-[300px] mt-2 rounded-xl"
              />
              <Link to={`/tours/${tour.title}`} className="mt-2">
                {tour.see}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Tours;
