import logo from './logo.svg';
import './App.css';
import { Button, Rating } from '@mui/material';
import Newspaper from './Component/Newspaper/Newspaper';

function App() {
  return (
    <div className="App">
      <Button variant="contained">My First Button</Button>
      <Rating name="size-large" defaultValue={3} size="large" />
      <Newspaper></Newspaper>
    </div>
  );
}

export default App;
