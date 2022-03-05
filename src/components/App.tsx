import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { NavBar } from './layout/NavBar';
import { Content } from './layout/Content';

export const App = (): JSX.Element => {
    const title = 'Pokemon';
    return (
        <div className="App">
            <NavBar title={title} />
            <div className="container">
                <Content />
            </div>
        </div>
    );
};

export default App;
