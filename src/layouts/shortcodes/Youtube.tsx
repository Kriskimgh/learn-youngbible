import React from "react";

const Youtube = ({
  id,
  title = "YouTube Video",
  ...rest
}: {
  id: string;
  title?: string;
  [key: string]: any;
}) => {
  return (
    <div className="relative w-full pt-[56.25%] rounded-lg overflow-hidden">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={`https://www.youtube.com/embed/${id}`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        {...rest}
      />
    </div>
  );
};

export default Youtube;
