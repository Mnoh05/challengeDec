import React from "react";
import home from "../imgs/home.png"


const Nav = () => {
    return  <div class="bg-[rgba(253,146,85,1)] text-white font-pop text-lg flex flex-row h-24 visible px-12">  
                <div class = "w-1/3 items-center flex justify-center">
                    <img  src= {home} class="h-12 w-12 object-left " alt = "img"/>
                </div>
                <div class="items-center flex flex-row mr-14 w-2/3">
                    <ul class= "w-full pr-8 h-auto flex justify-center space-x-5">
                        <li class="md:p-4  block">How We Work</li>
                        <li class="md:p-4  block">Services</li>
                        <li class="md:p-4  block">Free Quote</li>
                        <li class="md:p-4  block">Contact</li>
                    </ul>
                </div>

        </div>
}

export default Nav;
