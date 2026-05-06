import React from "react";

function About({ image, about }) {
  return (
    <aside className="bg-white p-5 rounded-xl shadow-sm border flex items-center gap-4">
      <img
        src={image}
        alt="blog logo"
        className="w-16 h-16 rounded-full object-cover"
      />

      <p className="text-sm text-gray-600 leading-relaxed">
        {about}
      </p>
    </aside>
  );
}

export default About;