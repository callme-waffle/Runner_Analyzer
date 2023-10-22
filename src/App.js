import { BrowserRouter, Route, Routes } from 'react-router-dom';
import IndexPage from './pages/index';
import LoginPage from './pages/login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={ <LoginPage/> }/>
          <Route path="/" element={ <IndexPage/> }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
