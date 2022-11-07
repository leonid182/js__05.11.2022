let day;
let month;
let result = 0;
let result2 = 0;
let string = 'abcde';
let string2 = '222222';

// if ((day>=1)&&(day<=10)) {
//     console.log('1 декада');
// } else if((day>=11)&&(day<=20)) {
//     console.log('2 декада');
// }else if((day>=21)&&(day<=30)) {
//     console.log('3 декада');
// }else {
//     console.log('4 декада');
// }


// if ((month>=3)&&(month<6)) {
//     console.log('spring');
// } else if((month>=6)&&(month<9)) {
//     console.log('summer');
// }else if((month>=9)&&(month<12)) {
//     console.log('autumn');
// }else {
//     console.log('winter');
// }

// string[0] == 'a'? console.log('yes'): console.log('no'); 
// +string2[0]===1 || +string2[0]===2|| +string2[0]===3 ? console.log('yes'): console.log('no') ;

// for(i=0;i<string2.length; i++){
//     result+=(+string2[i]);
// }
// console.log(result);

let a = string2.slice(0,3);
let b = string2.slice(3,7);

for(i=0; i<a.length; i++){
    result+=(+a[i]);
}

for(j=0; j<b.length; j++){
        result2+=(+b[j]);
}

if(result===result2){
    console.log('yes');
}else{
    console.log('no');
}


    