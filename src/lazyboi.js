var fs = require("fs");

// WHAT I WANT TO DO WITH LAZYBOI.JS
// Create react component files and dir from CLI because I hate typing out stuff repetitively

// FORMAT:
//  node lazyboi.js [componentName] [js or jsx] [css or scss] [-bem or usebem] -[block name]
// or idk i can make the filetypes more dynamic

// ayt, so basically, component name will be the name of the folder and the component itself
// in this folder there's 2 files - ComponentName.js/jsx and ComponentName.css/scss
// idk this is how i structure my components
// anyway, in my bigger projects i like using bem
// i know ppl say oh u should just tailwind it hngggg. whatever man, i will sometime soon but rn this is what i use
// so if u wanna do that u put the '-bem' thing then your block name then it makes that in the jsx or css
// i also stole a custom hook for bem from a company i interned in so if u wanna use that use '-usebem'
// itll create the "boilerplate" stuff ofc u might wanna import useBEM on the js bec import urls are iffy
// whatever, man, i just hate typing stuff repeatedly, i like ranting but this 
//  const whatever return this classname {that} is giving me major burnout rn
// that's the part i hate abt my current workflow, and i do it so much so im like
// HEY BUDDY lets automate that!!!
// anyw, im done ranting, toodles bye