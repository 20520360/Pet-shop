import React from "react";
import Header from "../header";
import Cookies from "js-cookie";
function Profile() {
  const storedUser = Cookies.get("user");
  const user = storedUser ? JSON.parse(storedUser) : null;

  return (
    <div>
      <Header />
      <div className="w-full max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-3xl font-bold mb-4">Thông tin cá nhân</h2>
        <div className="mb-6">
          <div className="flex items-center mb-2">
            <label className="text-gray-600 font-semibold w-1/3">
              Username:
            </label>
            <p className="text-gray-900">{user.username}</p>
          </div>
          <div className="flex items-center mb-2">
            <label className="text-gray-600 font-semibold w-1/3">Email:</label>
            <p className="text-gray-900">{user.email}</p>
          </div>
          <div className="flex items-center mb-2">
            <label className="text-gray-600 font-semibold w-1/3">Phone:</label>
            <p className="text-gray-900">{user.phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
