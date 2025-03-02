"use client";

import Image from "next/image";
import gradient from "@/app/assets/gradient.png";
import { Auth } from "@/app/components/Auth";

export default function Signin() {
  // const [credentials, setCredentials] = useState<SigninInput>({
  //   email: "",
  //   password: "",
  // });

  // const router = useRouter();

  // const handleSignin = async () => {
  //   const response = await signIn("credentials", {
  //     redirect: false,
  //     email: credentials.email,
  //     password: credentials.password,
  //   });

  //   if (response?.ok) {
  //     router.push("/dashboard");
  //   } else {
  //     console.error("Error in logging user", response);
  //   }
  // };

  return (
    <main className="grid lg:grid-cols-2 h-screen">
      <Auth isSignup={false} />
      {/* <div className="flex flex-col justify-center items-center px-4">
        <h1 className="text-3xl font-semibold text-center">Login</h1>
        <p className="text-xl mt-2 text-center md:text-base">
          Enter your credentials to signin
        </p>
        <div className="flex flex-col md:flex-row gap-4 mt-8 w-full max-w-[366px]">
          <button
            onClick={() => {
              signIn("google", { redirect: true, callbackUrl: "/dashboard" });
            }}
            className="flex justify-center items-center gap-2 rounded-xl font-semibold border border-white/35 p-2.5 w-full md:w-[192px] hover:bg-neutral-900/80"
          >
            <Image src={google} alt="Google Svg" width={24} height={24} />
            Google
          </button>
          <button
            onClick={() => {
              signIn("github", { redirect: true, callbackUrl: "/dashboard" });
            }}
            className="flex justify-center items-center gap-2 rounded-xl font-semibold border border-white/35 p-2.5 w-full md:w-[192px] hover:bg-neutral-900/80"
          >
            <Image src={github} alt="Github Svg" width={24} height={24} />
            Github
          </button>
        </div>
        <div className="w-full max-w-[396px] flex items-center mt-8 px-4">
          <div className="flex-grow border-t border-white/20"></div>
          <span className="mx-4 text-white/75">Or</span>
          <div className="flex-grow border-t border-white/20"></div>
        </div>
        <div className="flex flex-col justify-center mt-4 w-full max-w-[396px] px-4">
          <label className="mt-4 mb-2">Email</label>
          <input
            placeholder="john@example.com"
            onChange={(e) =>
              setCredentials({ ...credentials, email: e.target.value })
            }
            className="rounded-lg p-4 w-full h-11 bg-[#232323]"
          />
          <label className="mt-4 mb-2">Password</label>
          <input
            type="password"
            placeholder="12345678"
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
            className="rounded-lg p-4 w-full h-11 bg-[#232323]"
          />
          <button
            onClick={handleSignin}
            className="bg-white text-black p-2 rounded-lg font-semibold h-11 mt-8 w-full"
          >
            Submit
          </button>
          <span className="flex flex-col md:flex-row justify-center mt-5 gap-1 text-center">
            Dont have an Account?
            <a
              target="_blank"
              href="/api/signup"
              className="underline cursor-pointer font-semibold"
            >
              Register
            </a>
          </span>
        </div>
      </div> */}
      <div className="relative lg:block hidden px-4 py-5">
        <Image
          src={gradient}
          alt="Decorative background gradient"
          className="object-cover rounded-xl w-full h-full"
        />
        <div className="absolute flex flex-col justify-center items-center inset-0 z-10">
          <h1 className="text-[48px] font-semibold tracking-tighter leading-none">
            Welcome Back
          </h1>
          <p className="text-[18px] font-semibold">
            Log in and pick up where you left off!
          </p>
          <div className="space-y-6 mt-8">
            <div className="p-3.5 bg-white text-black rounded-xl font-semibold w-[300px] text-center text-lg">
              Access your account
            </div>
            <div className="p-3.5 bg-white/30 rounded-xl font-semibold w-[300px] text-center text-lg">
              Choose Your Preferences
            </div>
            <div className="p-3.5 bg-white/30 rounded-xl font-semibold w-[300px] text-center text-lg">
              Get Recommendations
            </div>
            <div className="p-3.5 bg-white/30 rounded-xl font-semibold w-[300px] text-center text-lg">
              Save & Share
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
