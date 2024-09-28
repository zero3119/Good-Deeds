import Login from "../Authentication/Login";
import { Link } from 'react-router-dom';
function LandingPage() {
    return (
        <div className="bg-[#dbc5f2] w-screen h-screen absolute flex">
            <div className="w-1/2 h-screen flex items-center justify-center"> {/* Centering the content */}
                <h2 className="text-8xl text-[#f5f5f5] pl-20 "> {/* No text-center here */}
                    <span className="text-[#5a0ea0]">GOOD DEEDS</span> MAKE YOUR <span className="text-[#5a0ea0]">COMMUNITY</span> BETTER
                </h2>
            </div>
            <div className="bg-neutral-50 w-1/2 h-screen flex items-center justify-center">
                <div className="flex flex-col justify-center items-center bg-gray-100 p-8 rounded-lg">
                    <div className="bg-white p-6 rounded shadow-md text-center flex flex-col items-center">
                        <Login />
                        <div className="h-[2px] w-full bg-gray-400 my-5"></div>
                        <Link to="/signup"><h2 className="text-2xl px-2 mb-4 border-4 rounded-xl text-center">Create account</h2></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;
