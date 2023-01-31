export const FilterButtons = ({ text, idx, name, setStatus, setGender }) => {
  return (
    <>
      <input
        className="btn-check"
        type="radio"
        id={`btn-check-outlined-${text}${idx}`}
        autoComplete="off"
        name={name}
        onChange={() => {
          if (name === "status") setStatus(text);
          if (name === "gender") setGender(text);
        }}
      />
      <label
        className={`${
          text === "Alive"
            ? "btn-outline-success"
            : text === "Dead"
            ? "btn-outline-danger"
            : text === "Unknown"
            ? "btn-outline-secondary"
            : text === "Male"
            ? "btn-outline-primary"
            : text === "Female"
            ? "btn-outline-danger"
            : text === "Genderless"
            ? "btn-outline-warning"
            : ""
        } btn ms-3 my-1`}
        htmlFor={`btn-check-outlined-${text}${idx}`}
      >
        {text}
      </label>
    </>
  );
};
