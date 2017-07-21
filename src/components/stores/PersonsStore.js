let PersonsStore = {
  data: [
    { id: 1, name: 'John', surname: 'Gates', age: 55},
    { id: 2, name: 'Bill', surname: 'Gates', age: 65},
    { id: 3, name: 'Joe', surname: 'Bush', age: 35},
    { id: 4, name: 'George', surname: 'Bush', age: 64},
    { id: 5, name: 'Hillary', surname: 'Clinton', age: 58},
    { id: 6, name: 'Marry', surname: 'Clinton', age: 28},
  ],
  
  lastId: 6,
  
  findAll: function() {
    return this.data;
  },

  find: function(data) {
    return this.data.filter((person) => {
      let result = person.name.search(new RegExp(data.name, 'i')) >= 0 &&
        person.surname.search(new RegExp(data.surname, 'i')) >= 0;
      if (data.age) {
        result = result && parseInt(person.age, 10) === parseInt(data.age, 10);
      }
      return result;
    });
  },
  
  /**
  * @returns array of found persons
  */
  findByName: function(name) {
    return this.data.filter((person) => {
      return person.name.includes(name) || person.surname.includes(name);
    });
  },
  
  /**
  * @returns object of found person
  */
  findById: function(id) {
    const found = this.data.filter((person) => {
      return parseInt(person.id, 10) === parseInt(id, 10);
    });
    return found[0];
  },
  
  add: function(person) {
    person.id = ++this.lastId;
    this.data.push(person);
  },
  
  edit: function(id, data) {
    this.data.map((person, i) => {
      if (person.id === parseInt(id, 10)) {
        this.data[i] = data;
      }            
      return person;
    });
  },
  
  delete: function(id) {
    let indexToDelete = -1;
    this.data.map((person, i) => {
      if (person.id === parseInt(id, 10)) {
        console.log('Index to delete: ', i, person);
        indexToDelete = i;
      }
      return person;
    });
    if (indexToDelete > -1) {
      this.data.splice(indexToDelete, 1);
    }
  }
}

export default PersonsStore;