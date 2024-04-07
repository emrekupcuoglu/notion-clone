import { BiLoader } from "react-icons/bi";

function Spinner({ className = "" }: { className?: string }) {
  return (
    <BiLoader
      className={`animate-spin place-self-center self-center text-2xl text-gray-500 ${className}`}
    />
  );
}

export default Spinner;
