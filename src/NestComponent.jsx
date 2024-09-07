
import HeroSection from "./HeroSection";

function NestComponent() {
    return (
        <div className="w-[650px] mt-3 py-6 mx-auto ">
             <nav className="flex items-center justify-between "> 

                <div className="flex items-center">

                    <img src="myimage.jpg" alt="" className="w-8 rounded-full" />

                </div>

                <div className="flex item-center">
                     <a href="#" className="px-4 py-2 text-sm text-white rounded-lg font-poppins hover:bg-darkgreytext">About</a>
                     <a href="#" className="px-4 py-2 text-sm text-white rounded-lg font-poppins hover:bg-darkgreytext">Blog</a>
                     <a href="#" className="px-4 py-2 text-sm text-white rounded-lg font-poppins hover:bg-darkgreytext">Craft</a>
                     <a href="#" className="px-4 py-2 text-sm text-white rounded-lg font-poppins hover:bg-darkgreytext">Gear</a>
                </div>
                <div className="flex items-center">

                <svg className="w-[22px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#b7b9bd"></path> </g></svg>

                </div>
                
             </nav>
             <br />
             <br />
             <br />
             <br></br>

             <HeroSection />

        </div>


    );
}

export default NestComponent;