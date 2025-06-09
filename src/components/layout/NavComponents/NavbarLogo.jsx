import React from "react";

export function NavbarLogo() {
  return (
    <div className="flex items-center space-x-2">
      <img
        src="/logo.png"
        alt="Short Logo"
        width={50}
        height={30}
        className="h-auto"
      />
      <span className="text-lg font-semibold">
        <span className="text-blue-500">PURE</span>-AI
      </span>
    </div>
  );
}
