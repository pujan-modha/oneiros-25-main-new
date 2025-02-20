import React from "react";

const Message = () => {
  return (
    <div className="flex flex-col items-center text-center px-4 sm:px-8 md:px-16 py-10">
      <h1 className="text-2xl md:text-3xl font-bold text-zinc-600">
        Message from our Leadership
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mt-6">
        {[
          "https://www.youtube.com/embed/SBmzt7XXnwM",
          "https://www.youtube.com/embed/w_dvyREXr6Q",
          "https://www.youtube.com/embed/PJIN1XEOvY8",
        ].map((url, index) => (
          <div
            key={index}
            className="w-full aspect-video rounded-lg shadow-md overflow-hidden"
          >
            <iframe
              className="w-full h-full"
              src={url}
              title={`Leadership Video ${index + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Message;
