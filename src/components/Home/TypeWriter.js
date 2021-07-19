import React from "react";
import TypewriterComponent from "typewriter-effect";
export const TypeWriter = () => {
  return (
    <>
      <div
        className="container-fluid  p-5   display-3 font-weight-bold text-center"
        style={{ backgroundColor: "#ddd6d6", color: "red" }}
      >
        <TypewriterComponent
          options={{
            loop: true,
            autoStart: true,
            strings: ["Welcome to our shop"],
          }}
        />
      </div>
      <div
        className="container-fluid h2 mt-4 mb-4 p-4 font-weight-bold text-center"
        style={{ backgroundColor: "#ddd6d6" }}
      >
        New Arrival
      </div>
    </>
  );
};
