/* *************************************** */
/* CSE-1020 Session 11B */

const library = [
    {
        title: 'The Shadow',
        author: 'Ma Sandar',
        alreadyRead: true,
    },
    {
        title: 'C Programming',
        author: 'Dennis Ritchie',
        alreadyRead: false,
    },
    {
        title: 'JavaScript Programming',
        author: 'Breden Rich',
        alreadyRead: true,
    },
    {
        title: 'Python Programming',
        author: 'Guido Rossum',
        alreadyRead: false,
    },
    {
        title: 'Java Programming',
        author: 'James Gosling',
        alreadyRead: true,
    },
];
/* for (let i = 0; i < library.length; i++) {
    let book = '"' + library[i].title + '"' + ' by ' + library[i].author;
    console.log(book);
    if (library[i].alreadyRead) console.log('You already read ' + book + '\n');
    else console.log('You still need to read ' + book + '\n');
} */

const favoriteMovie = {
    title: 'Mudras Calling',
    duration: '95 minutes',
    stars: ['Zenn Kyi', 'Hla Yin Kyae', 'Nann Wai Wai Htun'],
};
/* console.log(favoriteMovie.title + ' lasts for ' + favoriteMovie.duration + '.');
console.log('Stars: ');
for (let i = 0; i < favoriteMovie.stars.length; i++) {
    const actor = favoriteMovie.stars[i];
    console.log(actor);
} */

const recipe = {
    title: 'Milk Rice Padding',
    servings: 1,
    ingredients: ['Rice', 'Milk', 'Egg', 'Sugar'],
};
/* console.log('Title : ' + recipe.title);
console.log('Servings : ' + recipe.servings);
console.log('Ingredients : ');

for (let i = 0; i < recipe.ingredients.length; i++) {
    console.log(recipe.ingredients[i]);
} */