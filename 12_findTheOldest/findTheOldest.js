
    const findTheOldest = function(people) {
      let oldestAge = 0;
      let personAge = 0;
      let oldestPerson;

      for(person of people){
        // Checks if person obj has a yearOfDeath, if not then creates a new property with todays date.
        
        if(Object.getOwnPropertyDescriptor(person, 'yearOfDeath') == undefined){
          const today = new Date();
          const year = today.getUTCFullYear();
          
          person.yearOfDeath = year;
        }

        let personBirth = Object.getOwnPropertyDescriptor(person, 'yearOfBirth').value;
        let personDeath = Object.getOwnPropertyDescriptor(person, 'yearOfDeath').value; 
        
        personAge = personDeath - personBirth;

        if (personAge > oldestAge){
          oldestAge = personAge;
          oldestPerson = person;
        } 
      }
      return oldestPerson;
    }
// Do not edit below this line
module.exports = findTheOldest;
