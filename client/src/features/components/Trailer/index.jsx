import React, { forwardRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import axiosConfig from "../../../axiosConfig";

const Trailer = forwardRef(({ id, lastCategory }, ref) => {
  const [trailer, setTrailer] = useState("");

  useEffect(() => {
    const fetchTrailer = async () => {
      try {
        const res = await axiosConfig.get("movies/api/trailer", {
          params: {
            id: id,
          },
        });
        setTrailer(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTrailer();
  }, [id, setTrailer]);
  return (
    <iframe
      title={"movie"}
      ref={ref}
      src={trailer && trailer}
      style={{
        position: "absolute",
        top: `${lastCategory ? "-170%" : "0"}`,
        left: "50%",
        transform: "translateX(-50%)",
        width: "860px",
        height: "600px",
        zIndex: "99999",
      }}
    ></iframe>
  );
});

Trailer.propTypes = {
  id: PropTypes.string,
  lastCategory: PropTypes.bool,
};

export default Trailer;
