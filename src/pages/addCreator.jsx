/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { supabase } from "../client";

const AddCreator = () => {
  const [creator, setCreator] = useState({
    name: "",
    youtube: "",
    twitter: "",
    linkedin: "",
    description: "",
    imageURL: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCreator((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const randomId = Math.floor(Math.random() * 1000);
  const addCreator = async (e) => {
    e.preventDefault();

    const { error } = await supabase
      .from("creator")
      .insert({
        name: creator.name,
        youtube: creator.youtube,
        twitter: creator.twitter,
        linkedin: creator.linkedin,
        description: creator.description,
        imageURL: creator.imageURL,
        id: randomId.toString(),
      })
      .select();

    if (error) {
      console.log(error);
    }

    window.location = "/";
  };

  return (
    <div className="AddEditCreator">
      <form id="addCreatorForm">
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
          <p>Provide a link to an image of your creator.</p>
        </label>
        <input
          type="text"
          id="imageURL"
          name="imageURL"
          value={creator.imageURL}
          onChange={handleChange}
          required
        />

        <label>
          Description
          <p>Provide a description of the creator.</p>
        </label>
        <textarea
          name="description"
          rows="2"
          cols="50"
          id="description"
          value={creator.description}
          onChange={handleChange}
          required
        ></textarea>

        <h3>Social Media Links</h3>
        <p>Provide at least one of the creator's social media links.</p>

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

        <button type="submit" onClick={addCreator} className="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddCreator;
