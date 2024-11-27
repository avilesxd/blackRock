import React from "react";

function TitleAbout({ title }: { title: string }) {
  return (
    <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
      {title}
    </h1>
  );
}

export default TitleAbout;
