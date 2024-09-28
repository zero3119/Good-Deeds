import { Link } from 'react-router-dom';

function Header(){
    return(
    <div className="h-20 bg-[#7300ee] w-screen relative flex justify-evenly">
        <Link to="/home">
            <button >Good deeds</button>
        </Link>
        <Link to="/streak">
            <button >streak</button>
        </Link>
        <Link to="/events">
            <button >events</button>
        </Link>
    </div>
    )
}
export default Header;