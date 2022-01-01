const foo = function (callback) {
  callback (10)
}
const logger = function (value){
  consolele.log(value)
}
foo (logger)*/

const arr = [1,2,3,4,10]
const callback = (item)=>item*2
const newArr = arr.map(callback)
console.log(newArr)*/

const arr =[10,20,30,40];
const logItem = (item) =>console.log(item);
arr.forEach(logItem)*/


     callback
const fnA = function(message, callback){
  console.log(message);
};
const fnB = function(){
  console.log('это лог при вызоые  fnB');
}
fnA('qwee, fnB')
                SORT
      const numbers = [1,9,6,2,3];
      numbers.sort(); сортировка по возрастанию
      console.log('numbers', numbers);

////Напишите функцию caculculateAverage()
//которая принимает произвольное количество
//аргументов и возвращает их среднее значение.
//Добавить проверку, что аргументы это числа.
let total = 0; let count=0
      const calculateAverage = (...args) =>{
        for(const arg of args){
        if(typeof arg !=='number'
        ){
          continue
        }
          total += arg
count +=1
        }
//console.log(args)
console.log(total / count)
      }
      calculateAverage(1,2,3,4,8,15, 'n', 20)*/
      const a = [121, 144, 19, 161, 19, 144, 19, 11];
 const b = [121, 14641, 20736, 361, 25921, 361, 20736, 361];

      function checkArray(array1, array2){
        if(array1.length !== array2.length)return false
        const sortArray1 = [...array1].sort((a, b)=>a-b)
        const sortArray2 = [...array2].sort((a, b) =>a-b)
        const sortArray1sqr = sortArray1.map(number => Math.pow(number,2))
            //console.log(sortArray1sqr)
        //console.log(sortArray2)
        for (let i = 0; i < sortArray2.length; i++) {
          if(sortArray2[i]!==sortArray1sqr[i]){
            return false
          }

        }
        return true
      }
      console.log(checkArray(a, b))


      const logins = ["mango", "poly", "ajajjaja"];
      const loginToFind =  "poly";
      let message = "";
      
      for (let i = 0; i < logins.length; i += 1){
        const login = logins[i];
        
        if(login !== loginToFind){
          message = `user ${loginToFind} not found`
        } else {
           message = `user ${loginToFind} found`
           break; 
        }
      }
      
      
      console.log(message) 
//Использование коллекций для разных типов ролей пользователей
     {const getUserRoleSettings = (role) =>{
        const roles = {
          admin: {},
          superAdmin: {},
          guest: {},
        };
        return roles[role]
      }
      const user = {
        name: 'Tom',
        email: 'gali@mail.com',
        role: 'guest',
      }
      const userRoleSettings = getUserRoleSettings(user.role);
    }
    const values = [1,2,3,4];
    const newValues = [];
  {for (var value of values){
    newValues.push(value);
  }
}
    console.log(value);


    //Превратить массив книг в обьект, ключи котрого является id каждой книги
    {
      const book = [
        {
          id: 1,
          title: 'Tom',
        },
        {
          id: 2,
         title: 'Tom',
        },
        {
          id: 3,
          title: 'Tom',
        },
        {
          id: 4,
          title: 'Tom',
        },
        {
          id: 5,
          title: 'Tom',
        },
      ];

      const transformToObject = (books) =>{
        return books.reduce((acc, item) =>{
          //acc ={}
          const {id} = item;
          acc[id] = item;

          return acc;
        },{})
      };

      const booksCollection = transformToObject(book);
      const searcheBook = booksCollection['1'];

      console.log(booksCollection);
      console.log(searcheBook);
    }

    //добавить в массив свойство id(пусть фйди равно имени) и отфильтровать по цене выше 200
    {
      const products = [{
        name: 'kiwi',
        price: 12334,
      },
      {
        name: 'banana',
        price: 555555,
      },
      {
        name: 'potato',
        price: 121
      },
      ];
      const productsWithId = products 
    .map((item)=>{
      const {name} = item
      return {
        id: name,
        ...item,
      }
    }).filter(item => item.price < 200);

    const foo = products.reduce((acc, item) => {
      //acc = [{  id,  name,  price}]
      const {name, price} = item;

      if(price <= 200){
        return acc
      }

      acc.push({
        id: name,
        ...item,
      });

      return acc
    }, [])
    console.log(productsWithId);
    console.log(foo)
    }

   /* //     Приватное свойство
    {
      class User {
        #password;
        #login;


        constructor(login, password) {
this.#login = login;
this.#password = password;
        }
      }

      const user = new User('login', 'qwerty');
      console.log(user.password)
    }*/
  
    /*//статика 

    {
      class User {
        static name = 'TTT'
        #password;
        #login;


        constructor(login, password) {
this.#login = login;
this.#password = password;
        }
      }

      const user = new User('login', 'qwerty');
      //console.log(user.password)
      console.log(User.name);
      console.log(user.name);

      console.log(Math)
    }*/


    
    {
      class NewMath {
        constructor() {
          throw new Error('message')
        }
        static max(...args) {
          return args.reduce((acc, item) => {
            if(acc < item) {
              return item;
            }
            
            return acc;
          })
        }

        static min() {}

        static pow() {}

        static random() {}
      }

      console.log(NewMath.max(2, 5, 10, 2));
    }

    // Замыкание (функция возвращает функцию, вся суть в лексическом окружении)
    /*{
      const square = (x,y) => {
        return x * y;
      };
    }*/


    
    {
      const square = (x) => {
        return (y) => {
          return x * y;
        }
      }

      const result = square(10)(20);
      const resultWidth = square(10);
      console.log(result);
      console.log(resultWidth(20));
      console.log(resultWidth(30));
      console.log(resultWidth(40));
    }

//задачка с рекурсией
{
    const add = (initialValue) => {
      let result = initialValue;

      const addRecurcive = (value) => {

      
      if(!value)return result;

      result += value;

      return addRecurcive;
    };

    return addRecurcive;
  };
    const res = add (1)(2)(3)(333)();
    console.log(res);
}