"use client";
import { useState } from "react";

import AuthTabs from "./AuthTabs";
import LoginIn from "./LoginForm";
import Register from "./RegisterForm";

export default function AuthPage({
  defaultTab = "login",
}: {
  defaultTab?: "login" | "register";
}) {
  const [activeTab, setActiveTab] = useState<"login" | "register">(defaultTab);
  return (
    <div className="min-h-dvh bg-gray-900 font-sans flex items-start justify-center pt-20 md:pt-24 pb-12">
      <div className="w-110 animated-neon-border rounded-xl p-[2px]">
        <div className="flex flex-col bg-[#161B22] text-center p-8 rounded-xl relative z-10">
          <h1 className="font-bold text-3xl font-heading">
            {activeTab === "login" ? "Welcome Back" : "Create Your Account"}
          </h1>
          <p className="font-medium text-xs text-[#9BA3AF] font-heading">
            {activeTab === "login"
              ? "Race into action"
              : "Assemble Your RC Identity"}
          </p>
          <AuthTabs activeTab={activeTab} setActiveTab={setActiveTab} />
          <div>{activeTab === "login" ? <LoginIn /> : <Register />}</div>
        </div>
      </div>
    </div>
  );
}
