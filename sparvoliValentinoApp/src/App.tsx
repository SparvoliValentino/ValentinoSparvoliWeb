import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SparvoliValentino from './views/SparvoliValentino';
import Header from './Components/Header';
const App: React.FC = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/ValentinoSparvoliWeb' element={<SparvoliValentino />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
