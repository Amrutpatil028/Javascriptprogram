let string = "amrut";
print();
reverse();

function print() {
    let string = "Devansh";
    console.log(string);
    console.log(string.length);
    console.log(string.toUpperCase());
    console.log(string.toLowerCase());
    console.log(string.indexOf("v"));
    console.log(string.slice(0, 4));
    console.log(string.replace("Devansh", "Amrut"));
    console.log(string.concat("Devansh"));
    console.log(string.trim());
    console.log(string.split(""));

}
function reverse() {
    let string = 'Shubhangi';
    let a = string.length;
    let reversed = "";
    for (i = a - 1; i > -1; i--) {

        reversed += string[i];

    }
    console.log(reversed);
}




