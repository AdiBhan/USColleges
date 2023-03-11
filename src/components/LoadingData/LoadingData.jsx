import "../../styles/DataStyle.scss";
const LoadingData = (props) => {
  return (
    <div className="m-4 data-container d-flex align-items-center justify-content-center h-100">
      <p className="text-black ui header small data_loader_sty">
        Fetching Data...
      </p>{" "}
      <div className="m-3 mt-8 ui active loader"></div>{" "}
    </div>
  );
};
export default LoadingData;
