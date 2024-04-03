import Image from "next/image";
import React from "react";
import parallax from "../../public/parallax.jpg";

function Parallax() {
  return (
    <div className="flex items-center justify-center h-96 bg-fixed bg-parallax bg-cover py-10">
      <h1 className="text-4xl font-bold text-slate-300 uppercase">Check our courses</h1>
    </div>
  );
}

export default Parallax;
