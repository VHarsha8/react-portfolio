function EpistemiconHomePage(){
    return(
        <div className="container flex flex-col items-center justify-center px-6 mx-auto md:px-16 md:py-24 ">
             <div className="flex items-center justify-center">
                <h1 className="px-3 py-1 text-sm font-medium text-gray-500 border border-gray-800 rounded-full backdrop-filter backdrop-blur-xl bg-blue-950/30 font-poppins">Welcome to</h1>
            </div>
            <br />
            
            <div className="flex flex-col items-center overflow-hidden justify-center w-full h-[400px] md:py-40 border border-gray-800 rounded-[35px] backdrop-filter backdrop-blur-xl relative bg-blue-950/20">
                <h1 className="md:text-[80px]  text-4xl  tracking-wider leading-[1.2] text-gray-100 font-MarvelRegularDj83 flex justify-center items-center">EPISTEMICON <div className="flex items-center justify-center font-semibold pl-7">2024</div> </h1>

                        <h1 className="text-2xl text-center text-gray-200 md:text-gray-300 md:font-medium md:text-5xl text-wrap font-DubielItalic">Where Knowledge Meets Innovation</h1>
                        <div className="w-[1100px] mx-auto h-[1100px]  absolute rounded-full blur-2xl top-[60%] bg-blue-600/40"></div>

            </div>
        </div>
    );
}

export default EpistemiconHomePage;

