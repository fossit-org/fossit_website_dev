import { A } from "@solidjs/router";
import { animate } from "motion";


const Nav = () => {
    return(
        <>
            <nav className="flex w-screen max-w-[1920px] h-max font-archivo justify-between p-8">
            <div class="flex gap-16 justify-center items-center">
                <A href="/" class="text-2xl font-bold border-l-8 pl-2 border-black">FOSSIT</A>
                <div class="gap-4 hidden md:flex">
                    <A href="/learn" class="btn">LEARN</A>
                    <A href="/about" class="btn">ABOUT US</A>
                </div>
            </div>
            <div>
                <button class="btn hidden md:flex">CONTRIBUTE</button>
            </div>
            <button onClick={() => {
                // document.querySelector(".menu").classList.toggle("flex");
                // document.querySelector(".menu").classList.toggle("hidden");
                animate(document.querySelector(".menu"), {display:"flex", ease: "easeInOut"}, {duration:.1})
                animate(document.querySelector(".menu"), {top:["-300px", "0px"], ease: "easeInOut"}, {duration:.7})
            }} class="btn md:hidden">MENU</button>
            
        </nav>
        <div class="flex menu flex-col gap-8 w-screen p-16 pb-0 justify-center items-center absolute top-[-400px] bg-black font-archivo text-white">
            <A href="/learn" class="">LEARN</A>
            <A href="/about" class="">ABOUT US</A>
            <button class="">CONTRIBUTE</button>
            <button onClick={() => {
                animate(document.querySelector(".menu"), {top:["0", "-300px"], ease: "easeInOut"}, {duration:.7})
                animate(document.querySelector(".menu"), {display:"hidden", ease: "easeInOut"}, {duration:.1})
                // document.querySelector(".menu").classList.toggle("flex");
                // document.querySelector(".menu").classList.toggle("hidden");
            }} class="w-screen p-2 bg-cyellow text-cblack font-black">CLOSE</button>
        </div>
        </>
    )
}

export default Nav;