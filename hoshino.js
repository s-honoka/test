const sosu = (n) => {
  if(n<2){
    return '２以上の数字を入力してください';
  }
  else{
    let array = [2];
    //3~nまでの素数を探す
    for(let i =3; i <=n; i += 2){
      let k = 2;
       // 各iを割り切る素数を探す
      for(let j = 0; (j < array.length) && (array[j] <= Math.sqrt(i)); j++){
        if(i % array[j] == 0){
          // iを割り切った数字array[j]を保持するk
          k = array[j];
          break;
        }
      }
      if(i % k != 0){
        array.push(i);
      }
    }
    return array;
  }
}
console.log(sosu(20));