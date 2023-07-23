"use client";

import { useState } from "react";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  return (
    <form className="bg-white my-8 p-5 rounded-md">
      <div className="flex flex-col my-4">
        <textarea
          onChange={(e) => setTitle(e.target.value)}
          name="title"
          value={title}
          placeholder="What's on your mind?"
          className="p-4 text-lg rounded-md my-2 bg-gray-200"
        ></textarea>
      </div>
      <div className="flex items-center justify-between gap-2">
        <p
          className={`font-bold text-sm ${
            title.length > 300 ? "text-red-700" : "text-gray-700"
          }`}
        >{`${title.length}/300`}</p>
        <button
          disabled={isDisabled}
          className="text-sm p-4 rounded-xl disabled:opacity-25 bg-teal-600 text-white py-2"
          type="submit"
        >
          Create a post{" "}
        </button>
      </div>
    </form>
  );
};

export default CreatePost;
