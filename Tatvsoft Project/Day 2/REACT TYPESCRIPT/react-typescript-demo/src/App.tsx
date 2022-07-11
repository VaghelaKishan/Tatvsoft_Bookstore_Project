import logo from './logo.svg'
import './App.css';
import { Greet } from './components/Greet'
import { Person } from './components/Person'
import { PersonList } from './components/PersonList';


function App() {
  const personName = {
    first :'kishan',
    last : 'vaghela',
  }

  const nameList=[
      {
        first :'kevin',
        last : 'vaghela',
      },
      {
        first :'kirtan',
        last : 'doshi',
      },
      {
        first :'nishit',
        last : 'kamani',
      },
    ]
    return (
      <div className="App">
        <Greet name='k' messageCount={21} isLoggedIn={false} />
        <Person name={personName} />
        <PersonList names={nameList} />
      </div>
    )
}

export default App;


// //app 1

// import './App.css';
// import { Greet } from './components/Greet'
// import { Heading } from './components/Heading'
// import { Oscar }  from './components/Oscar'
// import { Status } from './components/Status'


// function App(){
//     return (
//     <div className='App'>
//         <Status status='error' />
//         <Heading>Placeholder text</Heading>
//         <Oscar>
//             <Heading>Oscar goes to leonardo Dicpario!</Heading>
//         </Oscar>
//         <Greet name='kdvaghela' messageCount={21} isLoggedIn={false} />
//     </div>
//     )
// }

// export default App


// //app2

// import './App.css'
// import { Button } from './components/Button'
// import { Input } from './components/Input'

// function App() {
//     return (
//     <div className='App'>
//         <Button handleClick={(event, id) => {
//             console.log('Button clicked', event, id)
//         }}
//         />
//         <Input value='' handleChange={(event) => console.log(event)} />
//     </div>
//     )

// }

// export default App




// state
// import './App.css'

// function App() {
//   return <div className='App'></div>
// }

// export default App

// import { type } from "@testing-library/user-event/dist/type"

// type StatusProps ={
//     status: 'loading' | 'success' | 'error'
// }


// export const Status = (props: StatusProps) =>
// {
//     let message
//     if(props.status === 'loading')
//     {
//         message = 'Loading...'
//     }
//      else if(props.status === 'success')
//     {
//         message = 'data fetched sucessful'
//     }
//      else if(props.status === 'error')
//     {
//         message = 'Error'
//     }
//     return( <div>
//         <h2>Status - {message}</h2>


//       </div>
//       )
// }
    //<Status status='loading' />



// //app3
// import { ThemeContextProvider } from "./components/context/ThemeContext"
// import { Box } from './components/context/Box'
// import './App.css'


// function App() {
//     return (
//     <div className="App">
//         <ThemeContextProvider>
//             <Box />
//         </ThemeContextProvider>
//     </div>
//     )
// }

// export default App

// //app4
// import { UserContextProvider } from "./components/context/UserContext"
// import { User } from "./components/context/User"
// import './App.css'


// function App() {
//     return <div className='App'>
//         <UserContextProvider>
//             <User />
//         </UserContextProvider>
//     </div>
// }

// export default App


// //App 5 auth
// import './App.css'
// import { Private } from "./components/auth/Private"
// import { Profile } from "./components/auth/Profile"

// function App() {
//   return <div className='App'>
//     <Private isLoggedIn={true} component={Profile} />
//   </div>
// }

// export default App



// //App 6 restriction
// import './App.css'
// import { RandomNumber } from "./components/restriction/RandomNumber"


// function App() {
//   return <div className='App'>
//     <RandomNumber value={10} isPositive />
//   </div>
// }

// export default App


// //App 7 template literals
// import './App.css'
// import { Toast } from './components/templateliterals/Toast'

// function App(){
//   return(
//     <div className='App'>
//       <Toast position='center' />
//     </div>
//   )
// }

// export default App