import { handleClientScriptLoad } from "next/script";
import { useEffect, useState } from "react";

const categories = ["All", "React", "Javascript", "Python", "Node.js", "Html"];

export const AllBlog = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);

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
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [perPage, category]);

  return (
    <div className="flex flex-col gap-8 lg:w-[1100px] md:ml-[500px] py-8">
      <h1 className="font-bold text-2xl text-center md:text-start md:ml-8 "> All Blog Post</h1>
      <div>
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
      </div>

      <div className="w-full grid grid-cols-1 gap-[24px] mx-3 md:grid md:grid-cols-3 md:w-[1200px]">
        {blogs.map((blog) => (
          <BlogCard
            key={blog.title}
            image={blog.cover_image}
            title={blog.title}
            date={blog.publish_at}
            tags={blog.tag_list}
          />
        ))}
      </div>
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

const BlogCard = ({ image, title, date, tags }) => {
  return (
    <div className="border p-4 flex flex-col gap-4 w-full rounded-md bg-white">
      <img src={image} alt="image" className="aspect-[2/1] w-full rounded-md object-cover" />
      <div className="py-2 flex flex-col gap-4">
        <div className="flex gap-2 flex-wrap">
          {tags.map((tag) => (
            <BlogTag key={tag} tag={tag} />
          ))}
        </div>
        <h3 className="font-semibold text-2xl">{title}</h3>
        <p className="text-gray-500"> {date}</p>
      </div>
    </div>
  );
};

const BlogTag = ({ tag }) => {
  return (
    <div className="bg-[#4b6bfb0d] py-1 px-[10px] rounded-md">
      <p className="text-[#4b6bfb] font-medium text-md capitalize"> {tag}</p>
    </div>
  );
};
