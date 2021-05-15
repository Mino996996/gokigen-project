import {useState} from 'react';
import './App.css';
import {ExternalTextLink} from "./coponents/atoms/externalTextLink/externalTextLink";
import axios, {AxiosResponse} from "axios";
import {useAsync, useToggle} from "react-use";
import {MoodSelector} from "./coponents/mols/MoodSelector";

type User = { name: string; birth: string };

function App() {
  const [user, setUser]: [User | null, ((value: (((prevState: User | null) => User) | User | null)) => void)] = useState<User | null>(null);
  const [clicked, toggleClicked] = useToggle(false);

  const getNetworkUser = () => axios.get("http://localhost:3001/")
    .then((res: AxiosResponse<Array<User>>) => setUser(res.data[0]))
    .catch(() => {
      setUser({name: 'Network Error', birth: 'error'})
    })

  useAsync(async () => {
    if (clicked) {
      window.alert('Clear user')
      setUser(null)
      return
    }

    await getNetworkUser()
  }, [clicked])

  return (
    <div className="App">
      <header>
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
        <button onClick={toggleClicked}>Click to Update User</button>
        <ExternalTextLink text={"Learn React"} href={"https://reactjs.org"}/>

        <div className={"max-w-2xl mx-auto"}>
          <MoodSelector/>
        </div>
      </header>
    </div>
  );
}

export default App;
