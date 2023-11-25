import { BrowserRouter, Route, Routes } from 'react-router-dom';
import IndexPage from './pages/Index';
import LoginPage from './pages/Login';
import SettingPage from './pages/Setting';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/settings/*" element={ <SettingPage/> }/>
          <Route path="/login" element={ <LoginPage/> }/>
          <Route path="/*" element={ <IndexPage/> }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
