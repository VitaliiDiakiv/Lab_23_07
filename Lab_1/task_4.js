let array=[3,62,7,91,10,78,9,27,19];
function mixarr(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const k = Math.floor(Math.random() * (i + 1));
        [array[i], array[k]] = [array[k], array[i]];
    }
    console.log(array);
}
console.log(`Не перемішаний масив: ${array} `);
console.log("Перемішаний масив:");
mixarr(array); 