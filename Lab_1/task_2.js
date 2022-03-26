function sortarr(a,b) {
    return a > b ? 1: -1;
}
function sortword(word) {
    let arr = word.split('');
    let word1=arr.sort(sortarr).join("");
    console.log(word1);
}
console.log("Непосортоване слово: \nпрограмування");
console.log("Посортоване слово у алфавітному порядку :");sortword("програмування");