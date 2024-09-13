function Venue(){
    return(
        <div className="container flex items-center justify-center px-16 pb-24 mx-auto">
                 <div className="flex flex-col items-center justify-center">
                         <h1 className="text-4xl font-medium font-poppins ">Venue Of Events</h1>
                            <br />

                            <div className="flex flex-col gap-3 p-6 border rounded-2xl">
                                     <div className="flex gap-4">
                                            <img src="Calendar.svg " className="w-8 md:w-12" />
                                            <h1 className="text-lg font-semibold md:text-3xl font-poppins">Sep 28, 2024</h1>
                                     </div>  
                                     <div className="flex gap-4">
                                            <img src="clock.svg " className="w-8 md:w-10" />
                                            <h1 className="text-lg font-semibold md:text-3xl font-poppins">09 AM - 05 PM  </h1>
                                     </div>  
                            </div>
                                  
                </div>
        </div>
    );
}


export default Venue;
