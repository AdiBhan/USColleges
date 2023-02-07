const Dropdown = (props) => {
  return (
    <div className="relative ">
      <select
        onChange={(e) => {
          props.placeholder(e.target.value);
        }}
        className="scale-90 ui secondary button dropdown "
      >
        <option
          id="College"
          value="College"
          className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
        >
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
