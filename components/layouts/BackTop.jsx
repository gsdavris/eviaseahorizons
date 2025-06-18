import { useState, useEffect } from "react";
import { FaChevronUp } from "react-icons/fa6";

const BackTop = () => {
  const [open, set] = useState(false);

  // When the user clicks on the button, scroll to the top of the document smoothly
  const handleClick = () => {
    const view = document.getElementById("__next");
    view.scrollIntoView({ behavior: "smooth" });
  };

  // When the user reach close to the bottom, show the button
  useEffect(() => {
    const onScroll = () => {
      const bottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 200;
      if (bottom) {
        set(true);
      } else {
        set(false);
      }
    };
    if ("undefined" !== typeof window) {
      window.addEventListener("scroll", onScroll);
    }
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={
        open
          ? "fixed bottom-16 right-5 lg:right-16"
          : "hidden fixed bottom-16 right-5 lg:right-16"
      }
    >
      <button
        onClick={handleClick}
        className="bg-gray-500 hover:bg-gray-700 shadow hover:shadow-lg rounded-full h-14 w-14 flex items-center justify-center focus:outline-none"
      >
        <span className="sr-only">Back to top</span>
        <FaChevronUp className="text-white h-6 w-6" />
      </button>
    </div>
  );
};

export default BackTop;
