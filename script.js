let a=0;
const b =10;
let c = '';


    while (a<b) {
        a++
        c+=`${a}${a !==b?',':''}`
    }
    console.log(c);