import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axiosConfig from "../../../axiosConfig";

const Content = ({ id }) => {
  const [content, setContent] = useState("");
  useEffect(() => {
    const fetchContent = async () => {
      try {
        const cont = await axiosConfig.get("movies/api/wiki", {
          params: {
            id: id,
          },
        });
        setContent(cont.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchContent();
  }, [id]);
  return (
    <div>
      {content && <p className="text-left text-gray-300 text-sm">{content}</p>}
    </div>
  );
};

Content.propTypes = {
  id: PropTypes.string,
};

export default Content;
