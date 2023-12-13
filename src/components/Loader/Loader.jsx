import { Oval } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Oval
      height="20"
      width="20"
      radius={1}
      color="cyan"
      ariaLabel="puff-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
};
