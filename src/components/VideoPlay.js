import React from "react";
import { IoIosClose } from "react-icons/io";
import useFetchDetail from "../hooks/useFetchDetail";

const VideoPlay = ({ data, close, media_type }) => {
  const { data: videoData } = useFetchDetail(
    `/${media_type}/${data?.id}/videos`
  );
  console.log(videoData?.results[0]?.key.split(3));
  return (
    <section
      className="fixed bg-neutral-700 top-0 right-0 bottom-0 left-0 z-40 bg-opacity-50 flex 
    justify-center items-center"
    >
      <div className="bg-black w-full max-h-[80vh] max-w-screen-xl aspect-video rounded relative">
        <button
          onClick={close}
          className="absolute -right-3 -top-9 text-5xl z-50"
        >
          <IoIosClose />
        </button>
        <iframe
          src={`https://www.youtube.com/embed/${videoData?.results[0]?.key}`}
          className="w-full h-full"
        />
      </div>
    </section>
  );
};

export default VideoPlay;
