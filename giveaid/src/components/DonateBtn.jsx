import { FiArrowDown } from 'react-icons/fi';
import { Link } from 'react-scroll';

const DonateBtn = () => {
  return (
    <Link
      to="donate"
      smooth={true}
      duration={500}
      className="cursor-pointer min-w-[15%] rounded-full px-4 py-2 flex items-center justify-center space-x-2 bg-palette-major text-dark font-bold hover:outline hover:bg-opacity-10 hover:text-palette-text transition duration-300 ease-in-out"
    >
      <span>Donate Now</span>
      <FiArrowDown />
    </Link>
  );
};

export default DonateBtn;

