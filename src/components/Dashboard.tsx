import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import Button from "../common/Button";
import { fetchData } from "../services/api";


const storedUser = JSON.parse(localStorage.getItem("user")!) || null;

const Dashboard: React.FC = () => {
  const isAuthenticated = useSelector(
    (state: any) => state.auth.isAuthenticated
  );
  const user = useSelector((state: any) => state.auth.user) || storedUser;
  const dispatch = useDispatch();
  const [fetchedData, setFetchedData] = useState<any[]>([]);

  console.log("Is Authenticated:", isAuthenticated);
  console.log("User:", user);

  useEffect(() => {
    console.log("Is Authenticated:", isAuthenticated);
  }, [isAuthenticated]);

  const handleFetchData = async () => {
    try {
      const response = await fetchData();
      const data = response.data;
      setFetchedData(data); // Update the state with fetched data
      console.log("Fetched Data:", data);
    } catch (error) {
      console.error("Fetch Data Error:", error);
    }
  };

  const handleSignOut = () => {
    dispatch({ type: "SIGN_OUT" });
  };

  // Route protection: Redirect to the sign-in page if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <div className="p-4 bg-gray-200 text-center">
      <h2 className="text-2xl font-bold mb-4">Welcome, User!</h2>
      <Button
        onClick={handleFetchData}
        className="bg-blue-500 text-white hover:bg-blue-700 p-2"
      >
        Fetch Data
      </Button>
      <Button
        onClick={handleSignOut}
        className="bg-amber-800 text-white hover:bg-red-700 ml-2 p-2"
      >
        Sign Out
      </Button>

      {fetchedData.length > 0 && (
        <div className="mt-4 p-4 bg-white">
          <h3 className="text-lg font-bold mb-5 text-center">Fetched Data</h3>
          <div className="grid grid-cols-3 gap-4">
            {fetchedData.map((userData) => (
              <div
                key={userData.id}
                className="flex flex-col items-center text-center py-10 border-2 bg-slate-200"
              >
                <div className="mb-5">
                  <p className="text-gray-800 text-lg font-bold">
                    {userData.first_name}
                  </p>
                  <p className="text-gray-800">{userData.email}</p>
                </div>

                <img
                  src={userData.avatar || "default-avatar-url"} // Replace 'default-avatar-url' with a default image URL
                  alt={`Avatar of ${userData.email}`}
                  className="w-30 h-30"
                />
              </div>
            ))}
          </div>
        </div>
      )}



    </div>
  );
};

export default Dashboard;
