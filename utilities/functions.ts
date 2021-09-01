export const findRepeatedCategory = (arr: Array<any>) => {
  let base = "";
  let mostRepeated = "";
  
  arr.reduce((acc, val) => {
    if(val in acc){
       acc[val]++;
    }else{
       acc[val] = 1;
    }
    if(acc[val] > base){

       base = acc[val];
       mostRepeated = val;
    }
    return acc;
  }, {})

  return mostRepeated;
};
