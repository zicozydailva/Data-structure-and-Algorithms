function countDown(num) {
  if (num <= 0) {
    console.log("ALL DONE");
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}

countDown(4);


