import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../../UseProvider/useAxiosPublic/useAxiosPublic";

import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookMessengerIcon,
  FacebookMessengerShareButton,
  FacebookShareButton,
  FacebookShareCount,
  GabIcon,
  GabShareButton,
  HatenaIcon,
  HatenaShareButton,
  HatenaShareCount,
  InstapaperIcon,
  InstapaperShareButton,
  LineIcon,
  LineShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  LivejournalIcon,
  LivejournalShareButton,
  MailruIcon,
  MailruShareButton,
  OKIcon,
  OKShareButton,
  OKShareCount,
  PinterestIcon,
  PinterestShareButton,
  PinterestShareCount,
  PocketIcon,
  PocketShareButton,
  RedditIcon,
  RedditShareButton,
  RedditShareCount,
  TelegramIcon,
  TelegramShareButton,
  TumblrIcon,
  TumblrShareButton,
  TumblrShareCount,
  TwitterShareButton,
  ViberIcon,
  ViberShareButton,
  VKIcon,
  VKShareButton,
  VKShareCount,
  WeiboIcon,
  WeiboShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  WorkplaceIcon,
  WorkplaceShareButton,
  XIcon,
} from "react-share";
import Heading from "../../Sheard/Heading/Heading";

const BlogDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState([]);
  const axiosPublic = useAxiosPublic();

  const shareUrl = `http://localhost:5173/touristblogs/${id}`;
  useEffect(() => {
    axiosPublic.get(`/touristblogs/${id}`).then((res) => {
      setDetails(res.data);
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
      <h1 className="text-3xl font-bold">{heading}</h1>

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
  );
};

export default BlogDetails;
