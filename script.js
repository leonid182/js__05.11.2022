const gender = 'муж';
const age = 18;


if(age>18){
    console.log('вам больше 18')
}else if (age<18){
    console.log('вам меньше 18')
}else{
    console.log('congraulation')
}


if(gender.toLocaleLowerCase()==='муж'){
    console.log('Вам налево')
}
if(gender.toLocaleLowerCase()==='жен'){
    console.log('Вам направо')
}