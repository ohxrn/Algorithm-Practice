function subStringForNegs(arr) {
  for (var idx = 0; idx < arr.length; idx++) {
    if (idx < 0) {
      arr[idx] = 'Dojo';
    }
  }
  return arr;
}