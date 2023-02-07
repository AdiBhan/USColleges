import React from "react";

// Adding to this component soon...
const ComingSoon = (props) => {
  return (
    <div className={props.background}>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-white header huge ui"> Coming Soon! </h1>
        <a className="hover:text-blue-500" href="/">
          <h1 className="text-white header small ui ">Return to Homepage?</h1>
        </a>
      </div>
    </div>
  );
};

export default ComingSoon;
