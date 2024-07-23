import React, {Component} from 'react';
import Personne from './Personne';
import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


// class App extends Component{
//     render(){
//         return <h1>Hello world !!</h1>;
//     }
// }

class App extends Component{
    render(){
        return(
            <>
            <Personne nom ="Paul" age="30" sexe="Homme"/>
            <Personne nom ="Pierre" age="25" sexe="Homme"/>
            <Personne nom ="Sophie" age="40" sexe="Femme"/>
            </>
        );
    }
}

export default App;
