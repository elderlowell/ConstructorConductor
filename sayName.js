//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

  //code here
  function Person(name, age) {
    this.name = name,
    this.age = age
  };


//Now create three instances of Person with data you make up

  //code here
  var person1 = new Person('Name1', 1);
  var person2 = new Person('Name2', 2);
  var person3 = new Person('Name3', 3);



//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

  //code here
  Person.prototype.sayName = function(){
    alert(this.name);
  };
