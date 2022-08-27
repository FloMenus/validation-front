import React from "react";

function CardsContainer({ children }) {
  return <div className="container lg (1024px) flex flex-wrap justify-center gap-8">{children}</div>;
}

export default CardsContainer;
