import React from "react";
import Avatar from "./Avatar";
import { Link } from "react-router-dom";

const Appbar = () => {
  return (
    <div className="border-b border-slate-200 flex justify-between px-10 py-4">
      <Link
        to={"/blogs"}
        className="flex flex-col justify-center cursor-pointer"
      >
        Medium
      </Link>
      <div>
        <Link to={`/publish`}>
          <button
            type="button"
            className="mr-8 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 "
          >
            Create Blog
          </button>
        </Link>

        <Avatar size={"big"} name="Surya" />
      </div>
    </div>
  );
};

export default Appbar;
