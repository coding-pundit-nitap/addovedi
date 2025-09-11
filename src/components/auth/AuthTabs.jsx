"use client";
export default function AuthTabs({activeTab,setActiveTab}){
   return (
    <div className="flex justify-center bg-[#10141C] mt-8 rounded-lg p-1">
        <button className={`w-full text-center text-sm p-2 rounded-lg transition ${activeTab==="login"? "bg-[#1E2630] text-white":"text-[#9BA3AF]"}`} onClick={()=>setActiveTab("login")}>Login</button>

        <button className={`w-full text-center text-sm p-2 rounded-lg transition ${activeTab==="register"? "bg-[#1E2630] text-white":"text-[#9BA3AF]"}`} onClick={()=>setActiveTab("register")}>Register</button>

    </div>
   )
}