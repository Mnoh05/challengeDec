import React from "react";
import home from "../imgs/home.png"
import twitter from "../imgs/twitter.png"
import face from "../imgs/face.png"
import insta from "../imgs/insta.png"
import whats from "../imgs/whats.png"

const Footer = () =>{
    return <div class="bg-[rgba(253,146,85,1)] text-white font-pop flex flex-row h-1/4 visible px-72 py-12 space-x-20">
        <div > 
            <img src= {home} class="h-10 w-10 ml-4" alt = "img" />
            <p class = "p-4 text-justify"> It is a long established fact  that a reader will be distracted by the readable content of a page whenters.</p >
            <div class ="flex flex-row mr-1">
                <img src= {twitter} alt = "img" />
                <img src= {face} alt = "img" />
                <img src= {insta} alt = "img" />
            </div>
            

        </div>
        <div class ="text-sm space-y-2">
            <h2 class ="text-xl">About Us</h2>
            <p class = "pt-6">About</p>
            <p>Privacy & Policy</p>
            <p>Terms & Conditions</p>
            <p>Faq</p>
        </div>
        <div class ="text-sm space-y-2">
            <h2 class ="text-xl">Navigate</h2>
            <p class = "pt-6">How we work</p>
            <p>Services</p>
            <p>Faq</p>
            <p>Contact</p>
            <p>Free Quote</p>
        </div>
        <div class ="text-sm space-y-2">
            <h2 class ="text-xl">Contact Us</h2>
            <p class = "pt-6">Ricardo Margain</p>
            <p>Call: +52 81 1234 5678</p>
            <p>Email: info@challenge.com</p>
            <img src= {whats} alt="" />
        </div>
    </div>

}

export default Footer;