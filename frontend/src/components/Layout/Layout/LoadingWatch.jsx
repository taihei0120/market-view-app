import Loader from "react-loader-spinner";

export const LoadingWatch = () => {
  return (
    <>
      <Loader
        type="Watch"
        color="#0099ff"
        secondaryColor="Grey"
        height={100}
        width={100}
        timeout={6000}
      />
    </>
  )
};
