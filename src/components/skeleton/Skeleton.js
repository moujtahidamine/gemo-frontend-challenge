import React from "react";

const Skeleton = () => {
  return (
    <div className="container sk-box my-5">
      <div className="sk-repo">
        <div className="avatar"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      <div className="sk-repo">
        <div className="avatar"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      <div className="sk-repo">
        <div className="avatar"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      <div className="sk-repo">
        <div className="avatar"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </div>
  );
};

export default Skeleton;
