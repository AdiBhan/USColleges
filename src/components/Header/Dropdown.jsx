const Dropdown = (props) => {
  return (
    <div className="relative ">
      <select
        onChange={(e) => {
          props.placeholder(e.target.value);
        }}
        className="scale-90 ui secondary button dropdown "
      >
        <option id="College" value="College">
          Search by College
        </option>
        <option id="Location" value="Location">
          Search by Location
        </option>
      </select>
    </div>
  );
};
export default Dropdown;
