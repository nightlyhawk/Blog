import Login from './Login';
// import Nav from './Nav';
import Nav2 from './Nav2';
import SignUp from './SignUp';
import Home from './Home';
import { Route, Routes } from 'react-router-dom';

function App() {


  return (

    <div className="App">
      {/* <Nav /> */}
      <Nav2 />
      <div className="container">
        <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/SignUp" element={ <SignUp /> } />
        <Route path="/Home" element={ <Home /> } />
        </Routes>
      </div>
    </div>
  );
}

export default App;
// import React, { useState, useContext } from 'react';
// import ReactDOM from 'react-dom';

// // const languages = ['JavaScript', 'Python'];

// const LangContext = React.createContext({})
// function App() {
//   // implement Context here so can be used in child components
//   const[languages, setLanguages] = useState('JavaScript')
// const ogg = () => {
//   languages == 'JavaScript'?
//   setLanguages('Python')
//   : setLanguages('JavaScript')
//  }
 
//   return (
//     <LangContext.Provider value = {{ languages, ogg }}>
//     <MainSection />
//     </LangContext.Provider>
//   );
// }


// function MainSection() {
//     const { languages } = useContext(LangContext);
//     const { ogg } = useContext(LangContext);
//   return (
//      <div>
//        <p id="favoriteLanguage">Favorite programing language: {languages}</p>
//        <button id="changeFavorite" onClick = {ogg}>Toggle language</button>
//      </div>
    
//   )
// }

// export default App;
