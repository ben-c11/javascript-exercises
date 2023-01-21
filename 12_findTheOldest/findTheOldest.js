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
      let personAge = 0;
      let oldestPerson = people[0];

      for(person of people){
        let personBirth = Object.getOwnPropertyDescriptor(person, 'yearOfBirth').value;
        let personDeath = Object.getOwnPropertyDescriptor(person, 'yearOfDeath').value; 
        
        personAge = personDeath - personBirth;

        if (personAge > oldestAge){
          oldestAge = personAge;
          console.log(oldestAge)
          oldestPerson = person;
        } 
      }
      return oldestPerson;

// Do not edit below this line
module.exports = findTheOldest;
