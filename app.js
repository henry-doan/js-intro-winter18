// single comment
/* 
  multi 
  line comment
*/

// data types
/*
string
float
integer
boolean
null
undefined
Object key, value pairs
Date
Wed Jan 27 2016 11:56:54 GMT-0700 (MST)
*/



// console.log('Helloworld')

// // operator
// console.log(1 + 1)
// console.log(1 - 1)
// console.log(1 * 1)
// console.log(1 / 1)
// console.log(Math.pow(2,3))
// console.log(((2 + 3) * 6) - 1 * 5)

// Comparators, always return true or false

// console.log( 4 > 2)
// <
// <=
// >=

// = assignment
// ==
// ===

// !=

// &&
//   both sides to be true
// ||
//  one side has to be true

// Variables

// var name = 'Bob'
// camel case
// letter $ _
// case sensitive
// cannot have them be reserve words
// var lastName = 'marley'

// var balance = 1000
// balance++
// balance--
// balance+= 1
// balance-= 1
// console.log(balance)

// Strings
// var greeting = "hello"
// var planet = "world"

// console.log(greeting + planet)
// console.log(greeting + 32)
// console.log(greeting + 3/2)
// console.log(greeting + "Name: \t World")

// console.log(greeting.length)
// console.log(greeting.length > planet.length)
// console.log(greeting.charAt(2))


// var num = Number("1.9723424234")

// console.log(num)
// console.log(parseInt('1.A'))
// console.log(parseFloat('1.2342'))
// console.log(num.toString())

// console.log(num.toFixed(2))
// console.log(num.toPrecision(2))

// Math.random()
// console.log((Math.random() * 7).toPrecision(2))
// console.log(Math.min(2, 1, -2, 12, 23))
// console.log(Math.max(2, 1, -2, 12, 23))
// console.log(Math.round(3.14))
// console.log(Math.floor(3.74))
// console.log(Math.ceil(3.7))
// console.log(Math.PI)
// console.log(Math.E)

// var arr = ["Marc", "Kira", "Henry"]
// console.log(arr[0])
// console.log(arr.indexOf("Kira"))
// console.log(arr.join(" and "))
// console.log(arr.includes("Marc"))
// << ruby way
// console.log(arr.push("green"))
// console.log(arr)
// console.log(arr.unshift("red"))
// console.log(arr)
// console.log(arr.pop())
// console.log(arr)

// console.log(arr.slice(1))
// console.log(arr)

// console.log(arr.length)

// console.log(arr.reverse())
// for(var i = 0; i < arr.length; i++) {
//   console.log(arr[i])
// }

// arr.forEach( function(element) {
//   console.log(element)
// })

// map

// arr.map( function(a) {
//   return a
// })

// arr.filter( function(a) {
//   console.log(a)
// })

// arr.reduce(function(a, num) {
//   return a + num
// })

// Object
 // - Hash key value pairs { }
 // - Json key value pairs
 // - Instantied Objects
 //    var person = Person.new()

// var person = { name: "bob", age: 36 }
// console.log(person.name)
// console.log(person['name'])

// console.log(person.name = 'craig')


// var people = {
//   name: ['bob', 'joe', 'susie', 'jane']
//   ages: [2,3,4,5,6]
// }

// var cars = {
//   cars: [
//     { make: 'ford', price: 12323 },
//     { make: 'fadsford', price: 2312323 }
//   ]
// }

// JSON 
// Javascript Object Notation
// {
//   "firstName": "john",
//   "lastName": "wayne"
// }

// var person = JSON.parse(object)

// console.log()

// debugger


var pDemo = document.getElementById("demo")
  var imageSrc = document.getElementById("img")

  pDemo.innerHTML = "hello world"
  // document.getElementsByClassName("demo2").innerHTML = "HAHAH"
  // document.getElementByTagName("p")

  imageSrc.src = "https://images.unsplash.com/photo-1544264883-8decbfc368de?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
  imageSrc.src = "https://images.unsplash.com/photo-1544307401-50b16edb5535?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
 
  pDemo.style.color = "red"

  // Event handlers
  // onclick=js
  // element.addEventListener(event, function, useCapture)
  // element.addEventListener("click" function() {
  //   do something
  // })

// element.addEventListener("click", myFunction)

//     function myFunction() {
//       do something
//     }
  // var colors = ["red", "#0DFF9A", "blue", "orange"]
  // var btn = document.getElementById("btn")

  // btn.addEventListener("click", changeColor)
  // function changeColor() {
  //   document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
  // }



  // Scope 

  // var foo = 'bar'; // global

  // function someFunction(params1, params2) { // params1 and 2 are local 
  //   var bar = 'foo' // local
  // }

  // function myFunction() {
  //   // debugger
  //   console.log(bar) //error
  //   console.log(foo) // 'bar'
  // }

  // function whatIsThis() {
  //   baz = "what variable is this?"
  // }

  // // console.log(baz)

  // whatIsThis()

  // console.log(baz)

  // myFunction()

  // object

  // datatypes
  //   string, Booleans, numbers, null, undefined, symbol

  // arrays, hashes, function, classes

  // window object what the user sees
    // window
        // global
        // function calls
  var num = 23
  console.log(this.num)
  console.log(this)

  var person = {
    firstName: 'bob',
    lastName: 'smith',
    func: function() {
      return this.firstName + " " + this.lastName
    }
  }

  console.log(person.func())