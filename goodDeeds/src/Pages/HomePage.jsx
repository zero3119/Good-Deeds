import Header from "../header/Header";
import { useState } from "react";

function HomePage() {
    const [events, setEvents] = useState([]);
    
    // Temporary function to simulate adding a new post with hours of operation
    const addTestEvent = () => {
        const newEvent = {
            id: events.length + 1,
            title: "Community Clean-Up",
            city: "El Paso",
            hours: "8:00 am - 7:00 pm", 
            availability: "Available",
            poster: "Jane Doe",
            description: "Join us for a community clean-up event. We will gather at the local park to pick up trash and beautify the area. Please bring gloves, water, and wear comfortable clothes.",
            logo: "https://via.placeholder.com/100" 
        };
        setEvents([...events, newEvent]);
    };

    return (
        <>
            <Header />
            <div className="flex w-screen h-screen bg-gray-50">
                {/* Filter Sidebar */}
                <div className="w-1/4 bg-white p-6 shadow-xl rounded-xl">
                    <h2 className="text-xl font-semibold text-gray-800 mb-6">Filters</h2>
                    <div className="mb-6">
                        <label className="block text-gray-700 font-medium mb-2">City</label>
                        <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300">
                            <option value="">All Cities</option>
                            <option value="El Paso">El Paso</option>
                            <option value="Juarez">Juarez</option>
                        </select>
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 font-medium mb-2">Hours</label>
                        <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300" placeholder="e.g., 8:00 am - 7:00 pm" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 font-medium mb-2">Availability</label>
                        <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300">
                            <option value="">All</option>
                            <option value="Available">Available</option>
                            <option value="Full">Full</option>
                        </select>
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 font-medium mb-2">Poster</label>
                        <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300" placeholder="Search by poster" />
                    </div>
                </div>

                {/* Event Display Section */}
                <div className="flex-grow bg-gray-100 p-8">
                    <h1 className="text-4xl font-bold text-gray-800 mb-8">Community Service Opportunities</h1>
                    
                    {/* Button to add a test event for testing */}
                    <button
                        onClick={addTestEvent}
                        className="mb-6 p-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow-md transition duration-300"
                    >
                        Add Test Event
                    </button>

                    {/* Display events if available */}
                    {events.length > 0 ? (
                        <div className="space-y-6">
                            {events.map(event => (
                                <div key={event.id} className="flex items-center bg-white border border-gray-200 rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
                                    {/* Logo Section */}
                                    <div className="w-1/6">
                                        <img src={event.logo} alt="Org Logo" className="w-full h-auto rounded-lg shadow-md" />
                                    </div>
                                    
                                    {/* Event Details Section */}
                                    <div className="w-3/5 px-8">
                                        <h2 className="text-2xl font-semibold text-purple-700">{event.title}</h2>
                                        <p className="text-gray-600 mt-1">{event.poster}</p>
                                        <p className="text-gray-500">Location: {event.city}</p>
                                        <p className="text-gray-500">Hours: {event.hours}</p> 
                                        <p className="text-gray-500">Available: {event.availability}</p>
                                        <p className="mt-4 text-gray-700 leading-relaxed">{event.description}</p>
                                    </div>

                                    {/* Register Button */}
                                    <div className="w-1/6 text-right">
                                        <button className="p-3 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-lg shadow-md transition duration-300">
                                            Register
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-gray-600 text-lg">No community service opportunities posted yet.</p>
                    )}
                </div>
            </div>
        </>
    );
}


export default HomePage;
