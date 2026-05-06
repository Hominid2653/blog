import React from "react";

function Article({ title, date, preview }) {
  return (
    <article className="bg-white p-5 rounded-xl shadow-sm border hover:shadow-md transition">
      <h3 className="text-xl font-semibold">
        {title}
      </h3>

      <small className="text-gray-400 block mt-1">
        {date}
      </small>

      <p className="text-gray-600 mt-3 leading-relaxed">
        {preview}
      </p>

      <button className="mt-4 text-sm font-medium text-blue-600 hover:underline">
        Read more →
      </button>
    </article>
  );
}