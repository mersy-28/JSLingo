import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LessonPage from './pages/LessonPage';
import ExercisePage from './pages/ExercisePage';
import ProfilePage from './pages/ProfilePage';
import { UserProgressProvider } from './context/UserProgressContext';

function App() {
  return (
    <UserProgressProvider>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/lesson/:lessonId" element={<LessonPage />} />
            <Route path="/exercise/:exerciseId" element={<ExercisePage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </UserProgressProvider>
  );
}

export default App;