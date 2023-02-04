import Tables from "../Tables/Tables";
const CollegeRankings = (props) => {
  return (
    <div className={specialBackground}>
      <div class={gridStyle}>
        <div className={outlineStyle}>
          <Tables
            Colleges={props.Colleges}
            data={props.forbesData}
            color="red"
            table_name="Forbes College Rankings"
          />
        </div>
        <div className={outlineStyle}>
          <Tables
            Colleges={props.Colleges}
            data={props.crData}
            color="blue"
            table_name="College Raptor Rankings"
          />
        </div>
        <div className={outlineStyle}>
          <Tables
            Colleges={props.Colleges}
            data={props.moneyData}
            color="green"
            table_name="Money College Rankings"
          />
        </div>
      </div>
    </div>
  );
};

export default CollegeRankings;

const outlineStyle =
  "scale-95 hover:scale-100 bg-white m-3 rounded-lg shadow-lg";
const specialBackground =
  "relative z-0 bg-cover h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black";
const gridStyle =
  " grid grid-cols-3 m-20 grid-center-col grid-center-row absolute top-0 left-0 right-0 bottom-0 flex ";
