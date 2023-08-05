import { Link } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { GoInfo } from "react-icons/go";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const creatorCard = (creator) => {
  const ToYouTube = () => {
    window.open("https://www.youtube.com/@" + creator.youtube, "_blank");
  };

  const Tolinkedin = () => {
    window.open("https://www.linkedin.com/in/" + creator.linkedin, "_blank");
  };
  const ToTwitter = () => {
    window.open("https://www.twitter.com/" + creator.twitter, "_blank");
  };

  return (
    <div
      className="Card"
      style={{ backgroundImage: `url(${creator.imageURL})`, color: "#fafafa" }}
    >
      <article>
        <div className="card-header">
          <h2 className="name">{creator.name}</h2>

          {creator.youtube !== null && creator.youtube !== "" ? (
            <FaYoutube onClick={ToYouTube} />
          ) : (
            ""
          )}

          {creator.twitter !== null && creator.twitter !== "" ? (
            <FaTwitter onClick={ToTwitter} />
          ) : (
            ""
          )}

          {creator.linkedin !== null && creator.linkedin !== "" ? (
            <FaLinkedin onClick={Tolinkedin} />
          ) : (
            ""
          )}
        </div>

        <div className="card-header-edit">
          <Link
            to={"/" + creator.id}
            onClick={() => window.scrollTo({ top: 600, behavior: "smooth" })}
          >
            <GoInfo />
          </Link>
          <Link
            to={"/edit/" + creator.id}
            onClick={() => window.scrollTo({ top: 600, behavior: "smooth" })}
          >
            <FiEdit />
          </Link>
        </div>

        <div className="card-description">
          <p>{creator.description}</p>
        </div>
      </article>
    </div>
  );
};

export default creatorCard;
