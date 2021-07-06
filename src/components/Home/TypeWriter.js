import React from 'react'
import TypewriterComponent from "typewriter-effect";
export const TypeWriter = () => {
  return (
    <div
    className="container  p-4 mt-2  h1 font-weight-bold text-center"
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
  )
}
