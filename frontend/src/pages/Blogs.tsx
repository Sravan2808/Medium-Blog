import BlogCard from "../components/BlogCard";
import Appbar from "../components/Appbar";
import { useBlogs } from "../hooks/useBlog";
import Skeleton from "../components/Skeleton";

const Blogs = () => {
  const { loading, blogs } = useBlogs();

  if (loading) {
    return  <div>
        <Appbar />
        <div className=" flex justify-center">
          <div >
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </div>
        </div>
      </div>
  }
  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div>
          {blogs.map((blog) => (
            <BlogCard
            id={blog.id}            
              authorName={blog.author.name || "Anonymous"}
              title={blog.title}
              content={blog.content}
              publishedDate={"12th June 2025"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
