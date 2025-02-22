export default function Signup() {
  return (
    <div className="flex">
      <div className="w-1/2 h-full bg-cover bg-center bg-[url('./assets/gradient.png')]">
        <div className="justify-items-center pt-32">
          <p className="text-[48px] font-semibold text-white">
            Get Started with Us
          </p>
          <p className="text-[20px] font-semibold text-white">
            Personalized game recommendations at your fingertips!
          </p>
        </div>
        <div className="justify-items-center">
          <div className="pt-8 pb-6">
            <button
              type="button"
              className="w-[300px] py-4 bg-white text-black font-semibold text-center text-[20px] rounded-lg"
            >
              Signup Your Account
            </button>
          </div>
          <div className="pb-6">
            <button
              type="button"
              className="w-[300px] py-4 bg-white text-black font-semibold text-center text-[20px] rounded-lg"
            >
              Choose Your Preferences
            </button>
          </div>
          <div className="pb-6">
            <button
              type="button"
              className="w-[300px] py-4 bg-white text-black font-semibold text-center text-[20px] rounded-lg"
            >
              Get Recommendations
            </button>
          </div>
          <div className="pb-6">
            <button
              type="button"
              className="w-[300px] py-4 bg-white text-black font-semibold text-center text-[20px] rounded-lg"
            >
              Save & Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
