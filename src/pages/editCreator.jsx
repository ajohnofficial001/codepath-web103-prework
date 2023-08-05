/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../client";

const EditCreator = ({ data }) => {
  const { id } = useParams();
  const [creator, setCreator] = useState({
    id: "",
    name: "",
    youtube: "",
    twitter: "",
    linkedin: "",
    description: "",
    imageURL: "",
  });

  useEffect(() => {
    const result = data.filter((item) => String(item.id) === id)[0];
    setCreator({
      name: result.name,
      youtube: result.youtube,
      twitter: result.twitter,
      linkedin: result.linkedin,
      description: result.description,
      imageURL: result.imageURL,
      id: result.id,
    });
  }, [data, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCreator((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const updateCreator = async (e) => {
    e.preventDefault();
    const { error } = await supabase
      .from("creator")
      .update({
        name: creator.name,
        youtube: creator.youtube,
        linkedin: creator.linkedin,
        twitter: creator.twitter,
        description: creator.description,
        imageURL: creator.imageURL,
      })
      .eq("id", id);

    if (error) {
      console.log(error);
    }

    window.location = "/";
  };

  const deleteCreator = async (e, id) => {
    e.preventDefault();
    const { error } = await supabase.from("creator").delete().eq("id", id);

    if (error) {
      console.error("Error deleting creator:", error);
    } else {
      console.log("Creator deleted successfully!");
      window.location = "/";
    }
  };

  return (
    <div className="AddEditCreator">
      <form>
        <label>Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={creator.name}
          onChange={handleChange}
          required
        />

        <label>
          Image
          <p>
            Provide a link to an image of your creator. Be sure to include the
            http://
          </p>
        </label>
        <input
          type="text"
          id="image"
          name="image"
          value={creator.imageURL}
          onChange={handleChange}
          required
        />

        <label>
          Description
          <p>
            Provide a description of the creator. Who are they? What makes them
            interesting?
          </p>
        </label>
        <textarea
          name="description"
          rows="3"
          cols="50"
          id="description"
          value={creator.description}
          onChange={handleChange}
          required
        ></textarea>

        <h3>Social Media Links</h3>

        <label>
          <span className="fa-brands fa-youtube"></span> YouTube
          <p>The creator's YouTube handle (without the @)</p>
        </label>
        <input
          type="text"
          id="youtube"
          name="youtube"
          value={creator.youtube}
          onChange={handleChange}
        />

        <label>
          <span className="fa-brands fa-twitter"></span> Twitter
        </label>
        <input
          type="text"
          id="twitter"
          name="twitter"
          value={creator.twitter}
          onChange={handleChange}
        />

        <label>
          <span className="fa-brands fa-linkedin"></span> Linkedin
        </label>
        <input
          type="text"
          id="linkedin"
          name="linkedin"
          value={creator.linkedin}
          onChange={handleChange}
        />

        <div className="submit-box">
          <button
            className="submit-update"
            type="submit"
            onClick={updateCreator}
          >
            Submit
          </button>
          <button className="delete-button" onClick={deleteCreator}>
            Delete
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditCreator;
