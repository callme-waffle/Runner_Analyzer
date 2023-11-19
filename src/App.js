import { BrowserRouter, Route, Routes } from 'react-router-dom';
import IndexPage from './pages/Index/index';
import LoginPage from './pages/Login';
import SettingPage from './pages/Setting';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/setting" element={ <SettingPage/> }/>
          <Route path="/login" element={ <LoginPage/> }/>
          <Route path="/" element={ <IndexPage/> }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
