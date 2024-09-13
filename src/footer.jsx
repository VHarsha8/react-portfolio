function Footer(){
    return(
        <div className="w-full   h-[500px] flex flex-col md:+flex-row md:justify-center md:items-center bg-ivory">
                <div className="flex flex-col items-start justify-start h-full gap-4 p-6 border md:w-1/2 md:p-10 ">
                          <div className="flex items-center justify-center">
                            <img src="location.svg " className="w-12"></img>
                            <a href="https://maps.app.goo.gl/J6xyoMU2tPoFzV7y7" target="_blank">
                            <h1 className="text-lg font-medium font-poppins">Andhra Loyola Institution of Engineering and Technology</h1>

                            </a>
                          </div>  
                          <div className="flex items-center justify-center gap-2">
                            <img src="Calendar.svg " className="w-12"></img>
                            <h1 className="text-lg font-medium font-poppins">28th SEPTEMBER 2024</h1>
                          </div>  
                          <div className="flex items-center justify-center gap-2">
                            <img src="clock.svg " className="w-10"></img>
                            <h1 className="text-lg font-medium font-poppins">9 AM to 5 PM</h1>
                          </div>  
                </div>
                <div className="flex items-center justify-center w-1/2 ">

                </div>
        </div>
    );
}

export default Footer;