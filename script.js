let a = 'manager' //admin, manager

switch (a) {
    case 'user':
        console.log('Who the hell are you?');
        break;
    case 'admin':
        console.log('Welcome,sir');
        break;
    case 'manager':
        console.log('Please order, my Lord!');
        break;

    default:
        console.log('Name yourself');
        break;
}