import logo from './logo.svg';
import './App.css';
import users from "./users.json";
import {User} from "./components/User.jsx";
import React, {useState} from "react";
import {SearchBar} from "./components/SearchBar.jsx";

function App() {

  //used for finding out which name is selected
  const [selected, setSelected] = useState(null);

  //used as a controlled state of input
  const [search, setSearch] = useState("");

  return (
    <>
    
    <SearchBar search={search} setSearch={setSearch}/>

    {/* if the search is empty, all results should be displayed */}
    {/* if the search result has some value, the results are first filtered  */}
    {search === "" ?
      users.map((user, index) => (
        <User key={index} selected={selected} name={user.name} email={user.email} picture={user.picture} age={user.age} balance={user.balance} company={user.company} gender={user.gender} setSelected={setSelected}/>
      )) :
      users.filter(user => user.name.toLowerCase().includes(search.toLowerCase())).map((filteredUser, index) => (
        <User key={index} selected={selected} name={filteredUser.name} email={filteredUser.email} picture={filteredUser.pucture} age={filteredUser.age} balance={filteredUser.balance} company={filteredUser.company} gender={filteredUser.gender} setSelected={setSelected} />
      ))
    }

    </>
  );
}

export default App;
