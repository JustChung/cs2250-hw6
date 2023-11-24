import { Outlet, Link } from "react-router-dom";

const Home = () => {
    return (
    <>
        <h1>Home</h1>
        <div>Select a page to visit!</div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/tictactoe">Tick-Tac-Toe</Link>
          </li>
          <li>
            <Link to="/api">Api Exercise</Link>
          </li>
        </ul>
    </>
    );
  };
  
export default Home;