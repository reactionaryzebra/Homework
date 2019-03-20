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
