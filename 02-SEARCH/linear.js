function linearSearch(arr, target) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
      console.log(i);
      return i;
    } else {
      console.log(-1);
      return -1;
    }
  }
}

linearSearch([1, 2, 3], 3);
