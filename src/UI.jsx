import React from "react";

export default function UI() {
  const sumbitHanlder = (e) => {
    e.preventDefault();
    console.log("click");
  };
  return (
    <div>
      <form action="" onSubmit={sumbitHanlder}>
        <div>
          <input type="text" placeholder="name" />

          <input type="text" placeholder="password" />
          <button type="submit">Button</button>
        </div>
      </form>
    </div>
  );
}
