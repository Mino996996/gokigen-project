import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {ExternalTextLink} from "./coponents/atoms/externalTextLink/externalTextLink";
import axios, {AxiosResponse} from "axios";

function App() {
  const [user, setUser] = useState<{ name: string; birth: string }>({name: 'Local', birth: '2021/04/10'});

  useEffect(() => {
    setTimeout(() => {
      axios.get("http://localhost:3001/")
        .then((res: AxiosResponse<Array<{ name: string; birth: string }>>) => {
          setUser(res.data[0])
        })
    }, 3000)
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          {user.name}
        </p>
        <p>
          {user.birth}
        </p>
        <button onClick={() => setUser({name: "Updated Man", birth: "2021/04/11"})}>Click to Update User</button>
        <ExternalTextLink text={"Learn React"} href={"https://reactjs.org"}/>
      </header>
    </div>
  );
}

export default App;
