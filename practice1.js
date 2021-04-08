return 'cat'[1] // a

const string3 = `Yet another string primitive`;
const string4 = new String("A String object");

obj = {
    prop: 'value',
    method () {
        return this.prop
    }
}

obj.prop      //  'value'

obj.method()  //  'value'

function example(…) {
    return condition1 ? value1
         : condition2 ? value2
         : condition3 ? value3
         : value4;
}

// Equivalent to:

function example(…) {
    if (condition1) { return value1; }
    else if (condition2) { return value2; }
    else if (condition3) { return value3; }
    else { return value4; }
}

const doubleX = x => x * 2;
const halfX = x => x / 2;

const messingAround = a => a % 2 === 0 ? halfX(a) : doubleX(a);

a % 2 === 0 ? console.log(`${a} is even.`) : console.log(`${a} is odd.`);

console.log(arr[arr.length - 1]) 