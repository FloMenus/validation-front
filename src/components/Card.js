import React from "react";

function Card(props) {
  return (
    <div className="block overflow-hidden rounded-2xl w-72">
      <img
        className="object-cover w-full h-56"
        src={props.image}
        alt={props.name}
      />
      <div className="p-4 bg-gray-900">
        <p className="text-xs text-gray-500">{props.email}</p>
        <h5 className="text-sm text-white">{props.name}</h5>
      </div>
    </div>
  );
}

export default Card;
