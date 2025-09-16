"use client";
import { useState } from "react";

import AuthTabs from "./AuthTabs";
import LoginIn from "./LoginForm";
import Register from "./RegisterForm";

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState<"login" | "register">("login");
  return (
    <div className="min-h-screen bg-gray-900 font-sans flex items-center justify-center">
      <div className="w-110 bg-gradient-to-r from-cyan-500 to-purple-700 p-0.5 rounded-xl">
        <div className="flex flex-col bg-[#161B22] text-center p-8 rounded-xl">
          <h1 className="font-bold text-3xl">
            {activeTab === "login" ? "Welcome Back" : "Create Your Account"}
          </h1>
          <p className="font-medium text-xs text-[#9BA3AF]">
            Authenticate Your Connection
          </p>
          <AuthTabs activeTab={activeTab} setActiveTab={setActiveTab} />
          <div>{activeTab === "login" ? <LoginIn /> : <Register />}</div>
        </div>
      </div>
    </div>
  );
}
