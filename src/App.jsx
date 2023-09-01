import NavBar from './Components/navBar.jsx';
import {Outlet} from 'react-router-dom';
import './Styles/style.css';

function App() {

    return (
        <>
            <NavBar />
            <div id='content-body'>
                <Outlet />
            </div>
        </>
    )

}

export default App;