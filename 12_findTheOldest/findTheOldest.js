 /*
    Go into 'people', and iterate across whole array
    Look into object and age = deathYear - birthYear
        if no deathYear then deathYear == <today's date>
    Compare age to previous object age, if greater, Oldest_ == current age
    Continue for all objects in array
    Print the object name.
    */

    const findTheOldest = function(people) {
        let oldestAge = 0;
        let oldestPerson = people[0];
  
        for(let i = 0; i < people.length; i++){
          let birthYear =  Object.getOwnPropertyDescriptor(people[i], 'yearOfBirth').value; 
          let deathYear = Object.getOwnPropertyDescriptor(     people [i], 'yearOfDeath').value;
          let personAge = deathYear - birthYear;
  
  
          if(personAge > oldestAge){
            oldestAge = personAge;
            oldestPerson = Object.getOwnPropertyDescriptor(people[i], 'name').value;
          }
        }
        return oldestPerson; 
      }
      console.log(findTheOldest(people))

// Do not edit below this line
module.exports = findTheOldest;
