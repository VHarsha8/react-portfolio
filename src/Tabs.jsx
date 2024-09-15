function Tabs(){
    return(
        <div className="flex flex-wrap w-full h-auto gap-4 px-6 md:px-0 md:items-center md:justify-center md:gap-10 ">

            <div className="flex items-center justify-center mb-1">
                <h1 className="px-3 py-1 text-sm text-center text-gray-500 border border-gray-400 rounded-md md:text-md backdrop-filter backdrop-blur-xl bg-green-400/40 font-poppins">CSE</h1>
            </div>
            <div className="flex items-center justify-center mb-1">
                <h1 className="px-3 py-1 text-sm text-center text-gray-500 border border-gray-400 rounded-md md:text-md backdrop-filter backdrop-blur-xl bg-green-400/40 font-poppins">MECH</h1>
            </div>
            <div className="flex items-center justify-center mb-1">
                <h1 className="px-3 py-1 text-sm text-center text-gray-500 border border-gray-400 rounded-md md:text-md backdrop-filter backdrop-blur-xl bg-green-400/40 font-poppins">ECE</h1>
            </div>
            <div className="flex items-center justify-center mb-1">
                <h1 className="px-3 py-1 text-sm text-center text-gray-500 border border-gray-400 rounded-md md:text-md backdrop-filter backdrop-blur-xl bg-green-400/40 font-poppins">EEE</h1>
            </div>
            <div className="flex items-center justify-center mb-1">
                <h1 className="px-3 py-1 text-sm text-center text-gray-500 border border-gray-400 rounded-md md:text-md backdrop-filter backdrop-blur-xl bg-green-400/40 font-poppins">CIVIL</h1>
            </div>
            <div className="flex items-center justify-center mb-1">
                <h1 className="px-3 py-1 text-sm text-center text-gray-500 border border-gray-400 rounded-md md:text-md backdrop-filter backdrop-blur-xl bg-green-400/40 font-poppins">AIML</h1>
            </div>

        </div>
    );
}

export default Tabs;