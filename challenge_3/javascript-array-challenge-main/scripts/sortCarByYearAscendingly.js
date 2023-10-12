function sortCarByYearAscendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  // console.log(cars[1].year);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini

  const lengthArr = result.length;

  for(let i = 0; i < lengthArr - 1; i++) {
    for(let j = 0; j < lengthArr - 1; j++) {
      if(result[j].year > result[j + 1].year) {
        let temp = result[j];
        result[j] = result[j + 1];
        result[j + 1] = temp;
      }
    }
  }

  // Rubah code ini dengan array hasil sorting secara ascending
  return result;
}
