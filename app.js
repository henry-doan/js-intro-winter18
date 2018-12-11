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