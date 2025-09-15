import RegisterButton from "./RegisterButton";

export default function Register(){
    return (
        <form action="/register" className="flex flex-col gap-4  mt-8">
                    <label
                      htmlFor="fullname"
                      className="text-[#9BA3AF] text-sm font-inter text-left"
                    >
                      Full Name
                    </label>
                    <input
                      id="fullname"
                      type="fullname"
                      name="fullname"
                      placeholder="e.g. Tapan Boruah"
                      className="border p-2 rounded text-[#FFFFFF] text-base border-[#2A2F36] bg-gray-800"
                      required
                    />
                    <label
                      htmlFor="email"
                      className="text-[#9BA3AF] text-sm font-inter text-left"
                    >
                      Email ID
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="xyz@gmail.com"
                      className="border p-2 rounded text-[#FFFFFF] text-base border-[#2A2F36] bg-gray-800"
                      required
                    />
                    <label
                      htmlFor="password"
                      className="text-[#9BA3AF] text-sm font-inter text-left"
                    >
                      Password
                    </label>
                    <input
                      id="password"
                      type="password"
                      name="password"
                      placeholder=".............."
                      className="border p-2 rounded text-[#FFFFFF] border-[#2A2F36] bg-gray-800"
                      required
                    />
                    <label
                      htmlFor="confirmpassword"
                      className="text-[#9BA3AF] text-sm font-inter text-left"
                    >
                      Confirm Password
                    </label>
                    <input
                      id="confirmpassword"
                      type="password"
                      name="password"
                      placeholder=".............."
                      className="border p-2 rounded text-[#FFFFFF] border-[#2A2F36] bg-gray-800"
                      required
                    />
                    <RegisterButton/>
                  </form>
    )
}