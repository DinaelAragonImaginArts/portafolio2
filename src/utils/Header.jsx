import '../index.css'
import { Link } from 'react-router-dom';
const Header = () => {
    
    return (
        <div className="flex justify-between items-center  px-10 py-5">
            <div id="logo" className="text-4xl font-extrabold">Dinael Aragon</div>
            <div className='flex gap-5 font-semibold'>
                <Link to={"/about"} className="hover:text-violet-600">About us</Link>
                <Link to={"/about"} className="hover:text-violet-600">About us</Link>
                <Link to={"/about"} className="hover:text-violet-600">About us</Link>
            </div>
        </div>
    )
}

export default Header;