/*Object:
         Object is a collection of attributes or property.
         Object is a collection of key and their values.


         */

         const person={
             name:"Dileep",
            age:26,
            address:"Bangalore"
         }

         //console.log(person);//{ name: 'Dileep', age: 26, address: 'Bangalore' }

         //   Access of object in two types
         //.(dot) Method  and Braket([""])method 
         console.log(person.name);//Dileep
         console.log(person["age"]);//26

         person.name="Dileep Kumar";
         //console.log(person.name);//Dileep Kumar

         //Object.freeze()
         Object.freeze(person);//don't changes values 
         person.name="Dileep kumar mandal"

         //console.log(person["name"]);




