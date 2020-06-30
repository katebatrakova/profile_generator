const readline = require('readline');

const readInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
// The .question(query, callback) function
readInterface.question('What\'s your name ? Nicknames are also acceptable : )', (answerName) => {
  // TODO: Log the answer in a database
  readInterface.question('What\'s an activity you like doing? ', (answerLikes) => {
    readInterface.question('What do you listen to while doing that?? ', (answerMusic) => {
      readInterface.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answerDayMeal) => {
        readInterface.question('What\'s your favourite thing to eat for that meal? ', (answerFood) => {
          readInterface.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answerSuperpower) => {
            console.log(`Here is some facts about you. Your name is ${answerName}. You like ${answerLikes.toLowerCase()}. You listen to ${answerMusic.toLowerCase()} while working. You favourite meal of the day is ${answerDayMeal.toLowerCase()}. And you love eating ${answerFood.toLowerCase()}. Your superpower is ${answerSuperpower.toLowerCase()}.`);
            readInterface.close();
          })
        })
      })
    })
  })
})


