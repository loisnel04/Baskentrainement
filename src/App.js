import './App.css'
import Accueil from './components/accueil/accueil'
import Passe from './components/passe/passe'
import Shoot from './components/shoot/shoot'
import Dribble from './components/dribble/dribble'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/accueil' element={<Accueil />} />
          <Route path='/passe' element={<Passe/>} />
          <Route path='/shoot' element={<Shoot/>} />
          <Route path='/dribble' element={<Dribble/>} />
          <Route path='*' element={<Navigate to={'/accueil'} replace />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App