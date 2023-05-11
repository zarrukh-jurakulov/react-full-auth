import { RotatingLines } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="container-fluid min-vh-100 bg-dark text-white p-3 d-flex align-items-center justify-content-center">
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </div>
  );
};

export default Loading;
