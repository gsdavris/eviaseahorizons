import Image from "next/image";
import Pattern from "../svgs/Pattern";

export default function PostContentSection({
  subtitle,
  title,
  date,
  image,
  content,
}) {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <Pattern />
      <div className="mx-auto grid grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-2">
            {subtitle && (
              <p className="text-base font-semibold leading-7 text-secondary">
                {subtitle}
              </p>
            )}
            {title && (
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                {title}
              </h1>
            )}
            {date && (
              <p className="mt-6 text-xl leading-8 text-gray-700">
                <time dateTime={date} className="text-gray-500">
                  {new Date(date).toLocaleDateString("el", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </time>
              </p>
            )}
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <div
            data-aos="zoom-in-right"
            className="relative w-[48rem] h-[30rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10"
          >
            <Image
              className="rounded-xl"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: "cover", objectPosition: "center" }}
              src={image?.sourceUrl}
              alt={image?.altText}
            />
          </div>
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div
              className="text-base leading-7 text-gray-700"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
