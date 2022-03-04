import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { NavBar } from './layout/NavBar';
import { Content } from './layout/Content';

export const App = (): JSX.Element => {
    return (
        <div className="App">
            <NavBar />
            <div className="container">
                <Content />
            </div>
        </div>
    );
};

export default App;
