import Link from "next/link";
import { handleClientScriptLoad } from "next/script";
import { useEffect, useState } from "react";
import { BlogCard } from "./BlogCard";

const categories = ["All", "React", "Javascript", "Python", "Node.js", "Html"];

export const AllBlog = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);
  const [Views, viewBlogs] = useState([]);

  const [category, setCategory] = useState("All");
  const [perPage, setPerPage] = useState(9);

  const handleCategory = (category) => {
    setCategory(category);
    setPerPage(9);
  };

  const handleLoadMore = () => {
    setPerPage(perPage + 3);
  };

  useEffect(() => {
    setLoading(true);

    fetch(
      `https://dev.to/api/articles?page=1&per_page=${perPage}${
        category !== "All" ? `&tag=${category}` : ""
      }`
    )
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .then((data) => viewBlogs(data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [perPage, category]);

  return (
    <div className="flex flex-col gap-8 lg:w-[1200px] md:m-auto py-8">
      <h1 className="font-bold text-2xl text-center md:text-start md:ml-8 ">
        All Blog Post
      </h1>

      <div className="md:flex  w-full relative">
        {categories.map((item) => (
          <button
            key={item}
            className=" dark:bg-white mx-2 ml-8 text-base font-bold "
            style={{
              color: category === item ? "#D4A373" : "",
            }}
            onClick={() => handleCategory(item)}
          >
            {item}
          </button>
        ))}
        <Link key={Views} href={`/blogs`}>
          <p className="md:absolute md:right-0 text-[12px] text-[#495057] font-semibold cursor-pointer visible max-md:hidden  ">
            View All
          </p>
        </Link>
      </div>

      <button className="w-full grid grid-cols-1 gap-[24px] mx-3 md:grid md:grid-cols-3 md:w-[1200px] md:justify-start ">
        {blogs.map((blog) => (
          <Link key={blog.id} href={`/blogs/${blog.id}`}>
            <BlogCard
              key={blog.title}
              image={blog.cover_image}
              title={blog.title}
              date={blog.publish_at}
              tags={blog.tag_list}
              readable_publish_date={blog.readable_publish_date}
            />
          </Link>
        ))}
      </button>
      <button
        className="w-fit px-5 py-3 m-auto bg-[#fff] text white rounded-md border"
        onClick={handleLoadMore}
      >
        {loading ? (
          <p className="text-gray-500">Loading ...</p>
        ) : (
          <p className="text-gray-500">Load More</p>
        )}
      </button>
    </div>
  );
};

<BlogCard />;
