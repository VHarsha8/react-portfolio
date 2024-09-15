function Footer(){
    return(
        <footer className="w-full h-[400px] px-10 py-6 md:py-0  bg-darkgreybackground md:gap-0 gap-6  md:w-full grid md:grid-cols-2 justify-center items-center ">
              <div className="grid place-items-center rounded-2xl ">

                <div className="flex flex-col items-center justify-center gap-3 md:justify-start md:items-start">
                        <h1 className="text-4xl font-semibold tracking-wider text-white md:text-5xl font-WallingtonRegularPYK7">EPISTEMICON</h1>
                        <h1 className="text-3xl font-semibold tracking-widest text-white md:text-5xl font-WallingtonRegularPYK7">2K24</h1>
                </div>      
                        
                      
              </div>
              <div className="grid place-items-center">
              <div className="flex flex-col gap-3 ">
                

             

                      
                      <div className="flex items-center gap-2">
                            <img src="calendar28.svg" className="w-10 md:w-12"></img>
                            <h1 className="text-white md:text-2xl font-poppins">SEPTEMBER 28 2024</h1>
                      </div>
                      <div className="flex items-center gap-2">
                            <img src="clock.svg" className="w-10 md:w-12"></img>
                            <h1 className="text-white md:text-2xl font-poppins">FROM: 09:00 AM TO 5:00 PM</h1>

                      </div>
                      <div className="flex items-center gap-1">
                            <img src="locationsvg.svg" className="w-10 md:w-12"></img>
                             <h1 className="text-white md:text-2xl font-poppins">Andhra Loyola Institute of Engineering and Technology</h1>
                      </div>

                      </div>
              </div>
        </footer>
    );
}

export default Footer;