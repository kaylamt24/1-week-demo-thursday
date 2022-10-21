let backpack = []
// we are pushing something into an array

backpack.push('pokeball')
backpack.push('potion')
backpack.push('pokedollars')

// he is wanting to take it out of his backpack and move it somewhere else so we can shift or splice
// backpack.shift()

//This one will start at the beginning of the array and remove however many you want. So in this instance, we are starting at zero and removing one. We can also start at 1 or 2 and remove however many we want 0, 1 removes pokeball , removes potion. 0, 1, 2 will not work because you can only do one.  
backpack.splice(0, 1)

//He would the waterstone and wants to put it into his backpack. We are pushing the new item to his backpack
let foundItem = 'waterstone'
backpack.push(foundItem)


//He wanted to take the waterstone out of his backpack and give it away. Since it was the last item he added, we would pop because you pop off the last item in the array
backpack.pop()

//he wanted to see how many items are in the backpack (the 2) and wanted to see exactly what he has in his backpack (.length). Length will always count/show the number of items inside of the array. 

let itemCount = backpack.length
// console.log(itemCount)

backpack.push('great ball', 'anidote', 'revive')

//His backpack is starting to get heavy so he is wanting to move them to his satchel. He is wanting to add the medical items to his satchel so we are moving them from his backpack using splice to the net variable of satchel. We started at the index of 3 and removed 2 items. You can also just enter the index of where you want to begin and use that index and it will remove everything else after that.

//let satchel = backpack.splice(3, 2)

let satchel = backpack.splice(2)


//console.log(satchel)
////////////console.log(backpack)

//He wants a list of the items in his backpack so we are going to use a for loop to loop over the array and show everything in the backpack. We are going to start at the index of i and show all of the items behind it. i = 0 which is the first item in the array. the .length will iterate through the array for the number of items in the actual backpack. By doing this, it will create a list. 

// for(let i = 0; i < backpack.length; i++){
//     console.log(backpack[i])
// }

//only wants to see the first 3 items
// for(i = 0; i < 3; i++){
//     console.log(backpack[i])
// }

if (backpack.length >= 3){
    //console.log('more than 2')
     for(let i = 0; i < 3; i++){
   // console.log(backpack[i])
     }
} else {
   // console.log('2 or less')
    for(let i = 0; i < backpack.length; i++){
      // console.log(backpack[i])
    }
}
//without uncommenting the satchel, potion, pokedollars, great ball, antidote, revive. it also showed more than 2 potion pokedollars greatball
//when we uncommented the satchel, it changed it to potion, pokeballs, 2 or less, potion, pokedollars



//we set up guessMe to 54. We added the ------------ so we could see what the number was for each interation of the for loop 
// we dont know how we got to each number so we are going to go through it each time. 

let guessMe = 54

while (guessMe < 100) {
    console.log('-------------------', guessMe)
    if (guessMe % 4 === 0 || guessMe % 5 === 0) {
        console.log('guessMe is divisible by 4 or 5, added 25')
        guessMe += 25
    } else if (guessMe % 3 === 0) {
        console.log('guessMe is divisible by 3, subtracting 27')
        guessMe -= 27
    } else {
        console.log('guessMe hit else, added 3 to the previous number')
        guessMe += 3
    }
    guessMe += 22
    console.log(`Added 22, guessMe is now ${guessMe}`)
}
console.log('final value', guessMe)