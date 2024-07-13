/* src/components/VolunteerBtn.jsx */
import { FiArrowUpRight } from 'react-icons/fi';
import { Link } from 'react-scroll';

const VolunteerBtn = () => {
  return (
    <Link
      to="about-us"
      smooth={true}
      duration={800}
      className="cursor-pointer min-w-[25%] rounded-full px-4 py-2 flex items-center justify-center space-x-2 bg-palette-major text-dark font-semibold hover:outline hover:bg-opacity-10 hover:text-palette-dark dark:hover:text-palette-dark transition duration-300 ease-in-out"
    >
      <span>Volunteer</span>
      <FiArrowUpRight />
    </Link>
  );
};

export default VolunteerBtn;

