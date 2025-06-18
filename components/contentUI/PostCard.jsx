import Image from "next/image";
import Link from "next/link";

const PostCard = ({ post, loading }) => {
  return (
    <article
      className={`flex flex-col items-start ${
        loading && "animate-pulse"
      } justify-between`}
    >
      <Image
        src={post?.featuredImage?.node?.sourceUrl || "/blog_post.jpg"}
        width="400"
        height="300"
        alt={post?.featuredImage?.node?.altText || "blog post"}
        className="w-full mb-4 rounded-md"
      />
      <div className="flex items-center gap-x-4 text-xs">
        <time dateTime={post?.date} className="text-gray-500">
          {new Date(post?.date).toLocaleDateString("el", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </time>
        {post.categories?.nodes?.map((category) => (
          <Link
            key={category?.id}
            href={category?.slug}
            className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
          >
            {category?.name}
          </Link>
        ))}
      </div>
      <div className="group relative">
        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
          <Link href={"/news/" + post?.slug}>
            <span className="absolute inset-0" />
            {post?.title}
          </Link>
        </h3>
        <div
          className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600"
          dangerouslySetInnerHTML={{ __html: post?.excerpt }}
        />
      </div>
      <div className="relative mt-8 flex items-center gap-x-4">
        <img
          src={post?.author?.node?.avatar?.url}
          alt=""
          className="h-10 w-10 rounded-full bg-gray-50"
        />
        <div className="text-sm leading-6">
          <p className="font-semibold text-gray-900">
            <span className="absolute inset-0" />
            {post?.author?.name || post?.author?.node?.name}
          </p>
          <p className="text-gray-600">{post?.author?.node?.description}</p>
        </div>
      </div>
    </article>
  );
};

export default PostCard;
