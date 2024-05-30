import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="container mx-auto flex justify-between items-center p-6">
            <Link to={'/'}><h1 className="text-2xl font-bold">BookedPlus</h1></Link>
        </div>
    );
};

export default Navbar;