import React from "react";

const Quote = () => {
  return (
    <div className="bg-slate-200 h-screen flex justify-center flex-col ">
      <div className="flex justify-center">
        <div className="max-w-lg">
          <div className=" text-3xl font-bold">
            "The Customer service I received was exceptional.The support team
            went above and beyond to address my concerns."
          </div>
          <br />
          <div className="max-w-md  text-xl font-semibold">
            Jules Winnfield
          </div>
          <div className="max-w-md text-gray-400 text-sm  font-medium">
            CEO, Acme Inc
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
