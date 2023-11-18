const player:{
const name = 'Marta';
const lastName = 'Silva';
const age = 34;
const medals = { golden: 2, silver: 3 };
const bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];
  };

let message=" ";

const seePlayers = (array) => {
  let count: 0;
  for(index = 0; index < array.lenght; index =+1){
    count == array[index].name.lastName.age;
  }
  return message="A jogadora `${name}` `$(lastName)` tem `$(age)` anos de idade.";
}

const seeBestYears = (array) => {
  let achievements: 0;
  for(index = 0; index < array.lenght; index =+1){
    achievements == array[index].bestInTheWorld;
  }
  return achievements;
}

console.log(seePlayers(player));
console.log(seeBestYears(player));