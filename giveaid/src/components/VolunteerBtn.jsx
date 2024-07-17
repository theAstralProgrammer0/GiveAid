/* src/components/VolunteerBtn.jsx */
import { FiArrowUpRight } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const VolunteerBtn = () => {
  const navigate = useNavigate();
  const handleVolunteerClick = () => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/volunteer');
    } else {
      navigate('/login');
    }
  };

  return (
    <button
      onClick={handleVolunteerClick}
      className="cursor-pointer min-w-[25%] rounded-full px-4 py-2 flex items-center justify-center space-x-2 bg-palette-major text-dark font-semibold hover:outline hover:bg-opacity-10 hover:text-palette-dark dark:hover:text-palette-dark transition duration-300 ease-in-out"
    >
      <span>Volunteer</span>
      <FiArrowUpRight />
    </button>
  );
};

export default VolunteerBtn;

