import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';


function App() {
   

    return (
        <Router>
            <div className="app">
               
                <main>
                    <Routes>
                        <Route path="/" element={<Login />} />
                        {/* <Route path="/gallery" element={<Gallery />} /> */}
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;