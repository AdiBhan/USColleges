import "../../styles/DataStyle.scss";
import Alert from "../Header/Alert";
import LoadingData from "../LoadingData/LoadingData";
import Tables from "./Tables";
const TableLayout = (props) => {
  return (
    <div className={specialBackground}>
      <Alert />
      <div class={gridStyle}>
        {props.isPending ? (
          <Tables
            className="tabsize"
            Colleges={props.Colleges}
            data={props.forbesData}
            color="red"
            table_name="Forbes College Rankings"
            link="https://www.forbes.com/top-colleges/"
          />
        ) : (
          <LoadingData />
        )}
        {props.isPending ? (
          <Tables
            className="tabsize"
            Colleges={props.Colleges}
            data={props.crData}
            color="blue"
            table_name="College Raptor Rankings"
            link="https://www.collegeraptor.com/college-rankings/"
          />
        ) : (
          <LoadingData />
        )}
        {props.isPending ? (
          <Tables
            className="tabsize"
            Colleges={props.Colleges}
            data={props.moneyData}
            color="green"
            table_name="Money College Rankings"
            link="https://www.money.com/money/best-colleges"
          />
        ) : (
          <LoadingData />
        )}{" "}
        {props.isPending ? (
          <Tables
            className="tabsize"
            Colleges={props.Colleges}
            data={props.moneyData}
            color="purple"
            table_name="Dummy Data "
            link="https://www.money.com/money/best-colleges"
          />
        ) : (
          <LoadingData />
        )}{" "}
        {props.isPending ? (
          <Tables
            className="tabsize"
            Colleges={props.Colleges}
            data={props.moneyData}
            color="purple"
            table_name="Dummy Data "
            link="https://www.money.com/money/best-colleges"
          />
        ) : (
          <LoadingData />
        )}{" "}
        {props.isPending ? (
          <Tables
            className="tabsize"
            Colleges={props.Colleges}
            data={props.moneyData}
            color="purple"
            table_name="Dummy Data "
            link="https://www.money.com/money/best-colleges"
          />
        ) : (
          <LoadingData />
        )}
      </div>
    </div>
  );
};

export default TableLayout;
const specialBackground =
  "relative z-0 bg-cover background_sty  bg-gradient-to-br from-gray-700 via-gray-900 to-black";

const gridStyle =
  " grid grid-cols-3 m-10 grid-center-col grid-center-row absolute top-0 left-0 right-0 bottom-0 flex ";
