import { Onest } from 'next/font/google'; // Import Onest font from Google Fonts



const onest = Onest({ subsets: ['latin'] }); // Initialize the font, specifying subsets if needed


export default function Signup () {
    return (
        <div className={`flex ${onest.className}`}>
            <div className="hidden lg:block flex-[1] h-screen bg-cover bg-[url('./assets/gradient.png')]">
                <div className="justify-items-center pt-32">
                <p className= "text-[48px] font-semibold text-white">Get Started with Us</p>
                <p className="text-[20px] font-semibold text-white">Personalized game recommendations at your fingertips!</p>
                </div>
                <div className="justify-items-center">
                    <div className="pt-8 pb-6">
                        <button type="button" className="w-[300px] py-4 bg-white text-black font-semibold text-center text-[20px] rounded-lg">Signup Your Account</button>
                    </div>
                    <div className="pb-6">
                        <button type="button" className="w-[300px] py-4 bg-white text-black font-semibold text-center text-[20px] rounded-lg">Choose Your Preferences</button>
                    </div>
                    <div className="pb-6">
                        <button type="button" className="w-[300px] py-4 bg-white text-black font-semibold text-center text-[20px] rounded-lg">Get Recommendations</button>
                    </div>
                    <div className="pb-6">
                        <button type="button" className="w-[300px] py-4 bg-white text-black font-semibold text-center text-[20px] rounded-lg">Save & Share</button>
                    </div>
                </div>
            </div>
            <div className = "bg-black md:pb-32 pb-20 lg:pb-0">
                <div className= "pt-14 lg:pt-28">
                    <p className="font-semibold text-[32px] text-center text-white">Register </p>
                    <p className="font-normal text-[20px] text-white text-center pt-[15px]">Enter your personal data to create account</p>
                    <div className="flex justify-center gap-[18px] pt-14">
                    <button type="button" className="px-[60px] py-3 bg-black text-white font-semibold text-center outline outline-slate-300 outline-1 text-[18px] rounded-lg">Google</button>
                    <button type="button" className="px-[60px] py-3 bg-black text-white font-semibold text-center outline outline-slate-300 outline-1 text-[18px] rounded-lg">Github</button>
                    </div>
                    <div className="flex flex-col gap-6 pt-4 px-44 lg:px-52">
                        <div>
                            <label className="block mb-2 text-sm font-medium text-white">Username</label>
                            <input type="text" id="first_name" className="bg-[#232323] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="eg. John Doe" required />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-white">Email</label>
                            <input type="text" id="first_name" className="bg-[#232323] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="eg. test@example.com" required />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-white">Password</label>
                            <input type="text" id="first_name" className="bg-[#232323] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="eg. 12345678 " required />
                        </div>
                        <div className="pt-3">
                            <button type="button" className="px-[190px] py-3 bg-white text-black font-semibold text-center text-sm rounded-lg">Submit</button>
                        </div>    
                    </div>
                    <div className="pt-[25px]">
                    <p className="font-normal text-white text-[18px] text-center">Already have an account? <span><a className="font-semibold" href= "https://localhost.com/signin">Signin</a></span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}