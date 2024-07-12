import { Link } from "react-router-dom";
import data from "../data.json";

function Tours() {
  return (
    <div className="mt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-items-center">
        {data.toursdata.map((tour) => {
          return (
            <div className="">
              <h2 className="text-2xl">{tour.title}</h2>
              <img
                src={tour.image}
                alt=""
                className="object-cover w-[300px] h-[300px] mt-2 rounded-xl"
              />
              <div className="flex font-bold mt-3">
                <p>{tour.textPrice}</p>
                <p className="ml-2">{tour.price}</p>
              </div>
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
