import { BlogTag } from "./BlogTag";

export const BlogCard = ({
  image,
  title,
  name,
  date,
  tags,
  readable_publish_date,
}) => {
  return (
    <div className="border p-4 flex flex-col gap-2 w-full relative rounded-md bg-white h-[450px] md:h-[450px] md:grid md:text-left text-left ">
      <div className="h-full">
        <img
          src={image}
          alt="image"
          className="aspect-[2/1] w-full rounded-md object-cover"
        />
        <div className="py-2 px-1 flex flex-col gap-4">
          <div className="flex gap-2 flex-wrap ">
            {tags.map((tag) => (
              <BlogTag key={tag} tag={tag} />
            ))}
          </div>
          <h3 className="font-semibold text-2xl">{title}</h3>
          <p>{name}</p>
          <p className="text-gray-500"> {date}</p>
          <div className="md:flex md:justify-start">
            {readable_publish_date}
          </div>
        </div>
      </div>
    </div>
  );
};
