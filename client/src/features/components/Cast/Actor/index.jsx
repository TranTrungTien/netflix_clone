import React from "react";
import PropTypes from "prop-types";

const Actor = ({ imageUrl, actorName }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-2">
      <div className="w-36 h-52 rounded">
        <img
          src={imageUrl && imageUrl}
          alt="Actor"
          className="w-full h-full object-cover object-center rounded"
        />
      </div>
      <div>
        <span className="text-sm text-white font-semibold cursor-pointer">
          {actorName && actorName}
        </span>
      </div>
    </div>
  );
};

Actor.propsTypes = {
  imageUrl: PropTypes.string,
  actorName: PropTypes.string,
};
Actor.defaultProps = {
  imageUrl: "",
  actorName: "",
};
export default Actor;
