import { Link } from 'react-router-dom';

function Header(){
    return(
    <div className="h-20 bg-[#dbc5f2] w-screen relative flex justify-evenly items-center text-white text-2xl">
        <Link to="/home">
            <button className='text-black text-6xl  mr-80'>GoodDeeds</button>
        </Link>
        <Link to="/streak">
        <button className='bg-[#740aac] rounded-xl w-48 p-2'>streak</button>
        </Link>
        <Link to="/events">
        <button className='bg-[#740aac] rounded-xl w-48 p-2'>events</button>
        </Link>
        <Link to="/events">
        <button className='bg-[#740aac] rounded-xl w-48 p-2'>Log Out</button>
        </Link>
    </div>
    )
}
export default Header;