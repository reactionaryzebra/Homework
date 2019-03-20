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
