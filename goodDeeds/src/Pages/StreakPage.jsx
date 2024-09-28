import React, { useEffect, useState } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Header from "../header/Header"; // Assuming you have this component

const StreakPage = () => {
  const [totalHours, setTotalHours] = useState(0); // To store total hours
  const [maxHours, setMaxHours] = useState(100); // Set the threshold for streak
  const [userId, setUserId] = useState(null); // Track the user ID
  const [isButtonDisabled, setIsButtonDisabled] = useState(true); // For disabling the button

  const firestore = getFirestore();
  const auth = getAuth();

  // Fetch user data from Firebase
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const userRef = doc(firestore, "users", user.uid); // Assuming user data is in the "users" collection
        setUserId(user.uid);

        // Get the user's data (total hours)
        getDoc(userRef).then((docSnap) => {
          if (docSnap.exists()) {
            const data = docSnap.data();
            setTotalHours(data.totalHours || 0); // Assuming 'totalHours' is a field in the document
          }
        });
      }
    });
  }, [auth, firestore]);

  // Calculate the percentage of hours completed
  //const progressPercentage = (totalHours / maxHours) * 100;
  const progressPercentage = 100;
 

  // Update button state based on progress
  useEffect(() => {
    if (progressPercentage >= 100) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [progressPercentage]);

  // Determine progress bar color
  const getProgressBarColor = () => {
    if (progressPercentage >= 100) return "bg-green-500"; // Full
    if (progressPercentage >= 75) return "bg-yellow-500"; // Mostly full
    if (progressPercentage >= 50) return "bg-orange-500"; // Halfway
    return "bg-red-500"; // Less than half
  };

  const handlePrintCert = () => {
    if (progressPercentage >= 100) {
      window.print(); // Trigger the print dialog
    }
  };

  return (
    <>
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="bg-[#8bcefb] w-screen h-screen flex justify-center items-center p-6">
        <div className="bg-white shadow-lg rounded-lg w-full max-w-screen-lg p-6 space-y-6">
          {/* Streak Section */}
          <div className="w-full bg-gray-100 shadow-md rounded-md p-6 relative">
            <h2 className="text-2xl font-bold mb-4">Streak</h2>

            {/* Progress Bar */}
            <div className="w-full bg-gray-300 rounded-full h-4 mb-4">
              <div
                className={`${getProgressBarColor()} h-4 rounded-full`}
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>

            {/* Total Hours Display */}
            <div className="absolute right-4 top-4">
              <span className="text-black-500 text-lg font-bold">
                TOTAL HOURS: {totalHours}
              </span>
            </div>
          </div>

          {/* Community Service Completed Section */}
          <div className="w-full bg-gray-100 shadow-md rounded-md p-6">
            <h2 className="text-2xl font-bold mb-4">Community Service Completed</h2>
            <div className="grid grid-cols-2 gap-4">
              {/* Sample services for display */}
              <div className="bg-gray-200 p-4 rounded-md text-center shadow-sm">Service Done</div>
              <div className="bg-gray-200 p-4 rounded-md text-center shadow-sm">Service Done</div>
              <div className="bg-gray-200 p-4 rounded-md text-center shadow-sm">Service Done</div>
              <div className="bg-gray-200 p-4 rounded-md text-center shadow-sm">Service Done</div>
            </div>
          </div>

          {/* Print Cert Button */}
          <div className="w-full flex justify-center">
            <button
              onClick={handlePrintCert}
              disabled={isButtonDisabled}
              className={`${
                isButtonDisabled ? "bg-gray-500" : "bg-blue-600 hover:bg-blue-700"
              } text-white font-bold px-6 py-2 rounded-md shadow-md transition`}
            >
              Print Certification
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default StreakPage;
