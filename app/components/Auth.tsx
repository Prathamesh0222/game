"use client";

import Image from "next/image";
import google from "@/public/google.svg";
import github from "@/public/github.svg";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { SigninInput, SignupInput } from "@/app/lib/schema";
import { useRouter } from "next/navigation";
import axios from "axios";

interface AuthFormProps {
  isSignup?: boolean;
}

export const Auth = ({ isSignup = false }: AuthFormProps) => {
  const [credentials, setCredentials] = useState<SigninInput | SignupInput>({
    email: "",
    password: "",
    ...(isSignup && { username: "" }),
  });

  const handleOauthSignin = (provider: "google" | "github") => {
    signIn(provider, { redirect: false, callbackUrl: "/dashboard" });
  };

  const router = useRouter();

  const handleSubmit = async () => {
    try {
      if (isSignup) {
        const response = await axios.post("/api/register", credentials);
        if (!response.data) {
          throw new Error("Registration Failed");
        }

        const signInResponse = await signIn("credentials", {
          redirect: false,
          email: credentials.email,
          password: credentials.password,
        });

        if (signInResponse?.ok) {
          router.push("/dashboard");
        } else {
          console.error("Error in logging user", signInResponse);
        }
      }
    } catch (error) {
      console.error(isSignup ? "Signup failed" : "Signin failed", error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center px-4">
      <h1 className="text-3xl font-semibold text-center">
        {isSignup ? "Register" : "Login"}
      </h1>
      <p className="text-xl mt-2 text-center md:text-base">
        {isSignup
          ? "Create an account to get started"
          : "Enter your credentials to sign in"}
      </p>
      <div className="flex flex-col md:flex-row gap-4 mt-8 w-full max-w-[366px]">
        <button
          onClick={() => handleOauthSignin("google")}
          className="flex justify-center items-center gap-2 rounded-xl font-semibold border border-white/35 p-2.5 w-full md:w-[192px] hover:bg-neutral-900/80"
        >
          <Image src={google} alt="Google Svg" width={24} height={24} />
          Google
        </button>
        <button
          onClick={() => handleOauthSignin("github")}
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
        {isSignup && (
          <>
            <label htmlFor="username" className="mt-4 mb-2">
              Username
            </label>
            <input
              id="username"
              placeholder="John Doe"
              onChange={(e) =>
                setCredentials({ ...credentials, username: e.target.value })
              }
              className="rounded-lg p-4 w-full h-11 bg-[#232323]"
            />
          </>
        )}
        <label htmlFor="email" className="mt-4 mb-2">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="john@example.com"
          onChange={(e) =>
            setCredentials({ ...credentials, email: e.target.value })
          }
          className="rounded-lg p-4 w-full h-11 bg-[#232323]"
        />
        <label htmlFor="password" className="mt-4 mb-2">
          Password
        </label>
        <input
          id="password"
          type="password"
          placeholder="12345678"
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
          className="rounded-lg p-4 w-full h-11 bg-[#232323]"
        />
        <button
          onClick={() => handleSubmit()}
          className="bg-white text-black p-2 rounded-lg font-semibold h-11 mt-8 w-full"
        >
          {isSignup ? "Sign Up" : "Sign In"}
        </button>
        <span className="flex flex-col md:flex-row justify-center mt-5 gap-1 text-center">
          {isSignup ? "Already have an account?" : "Don't have an account?"}
          <a
            href={isSignup ? "/api/signin" : "/api/signup"}
            className="underline cursor-pointer font-semibold"
          >
            {isSignup ? "Sign In" : "Sign Up"}
          </a>
        </span>
      </div>
    </div>
  );
};
