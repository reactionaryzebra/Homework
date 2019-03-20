//Question 1
for (let i = 1; i < 21; i++) {
  console.log(i);
}

//Question 2
for (let i = 0; i < 201; i+=2) {
  console.log(i);
}

//Question 3
const messages = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."];
for (let i = 0; i < 20; i++) {
  console.log("Love me, pet me! HSSSSSS!");
  if (i % 2 === 0){
    console.log(messages[Math.floor(Math.random() * 3)]);
  }
}

//Question 4
for (let i = 1; i < 101; i++) {
  if ((i % 3 === 0) && (i % 5 === 0)){
    console.log('FizzBuzz');
  } else if (i % 3 === 0){
    console.log('Fizz');
  } else if (i % 5 === 0){
    console.log('Buzz');
  } else {
    console.log(i);
  }
}

//Question 5
const kenny = ["Kenny", 1000, "Austin"];
const jimHaff = ["Jim H", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const jimClark = ["Jim C", 186, "LA"];
const ryan = ["Ryan", 65, "Denver"];
kenny[0] = 'Gameboy';
jimClark[1] += 1;
ryan[2] = 'Gotham City';
reuben.splice(2,1,'Chicago');
jimHaff.splice(2,1,'New York', 'Austin', 'Nashville');
jimHaff.splice(2,1);

//Question 6
const ninjaTurtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo']
let casedTurtles = [];
for (let i = 0; i < ninjaTurtles.length; i++) {
  let casedTurtle = '';
  for (let j = 0; j < ninjaTurtles[i].length; j++) {
    if (j % 2 === 0){
      casedTurtle += ninjaTurtles[i][j].toUpperCase();
    } else {
      casedTurtle += ninjaTurtles[i][j]
    }
  }
  casedTurtles.push(casedTurtle);
  casedTurtle = '';
}
console.log(casedTurtles);

//Question 7
const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];
const kristynsShoe = kristynsCloset[0];
kristynsCloset.splice(0, 1);
thomsCloset[2].push(kristynsShoe);
function dressKristyn(arr){
  let randomOutfit = [];
  while (randomOutfit.length < 3){
    let randomIndex = Math.floor(Math.random()* arr.length);
    if (!randomOutfit.includes(arr[randomIndex])){
      randomOutfit.push(arr[randomIndex]);
    }
  }
  console.log(`Today, Kristyn will be wearing ${randomOutfit[0]}, ${randomOutfit[1]}, and ${randomOutfit[2]}.`)
}
function dressThom(arr){
  let randomShirt = thomsCloset[0][Math.floor(Math.random() * thomsCloset[0].length)]
  let randomPants = thomsCloset[1][Math.floor(Math.random() * thomsCloset[1].length)]
  let randomAccessory = thomsCloset[2][Math.floor(Math.random() * thomsCloset[2].length)]
  console.log(`Today Thom will be wearing ${randomShirt}, ${randomPants}, ${randomAccessory}.`)
}
dressKristyn(kristynsCloset);
dressKristyn(kristynsCloset);
dressKristyn(kristynsCloset);
dressThom(thomsCloset);
dressThom(thomsCloset);
dressThom(thomsCloset);

//Question 8
for (let i = 0; i < kristynsCloset.length; i++) {
  console.log(`WHIRR: Now washing ${kristynsCloset[i]}`);
}
for (let i = 0; i < thomsCloset.length; i++) {
  console.log(thomsCloset[i]);
}

//Question 9
let grandSum = 0
for (let i = 0; i < 1000; i++) {
  if((i%3===0)|| (i%5===0)){
    grandSum += i;
  }
}
console.log(grandSum);

//Triangles
const argument = 7;
for (let i = 1; i <= argument; i++) {
  console.log('#'.repeat(i));
}
for (let i = 1; i <= argument ; i++) {
  console.log(' '.repeat(argument - i) + '#'.repeat(i));
}
for (let i = 0; i < argument; i++) {
  console.log('#'.repeat(argument - i) + ' '.repeat(i));
}
for (let i = 0; i < argument; i++) {
  console.log(' '.repeat(i) + '#'.repeat(argument - i));
}
