import { FilterButtons } from "../FilterButtons";

const statusData = ["Alive", "Dead", "Unknown"];
const genderData = ["Male", "Female", "Genderless", "Unknown"];

export const Sidebar = ({ setStatus, clearAllFunc, setGender }) => {
  return (
    <div className="accordion col-12 col-lg-3" id="accordionExample">
      <h2 className="h2 text-center my-3">Filter</h2>
      <p
        className="text-primary text-decoration-underline text-center"
        style={{ cursor: "pointer" }}
        onClick={clearAllFunc}
      >
        Clear All
      </p>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Filter by name
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div className="p-3">
            {statusData.map((item, idx) => (
              <FilterButtons
                key={idx}
                text={item}
                idx={idx}
                name="status"
                setStatus={setStatus}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingTwo">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            Filter by gender
          </button>
        </h2>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample"
        >
          <div className="p-3">
            {genderData.map((item, idx) => (
              <FilterButtons
                key={idx}
                text={item}
                idx={idx}
                name="gender"
                setGender={setGender}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingThree">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            Filter by location
          </button>
        </h2>
        <div
          id="collapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="headingThree"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">li li</div>
        </div>
      </div>
    </div>
  );
};
