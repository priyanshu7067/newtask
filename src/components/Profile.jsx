import { useState } from "react";
import {
  User,
  Edit2,
  Users,
  Share2,
  IdCard,
  Home,
  LayoutDashboard,
  ChevronRight,
  Plus,
} from "lucide-react";
import img from "../assets/img.jpeg";

const options = [
  { icon: <Edit2 />, label: "Edit Profile" },
  { icon: <User />, label: "My Profile" },
  { icon: <Users />, label: "Connections" },
  { icon: <Share2 />, label: "Share Profile" },
  { icon: <IdCard />, label: "KYC", badge: "Pending" },
  { icon: <Users />, label: "Invite Agent/Owner" },
];

export default function ProfilePage() {
  const [showModal, setShowModal] = useState(false);

  const handleOptionClick = (label) => {
    if (label === "Edit Profile") {
      setShowModal(true);
    }
  };

  return (
    <div className=" flex flex-col justify-between md:px-10 lg:px-20 ">

      {/* Profile Card */}
      <div className="p-4 text-center bg-gray-100">
        <img
          src={img}
          alt="Avatar"
          className="w-24 h-24 mx-auto rounded-full object-cover"
        />
        <h2 className="text-xl font-semibold mt-2">
          Guest User <span className="text-sm text-gray-500">Guest</span>
        </h2>
        <p className="text-gray-600">guest@example.com</p>
        <p className="text-gray-600">+91 XXXXXXXXXX</p>
      </div>
  
      <div className="bg-white  border border-gray-300  mb-10 mt-5 ">
        {options.map((item, index) => (
          <div
            key={index}
            onClick={() => handleOptionClick(item.label)}
            className="flex justify-between items-center p-4 border-1 border-gray-300 hover:bg-gray-50 cursor-pointer"
          >
            <div className="flex items-center space-x-3 ">
              <span className="text-gray-900 px-1 py-1.5 bg-gray-200">{item.icon}</span>
              <span className="text-gray-800 font-medium items-end">{item.label}</span>
              {item.badge && (
                <span className="ml-30 text-sm text-yellow-600">
                  {item.badge}
                </span>
              )}
            </div>
             <ChevronRight className="w-6 h-6 text-gray-600" />
          </div>
        ))}
      </div>

      {/* Modal  */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl w-11/12 max-w-sm">
            <h2 className="text-lg font-semibold mb-4">Edit Profile</h2>
            <div className="space-y-3">
              <input
                type="text"
                defaultValue="Guest User"
                className="w-full border p-2 rounded"
              />
              <input
                type="email"
                defaultValue="guest@example.com"
                className="w-full border p-2 rounded"
              />
            </div>
            <div className="mt-4 text-right">
              <button
                onClick={() => setShowModal(false)}
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}

      
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-md flex justify-around items-center h-16 ">
        <div className="flex flex-col items-center text-xs text-gray-600">
          <Home className="w-6 h-6" />
          <span>Home</span>
        </div>

        <div className="flex flex-col items-center text-xs text-gray-600">
          <IdCard className="w-6 h-6" />
          <span>Requirement</span>
        </div>

        <button className="bg-blue-600 text-white p-4 rounded-2xl -mt-2 shadow-lg text-xl">
        <Plus />
        </button>

        <div className="flex flex-col items-center text-xs text-gray-600">
          <LayoutDashboard className="w-6 h-6" />
          <span>Dashboard</span>
        </div>

        <div className="flex flex-col items-center text-xs text-gray-600">
          <User className="w-6 h-6" />
          <span>Profile</span>
        </div>
      </div>
    </div>
  );
}
