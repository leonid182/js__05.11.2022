const gender = 'муж';
let age;


if(age>18){
    console.log('вам больше 18')
}else if (age<18){
    console.log('вам меньше 18')
}else if(age===undefined){
    console.log('введите возраст')
}else{
    console.log('вам 18')
}


if(gender.toLocaleLowerCase()==='муж'){
    console.log('Вам налево')
}
if(gender.toLocaleLowerCase()==='жен'){
    console.log('Вам направо')
}