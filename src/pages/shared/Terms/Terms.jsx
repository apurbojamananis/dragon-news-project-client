import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div>
      <h2>Our Terms and conditions</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et perferendis,
        amet enim nisi consectetur commodi repellendus, atque earum optio quis
        iste ab aspernatur adipisci. Ex atque quasi a in nesciunt corporis
        sapiente saepe totam tempora nam, neque vero modi reiciendis eveniet
        facilis eos ratione rerum, praesentium exercitationem repudiandae cumque
        quia.
      </p>
      <p>
        go back to <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default Terms;
