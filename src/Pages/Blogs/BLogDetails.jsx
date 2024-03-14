import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useAxiosPublic from "../../UseProvider/useAxiosPublic/useAxiosPublic";

import {
  FacebookIcon,
  FacebookMessengerIcon,
  FacebookMessengerShareButton,
  FacebookShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  XIcon,
} from "react-share";
import Heading from "../../Sheard/Heading/Heading";

const BlogDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const axiosPublic = useAxiosPublic();

  const shareUrl = `http://localhost:5173/touristblogs/${id}`;
  useEffect(() => {
    axiosPublic.get(`/touristblogs/${id}`).then((res) => {
      setDetails(res.data);

      axiosPublic.get("/touristblogs").then((res) => {
        setBlogs(res.data);
      });
    });
  }, [axiosPublic, id]);
  const {
    authorName,
    image,
    date,
    heading,
    subheading,
    description,
    authorImage,
    shortDescription,
  } = details;

  return (
    <div className="w-5/6 mx-auto my-20 space-y-6">
      <Heading heading={"Tourist Story"}></Heading>
      <div className="grid grid-cols-3 gap-3 justify-center">
        <div className="col-span-2">
          <h1 className="text-3xl font-bold my-2">{heading}</h1>

          <img src={image} alt="" className="mx-auto" />
          <div className="flex gap-3 items-center justify-center">
            <img
              src={authorImage}
              alt={authorName}
              className="w-14 h-14 rounded-full  "
            />
            <h1 className="text-center">Author Name: {authorName}</h1>

            <h1>{date}</h1>
          </div>
          <div className="flex gap-4 justify-center">
            <h1>If you want to share?</h1>
            <FacebookShareButton
              url={shareUrl}
              className="Demo__some-network__share-button"
            >
              <FacebookIcon size={32} round />
            </FacebookShareButton>

            <FacebookMessengerShareButton
              url={shareUrl}
              appId="521270401588372"
              className="Demo__some-network__share-button"
            >
              <FacebookMessengerIcon size={32} round />
            </FacebookMessengerShareButton>
            <TwitterShareButton
              url={shareUrl}
              className="Demo__some-network__share-button"
            >
              <XIcon size={32} round />
            </TwitterShareButton>

            <TelegramShareButton url={shareUrl}>
              <TelegramIcon size={32} round />
            </TelegramShareButton>

            <WhatsappShareButton url={shareUrl}>
              <WhatsappIcon size={32} round />
            </WhatsappShareButton>
          </div>

          <h1 className="text-3xl font-bold">{heading}</h1>
          <p>{description}</p>
          <h1 className="text-2xl italic p-5">{subheading}</h1>
          <p>{shortDescription}</p>
        </div>

        <div className="mx-auto">
          {" "}
          <h1 className="text-2xl border-b-[#ffb300] border-b-2 py-2">
            Recent Story
          </h1>
          {blogs.map((blog) => (
            <div key={blog._id} className=" w-[300px] border-2 my-5">
              <img
                src={blog.image}
                alt="Shoes"
                className=" p-3 duration-500 hover:p-1  h-56 w-full"
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
      </div>
    </div>
  );
};

export default BlogDetails;
