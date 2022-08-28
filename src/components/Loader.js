import React from "react";

function Loader(props) {
  return (
    <div className="container flex justify-center align-center pt-10">
      <progress className="progress w-56"></progress>
    </div>
  );
}

export default Loader;
