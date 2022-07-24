import React from 'react';
import './App.css';
import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import {
  BrowserRouter,
  Routes,
  Route,
 
} from "react-router-dom";
import SearchPage from './SearchPages'

function App() {
  return (
    <div className="app">


    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="search" element={<SearchPage/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    {/* <Router>
    <div>
     <Header />
      
      <Switch>
        <Route path="/search">
        <SearchPage/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
        
       
        
       
  
      
      <Footer/>
</div>
      </Router> */}
    
      
      
    </div>
  );
}

export default App;
 