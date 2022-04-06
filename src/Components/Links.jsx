import React from "react";

const Links = () => {
  return (
    <ul class="flex justify-between">
      <li class="mr-3">
        <a
          class="inline-block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white"
          href="#"
        >
          Active Pill
        </a>
      </li>
      <li class="mr-3">
        <a
          class="inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4"
          href="#"
        >
          Pill
        </a>
      </li>
      <li class="mr-3">
        <a
          class="inline-block py-2 px-4 text-gray-400 cursor-not-allowed"
          href="#"
        >
          Disabled Pill
        </a>
      </li>
    </ul>
  );
};

export default Links;
