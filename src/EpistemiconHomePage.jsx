function EpistemiconHomePage(){
    return(
        <div className="container flex flex-col items-center justify-center px-6 pt-16 mx-auto pb-28 ">
             <div className="flex items-center justify-center">
                <h1 className="px-3 py-1 text-sm text-center text-gray-500 border border-gray-400 rounded-full md:text-md backdrop-filter backdrop-blur-xl bg-green-400/30 font-poppins">SEP-28-2024</h1>
            </div>
            <br />
           
           <div className="flex flex-col items-center justify-center md:hidden">
                    <h1 className="text-3xl font-semibold font-poppins ">Unleash the power of</h1>
                    <h1 className="text-3xl font-semibold font-poppins ">Knowledge </h1>
                    <div className="flex items-center justify-center gap-2">
                        <h1 className="px-2 mx-1 mt-2 text-3xl text-white bg-black font-DubielItalic">Epistemicon</h1>
                        <h1 className="text-3xl font-semibold font-poppins ">2024 </h1>
                    </div>
           </div>
            <div className="items-center justify-center hidden text-3xl font-medium leading-relaxed md:text-6xl md:flex text-wrap font-poppins"> Unleash the Power of </div>
            <div className="items-center justify-center hidden text-3xl font-medium md:text-6xl md:flex font-poppins">Knowledge at <div className="inline-flex items-center justify-center px-1 mx-2 font-medium text-white bg-black text-wrap font-DubielItalic">Epistemicon</div>   2024 </div>
            <br />
            <div className="flex items-center justify-center">

                    <h1 className="mt-4 text-center text-gray-400 text-md md:text-xl font-poppins">Join the brightest minds to explore cutting-edge innovations and ideas</h1> 

            </div>
                <br />
            <a href="#" className="flex items-center justify-center py-3 mt-4 font-medium text-white rounded-lg px-7 font-poppins bg-oliurblue">
                    Get Started
            </a>
           
        </div>
    );
}

export default EpistemiconHomePage;

