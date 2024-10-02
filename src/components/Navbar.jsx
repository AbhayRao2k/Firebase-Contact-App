import React from "react";

const Navbar = () => {
  return (
    <div className="m-4 flex h-[60px] bg-white rounded-lg items-center justify-center gap-2 text-xl font-medium">
      <img src="/logos_firebase.svg" alt="logo" />
      <h1>Firebase Contact App</h1>
    </div>
  );
};

export default Navbar;
