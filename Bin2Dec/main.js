function bin2Dec(binary) {
  // const number = parseInt(binary, 10);
  // console.log(number);
  let number = 0;
  for (let i = binary.length; i >= 0; i--) {
    number += parseInt(binary[i]);
  }
  console.log(number);
}
