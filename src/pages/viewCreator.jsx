/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { supabase } from "../client";
import { FaYoutube, FaTwitter, FaLinkedin } from "react-icons/fa";

const ViewCreator = ({ data }) => {
  const ToYouTube = () => {
    window.open("https://www.youtube.com/@" + creator.youtube, "_blank");
  };
  const Tolinkedin = () => {
    window.open("https://www.linkedin.com/" + creator.linkedin, "_blank");
  };
  const ToTwitter = () => {
    window.open("https://www.twitter.com/" + creator.twitter, "_blank");
  };

  const { id } = useParams();
  const [creator, setCreator] = useState({
    id: null,
    name: "",
    youtube: "",
    linkedin: "",
    twitter: "",
    description: "",
    imageURL: "",
  });

  useEffect(() => {
    const result = data.filter((item) => String(item.id) === id)[0];
    setCreator({
      id: result.id,
      name: result.name,
      youtube: result.youtube,
      twitter: result.twitter,
      linkedin: result.linkedin,
      description: result.description,
      imageURL: result.imageURL,
    });
  }, [data, id]);

  const deleteCreator = async (e, id) => {
    e.preventDefault();
    console.log("Delete button clicked for ID:", id);
    const { error } = await supabase.from("creator").delete().eq("id", id);

    if (error) {
      console.error("Error deleting creator:", error);
    } else {
      console.log("Creator deleted successfully!");
      window.location = "/";
    }
  };

  return (
    <div className="ViewCreator">
      <section className="creator-image-box">
        <img src={creator.imageURL} alt={creator.name} />
      </section>

      <section className="creator-info">
        <h2>{creator.name}</h2>
        <p>{creator.description}</p>

        {creator.youtube !== null && creator.youtube !== "" ? (
          <button className="social-button" onClick={ToYouTube}>
            <FaYoutube />@{creator.youtube}
          </button>
        ) : (
          ""
        )}

        {creator.twitter !== null && creator.twitter !== "" ? (
          <button className="social-button" onClick={ToTwitter}>
            <FaTwitter />@{creator.twitter}
          </button>
        ) : (
          ""
        )}

        {creator.linkedin !== null && creator.linkedin !== "" ? (
          <button className="social-button" onClick={Tolinkedin}>
            <FaLinkedin />@{creator.linkedin}
          </button>
        ) : (
          ""
        )}
      </section>
      <section className="modify-creator">
        <Link to={"/edit/" + creator.id}>
          <button
            onClick={() => window.scrollTo({ top: 800, behavior: "smooth" })}
          >
            Edit
          </button>
        </Link>
        <button
          onClick={(e) => deleteCreator(e, creator.id)}
          className="delete-button"
        >
          Delete
        </button>
      </section>
    </div>
  );
};

export default ViewCreator;
