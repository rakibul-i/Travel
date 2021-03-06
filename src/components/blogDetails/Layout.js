import React from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import MakeReviews from "./MakeReviews";
import Reviews from "./Reviews";

const Layout = () => {
  const { id } = useParams();
  const { blogs } = useAuth();

  const blog = blogs.find((b) => b._id === id);

  if (!blog) {
    return (
      <div>
        <h1 className="py-40 text-center text-pink-500">Blog is loading...</h1>
      </div>
    );
  }
  return (
    <section className="lg:w-7/12 md:w-9/12 w-11/12 mx-auto py-5 ">
      <h1 className="text-center py-4 font-bold md:text-4xl text-xl">
        {blog?.title}
      </h1>
      <p className="capitalize text-center py-2">
        {blog?.traveler} {new Date(blog?.date).toDateString()}
      </p>
      <div className="flex justify-center">
        <img src={blog?.imageUrl} alt="" />
      </div>
      <p className="capitalize text-center py-2 font-bold flex justify-around">
        <span>{blog?.location}</span> <span>${blog?.cost}</span>
      </p>
      <p className="py-5">{blog?.description}</p>

      {/* // user review */}
      <div>
        <hr />
        <MakeReviews id={id} />
        <hr />
        <Reviews id={id} />
      </div>
    </section>
  );
};

export default Layout;
