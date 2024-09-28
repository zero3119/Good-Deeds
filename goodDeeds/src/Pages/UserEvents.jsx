import React, { useState } from "react";
import Header from "../header/Header";

function UserEvents() {
  const [eventData, setEventData] = useState({
    title: "",
    description: "",
    image: null,
    imagePreview: null,
    startTime: "",
    endTime: "",
    location: "El Paso",
    address: "",
    userLimit: "",
  });

  const [events, setEvents] = useState([]);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData({ ...eventData, [name]: value });
  };

  // Handle file input change for the event image
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setEventData({
        ...eventData,
        image: file,
        imagePreview: URL.createObjectURL(file),
      });
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setEvents([...events, eventData]);

    // Clear the form after submission
    setEventData({
      title: "",
      description: "",
      image: null,
      imagePreview: null,
      startTime: "",
      endTime: "",
      location: "El Paso",
      address: "",
      userLimit: "",
    });
  };

  // Generate Google Maps link from address
  const generateGoogleMapsLink = (location, address) => {
    const query = `${location}, ${address}`.replace(/\s/g, "+");
    return `https://www.google.com/maps/search/?api=1&query=${query}`;
  };

  return (
    <>
      {/* Header component */}
      <Header />

      {/* Page content */}
      <div className="bg-[#93c5fd] w-screen h-screen flex justify-center items-center">
        <div className="container max-w-2xl bg-white shadow-md rounded-lg p-6 h-4/5 overflow-y-auto">
          <h1 className="text-3xl font-bold text-center mb-6">Create Event</h1>

          {/* Form for Creating Event */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Event Title:
              </label>
              <input
                type="text"
                name="title"
                value={eventData.title}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Event Description:
              </label>
              <textarea
                name="description"
                value={eventData.description}
                onChange={handleChange}
                rows="4"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Event Picture:
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
              {/* Preview of the selected image */}
              {eventData.imagePreview && (
                <img
                  src={eventData.imagePreview}
                  alt="Event Preview"
                  className="w-full h-48 object-cover rounded-md mt-4"
                />
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Start Time:
              </label>
              <input
                type="datetime-local"
                name="startTime"
                value={eventData.startTime}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                End Time:
              </label>
              <input
                type="datetime-local"
                name="endTime"
                value={eventData.endTime}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>

            {/* Location Dropdown */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Location:
              </label>
              <select
                name="location"
                value={eventData.location}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              >
                <option value="El Paso">El Paso</option>
                <option value="Juarez">Juarez</option>
              </select>
            </div>

            {/* Address Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Address:
              </label>
              <input
                type="text"
                name="address"
                value={eventData.address}
                onChange={handleChange}
                placeholder="Enter the event address"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>

            {/* User Limit */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                User Limit:
              </label>
              <input
                type="number"
                name="userLimit"
                value={eventData.userLimit}
                onChange={handleChange}
                placeholder="Enter max number of participants"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300"
            >
              Create Event
            </button>
          </form>

          {/* Event List */}
          <h2 className="text-2xl font-bold mt-8 mb-4">Events You Created:</h2>
          <ul className="space-y-4">
            {events.map((event, index) => (
              <li key={index} className="bg-gray-50 p-4 rounded-md shadow-sm">
                {/* Display uploaded image or default */}
                {event.imagePreview && (
                  <img
                    src={event.imagePreview}
                    alt="Event"
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                )}
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-gray-600">
                  <strong>Description:</strong> {event.description}
                </p>
                <p className="text-gray-600">
                  <strong>Start Time:</strong>{" "}
                  {new Date(event.startTime).toLocaleString()}
                </p>
                <p className="text-gray-600">
                  <strong>End Time:</strong>{" "}
                  {new Date(event.endTime).toLocaleString()}
                </p>
                <p className="text-gray-600">
                  <strong>Location:</strong>{" "}
                  <a
                    href={generateGoogleMapsLink(event.location, event.address)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 underline"
                  >
                    {event.address} ({event.location})
                  </a>
                </p>
                <p className="text-gray-600">
                  <strong>User Limit:</strong> {event.userLimit} participants
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default UserEvents;
