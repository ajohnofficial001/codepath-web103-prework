import React, { useState, useEffect } from "react";
import Card from "../components/creatorCard";

const ShowCreators = (creator) => {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    setCreators(creator.data);
  }, [creator]);

  return (
    <section className="showCreators">
      {creators && creators.length > 0 ? (
        creators.map((newCreator, i) => (
          <Card
            key={newCreator.id}
            id={newCreator.id}
            name={newCreator.name}
            youtube={newCreator.youtube}
            twitter={newCreator.twitter}
            linkedin={newCreator.linkedin}
            description={newCreator.description}
            imageURL={newCreator.imageURL}
          />
        ))
      ) : (
        <h3>{"No Creators Yet!!"}</h3>
      )}
    </section>
  );
};

export default ShowCreators;
