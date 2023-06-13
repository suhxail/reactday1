// function App () {
//   console.log('hello from component')

//   const now = new Date()
//     const a = 10;
//     const b = 20;
    
//     console.log(now, a+b );
  
//   return (
//     <div>
//       <p>Hello World, it is {now.toString()}</p>
//       <p>
//         {a} plus {b} is {a+b}
//       </p>
//      </div>
//    );
// }


// export default App;   

import React from 'react'

function Hello(props){
  console.log(props);
  return (
    // <p>Hello world</p>
    <h2>Hello {props.name}, you are {props.age} years old</h2>
  )
}

function App() {
  const age = 24
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name='suhail'age={10+13}/>
      <Hello name='suhxail' age={age}/>
      <Hello />
    </div>
  )
}

export default App
