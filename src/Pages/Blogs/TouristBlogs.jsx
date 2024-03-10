import { useEffect, useState } from "react";
import Heading from "../../Sheard/Heading/Heading";
import useAxiosPublic from "../../UseProvider/useAxiosPublic/useAxiosPublic";
import { Link } from "react-router-dom";

const TouristBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const axiosPublic = useAxiosPublic();

  // console.log(res.data);

  useEffect(() => {
    axiosPublic.get("/touristblogs").then((res) => {
      setBlogs(res.data);
    });
  }, [axiosPublic]);
  // console.log(blogs);
  return (
    <div className="w-5/6 mx-auto text-center">
      <Heading heading={"Tourist BLogs"}> </Heading>
      <h1 className="text-center mb-5">
        One inspiring story is worth traveling. Discover more about local food,
        tradition and history. Read the stories that make you want to travel.
      </h1>
      <div className="grid md:grid-cols-3 justify-center gap-4">
        {blogs.map((blog) => (
          <div key={blog.id} className=" w-[350px] border-8">
            <img
              src={blog.image}
              alt="Shoes"
              className=" p-3 duration-500 hover:p-1  h-80 w-full"
            />

            <div className=" items-center text-center">
              <div className="card-actions my-5 duration-300 hover:text-[#ffb300]">
                <Link to={`/touristblogs/${blog._id}`}>
                  <h2 className="  text-2xl ">{blog.heading}</h2>
                  <p>{blog.about}</p>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link to="/blogs">
        {" "}
        <button className="btn btn-primary text-center my-10">
          {" "}
          All Blogs
        </button>
      </Link>
    </div>
  );
};

export default TouristBlogs;
