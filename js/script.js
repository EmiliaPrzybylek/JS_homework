' use strick';

const surnames = new Array('Raś', 'Kowalczyk', 'Kustra', 'Adamiec', 'Kosiński', 'Gunia', 'Wybraniec', 'Szczerek', 'Urbanowicz', 'Dukaj');

surnames.forEach((sur, i) => {
    console.log(`${++i}. ${sur}`);
})




////////////////////////
let star = '';

for(let i = 0; i < 5; i++){
    for(let j = 0; j < 5; j++){
        star += '*';
    }
    star +='\n';
}
console.log(star);


///////////////////////

let stars = '';

for(let i = 0; i <= 4; i++) {
    stars += '*****\n';
}
console.log(stars);










