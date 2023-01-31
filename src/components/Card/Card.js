import { Link } from "react-router-dom";

export const Card = ({ obj }) => {
  return (
    <li className="card col-12 p-0" style={{ width: "18rem" }}>
      <img src={obj.image} className="card-img-top" alt={obj.name} />
      <div className="card-body">
        <h5 className="card-title">{obj.name}</h5>
        <p>
          <span
            className={
              obj.status === "Alive"
                ? "bg-success"
                : obj.status === "Dead"
                ? "bg-danger"
                : obj.status === "unknown"
                ? "bg-secondary"
                : ""
            }
            style={{
              display: "inline-block",
              width: "10px",
              height: "10px",
              borderRadius: "50%",
            }}
          ></span>{" "}
          {obj.status} - <span className="card-text">{obj.species}</span>
          <span> - {obj.gender}</span>
        </p>
        <p className="card-text">Last known location: {obj.location?.name}</p>

        <Link className="btn btn-primary" to={obj.name}>
          See more
        </Link>
      </div>
    </li>
  );
};
