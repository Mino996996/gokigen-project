import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {ExternalTextLink} from "./coponents/atoms/externalTextLink/externalTextLink";
import axios, {AxiosResponse} from "axios";

type User = { name: string; birth: string };

function App() {
  const [user, setUser]: [User | null, ((value: (((prevState: User|null) => User) | User)) => void)] = useState<User | null>(null);

  const getNetworkUser = () => axios.get("http://localhost:3001/")
    .then((res: AxiosResponse<Array<User>>) => setUser(res.data[0]))
    .catch(() => {
      setUser({name: 'Network Error', birth: 'error'})
    })

  useEffect(() => {
    (async () => {
      await getNetworkUser()
    })()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" className="h-72 pointer-events-none"/>
        {user &&
          <>
            <p>
              {user.name}
            </p>
            <p>
              {user.birth}
            </p>
          </>
        }
        <button onClick={getNetworkUser}>Click to Update User</button>
        <ExternalTextLink text={"Learn React"} href={"https://reactjs.org"}/>
      </header>
    </div>
  );
}

export default App;
