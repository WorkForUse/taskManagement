import React from 'react';

const AuthLayout = ({ children }) => {
  return (
    <div className="flex">
      {/* Left Section */}
      <div className="w-screen h-screen md:w-[60vw] px-12 pt-8 pb-12">
        <h2 className="text-lg font-medium text-black">Task Manager</h2>
        {children}
      </div>

      {/* Right Section */}
      <div
        className="hidden md:flex w-[40vw] h-screen items-center justify-center bg-cover bg-no-repeat bg-center overflow-hidden p-8"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/736x/cf/ca/73/cfca7375c0b759068826a71b53805a19.jpg')"
        }}
      >
        <img
          src="https://cdn2.iconfinder.com/data/icons/illustricon-tech-viii/512/task_refresh-512.png"
          className="w-64 lg:w-[90%]"
          alt="Authentication Illustration"
        />
      </div>
    </div>
  );
};

export default AuthLayout;