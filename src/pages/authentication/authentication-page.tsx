"use client";
import React, { useState } from "react";
import Image from "next/image";

const backgroundImage = "/images/background.jpg";

const AuthenticationPage = () => {
  const [activeTab, setActiveTab] = useState("login");

  const toggleActiveTab = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div
      className={`w-screen min-h-screen flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat`}
      style={
        {
          // backgroundImage: `url(${backgroundImage})`,
        }
      }
    >
      <span className="absolute top-0 left-0 p-2 text-white">DEV</span>
      <div className="flex justify-center flex-column text-left">
        <div className="flex gap-0">
          <a
            onClick={() => toggleActiveTab("login")}
            href="#"
            className={`shrink-0 rounded-lg px-10 py-3 text-sm font-medium  ${
              activeTab === "login"
                ? "text-sky-600 bg-sky-100"
                : "text-gray-500 hover:bg-gray-50 hover:text-gray-700"
            }`}
          >
            Sign in
          </a>

          <a
            onClick={() => toggleActiveTab("register")}
            href="#"
            className={`shrink-0 rounded-lg px-10 py-3 text-sm font-medium  ${
              activeTab === "login"
                ? "text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                : " text-sky-600 bg-sky-100"
            }`}
          >
            Sign in
          </a>
        </div>

        {/* <div className="mx-auto max-w-500 overflow-hidden relative p-0 rounded-tl-15 rounded-tr-15 rounded-br-15 rounded-bl-15">
          <div>
            <ul className="">
              <li className="inline-block px-4 py-3 text-white bg-blue-200 rounded-lg ">
                <button>Sign in</button>
              </li>
              <li className="inline-block px-4 py-3 text-white bg-blue-600 rounded-lg active">
                <button>Sign up</button>
              </li>
            </ul>
            <div className="pt-6">Login component</div>
            <div className="pt-6">Register component</div>
          </div>
        </div> */}
      </div>
      <div className="w-1/4 border-black border-2">
        {activeTab === "login" && <div>Login</div>}
        {activeTab === "register" && <div>Register</div>}
      </div>
    </div>
  );
};

export default AuthenticationPage;
