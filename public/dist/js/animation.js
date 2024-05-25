// import gsap
const { gsap } = require("gsap/dist/gsap");
// import gsap eases
const { CustomEase } = require("gsap/dist/CustomEase");
const { RoughEase, ExpoScaleEase, SlowMo } = require("gsap/dist/EasePack");
// import gsap plugins
const { Flip } = require("gsap/dist/Flip");
const { ScrollTrigger } = require("gsap/dist/ScrollTrigger");
const { Observer } = require("gsap/dist/Observer");
const { ScrollToPlugin } = require("gsap/dist/ScrollToPlugin");
const { Draggable } = require("gsap/dist/Draggable");
const { MotionPathPlugin } = require("gsap/dist/MotionPathPlugin");
const { EaselPlugin } = require("gsap/dist/EaselPlugin");
const { PixiPlugin } = require("gsap/dist/PixiPlugin");
const { TextPlugin } = require("gsap/dist/TextPlugin");

// register gsap plugin
document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(Flip,ScrollTrigger,Observer,ScrollToPlugin,Draggable,MotionPathPlugin,EaselPlugin,PixiPlugin,TextPlugin,RoughEase,ExpoScaleEase,SlowMo,CustomEase)
    // gsap code here
        
});