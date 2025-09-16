import LogInButton from "./LoginButton";
import GoogleSignInButton from "./SignInButton";

export default function LoginIn() {
  return (
    <form action="/login" className="flex flex-col gap-4  mt-8">
      <label
        htmlFor="email"
        className="text-[#9BA3AF] text-sm font-inter text-left"
      >
        Email ID
      </label>
      <input
        type="email"
        name="email"
        placeholder="xyz@gmail.com"
        className="border p-2 rounded text-[#FFFFFF] text-base border-[#2A2F36] bg-gray-800"
        required
      />
      <label
        htmlFor="email"
        className="text-[#9BA3AF] text-sm font-inter text-left"
      >
        Password
      </label>
      <input
        type="password"
        name="password"
        placeholder=".............."
        className="border p-2 rounded text-[#FFFFFF] border-[#2A2F36] bg-gray-800"
        required
      />

      <LogInButton />
      <p>Or</p>
      <GoogleSignInButton />
    </form>
  );
}
