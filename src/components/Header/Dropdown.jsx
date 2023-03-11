import "../../styles/Header.scss";
const Dropdown = (props) => {
  return (
    <div className="relative ">
      <select
        className=" selection_box"
        onChange={(e) => {
          props.placeholder(e.target.value);
        }}
      >
        <option id="College" value="College">
          Search by College
        </option>
        <option id="Location" value="Location">
          Search by Location
        </option>
        <option id="Favorites" value="Favorites" disabled>
          View Favorites
        </option>
      </select>
    </div>
  );
};
export default Dropdown;
