import React, { useEffect, useState } from "react";
import Actor from "./Actor";
import axiosConfig from "../../../axiosConfig";
import PropTypes from "prop-types";

const Cast = ({ id }) => {
  const [cast, setCast] = useState([]);
  useEffect(() => {
    const fetchCast = async () => {
      try {
        const fullcast = await axiosConfig.get("movies/api/fullcast", {
          params: {
            id: id,
          },
        });
        console.log("cast : ", fullcast.data);
        setCast(fullcast.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCast();
  }, [id]);
  return (
    <section className="flex space-x-5">
      {cast &&
        cast.map((c) => {
          return <Actor key={c.id} imageUrl={c.image} actorName={c.name} />;
        })}
    </section>
  );
};
Cast.propTypes = {
  id: PropTypes.string,
};
export default Cast;
