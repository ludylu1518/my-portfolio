import NavBar from './Components/navBar.jsx';
import {Outlet} from 'react-router-dom';

function App() {

    return (
        <>
            <NavBar />
            <h1>Testing</h1>
            <div id='content-body'>
                <Outlet />
            </div>
        </>
    )

}

export default App;