import Loader from "react-loader-spinner";

export const Loading = () => {
  return (
    <>
      <Loader
        type="Bars"
        color="#00BFFF"
        secondaryColor="Grey"
        height={100}
        width={100}
        timeout={7000}
      />
    </>
  )
};
