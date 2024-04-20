import './App.css';
import Main from './components/main/Main';
import { Route, Routes } from 'react-router-dom';
import Kitob from '../src/components/navbar/kitob/Kitob'
import Kiyim from '../src/components/navbar/kiyim/Kiyim'
import Konstavar  from '../src/components/navbar/konstavar/Konstavar'
import Oquv from '../src/components/navbar/oquv/Oquv'


function App() {
  return (
    <div className="App">
     
      <Routes>
        <Route path="/" element={ <Main />} />
        <Route path="/Kitob" element={<Kitob />} />
        <Route path='/kiyim' element={<Kiyim />} />
        <Route path="/Konstavar" element={<Konstavar />} />
        <Route path='/Oquv' element={<Oquv />} />
      </Routes>
    </div>
  );
}

export default App;

