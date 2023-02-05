const LoadingData = (props) => {
  return (
    <div className="m-4 d-flex align-items-center justify-content-center h-100">
      <div className=" ui active loader"></div>{" "}
      <p className=" ui header small">Loading Data...</p>
    </div>
  );
};
export default LoadingData;
