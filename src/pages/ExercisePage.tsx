import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, AlertCircle } from 'lucide-react';
import { exercises } from '../data/exercises';
import { lessons } from '../data/lessons';
import { Exercise } from '../types';
import ExerciseCard from '../components/ExerciseCard';
import { useUserProgress } from '../context/UserProgressContext';

const ExercisePage: React.FC = () => {
  const { exerciseId } = useParams<{ exerciseId: string }>();
  const navigate = useNavigate();
  const { addXp } = useUserProgress();
  
  const [currentExercise, setCurrentExercise] = useState<Exercise | null>(null);
  const [lessonTitle, setLessonTitle] = useState('');

  useEffect(() => {
    if (exerciseId) {
      const exercise = exercises.find(e => e.id === exerciseId);
      if (exercise) {
        setCurrentExercise(exercise);
        
        // Find associated lesson title
        const lesson = lessons.find(l => l.id === exercise.lessonId);
        if (lesson) {
          setLessonTitle(lesson.title);
        }
      } else {
        // Exercise not found
        navigate('/');
      }
    }
  }, [exerciseId, navigate]);

  const handleExerciseComplete = () => {
    // Add XP for completing exercise
    addXp(10);
    
    // Navigate back to the lesson
    if (currentExercise) {
      navigate(`/lesson/${currentExercise.lessonId}`);
    } else {
      navigate('/');
    }
  };

  if (!currentExercise) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <p>Loading exercise...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <div className="flex items-center mb-2">
          <button 
            onClick={() => navigate(`/lesson/${currentExercise.lessonId}`)}
            className="mr-3 p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 text-gray-600" />
          </button>
          <div>
            <p className="text-sm text-gray-600">{lessonTitle}</p>
            <h1 className="text-2xl font-bold">{currentExercise.title}</h1>
          </div>
        </div>
      </div>

      <ExerciseCard 
        exercise={currentExercise}
        onComplete={handleExerciseComplete}
      />
      
      <div className="mt-8 p-4 bg-blue-50 rounded-md flex items-start">
        <AlertCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
        <p className="text-blue-700 text-sm">
          Need help? Remember you can use the "Show Hint" button to get a clue or review the lesson content for guidance.
        </p>
      </div>
    </div>
  );
};

export default ExercisePage;