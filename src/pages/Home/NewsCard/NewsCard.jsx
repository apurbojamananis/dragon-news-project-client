/* eslint-disable react/prop-types */
import moment from "moment/moment";
import { Image } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { FaRegBookmark, FaShareAlt, FaEye } from "react-icons/fa";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

// eslint-disable-next-line react/prop-types
const NewsCard = ({ news }) => {
  // eslint-disable-next-line react/prop-types
  const { _id, title, details, image_url, author, total_view, rating } = news;

  return (
    <div>
      <Card className="mb-4">
        <Card.Header className="d-flex align-items-center">
          <Image src={author?.img} roundedCircle style={{ height: "40px" }} />
          <div className="ps-3 flex-grow-1 ">
            <p className="mb-0">{author?.name}</p>
            <p>
              <small>
                {moment(author?.published_date).format("YYYY-MM-D")}
              </small>
            </p>
          </div>
          <div>
            <FaRegBookmark></FaRegBookmark>
            <FaShareAlt></FaShareAlt>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={image_url} />
          <Card.Text>
            {details.length < 250 ? (
              <>{details}</>
            ) : (
              <>
                {details.slice(0, 250)}...{" "}
                <Link to={`/news/${_id}`}>Read More</Link>
              </>
            )}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted d-flex align-items-center">
          <div className="d-flex flex-grow-1">
            <Rating style={{ maxWidth: 100 }} value={rating.number} readOnly />
            <span className="ms-2">{rating.number}</span>
          </div>
          <div>
            <FaEye></FaEye> {total_view}
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default NewsCard;
