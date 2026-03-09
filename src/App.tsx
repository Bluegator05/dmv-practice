
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Quiz from './pages/Quiz';
import Flashcards from './pages/Flashcards';
import ReviewMode from './pages/ReviewMode';
import DrivingGame from './pages/DrivingGame';
import StudyGuide from './pages/StudyGuide';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/flashcards" element={<Flashcards />} />
          <Route path="/driving" element={<DrivingGame />} />
          <Route path="/review" element={<ReviewMode />} />
          <Route path="/study" element={<StudyGuide />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
