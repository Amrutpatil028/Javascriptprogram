
console.log('swapping Program')
swap();
swap1();


function swap() {
    let a = 5;
    let b = 10;
    let temp;

    console.log('a=', a, 'b=', b);
    temp = a;
    a = b;
    b = temp;

    console.log('a=', a, 'b=', b);
}


function swap1() {

    let c = 5;
    let d = 10;
    console.log('c=', c, 'd=', d);
    c = c + d;
    d = c - d;
    c = c - d;
    //c = c + d - c;
    //d = (c + d) - d;
    console.log('c=', c, 'd=', d);
}