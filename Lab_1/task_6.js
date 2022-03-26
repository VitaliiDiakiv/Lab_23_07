function sortarr(a,b) {
    return a.name > b.name ? 1: -1;
}

const arr1 = [
    { name: 'Vitalii'},
    { name: 'Anna'},
    { name: 'Yarik'},
    { name: 'Danik'},
]
console.log("Не відсортований масив об'єктів:");
console.log(arr1);
console.log("Відсортований масив об'єктів:");
console.log(arr1.sort(sortarr));