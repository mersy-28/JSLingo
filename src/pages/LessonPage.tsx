import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';
import { lessons } from '../data/lessons';
import { exercises } from '../data/exercises';
import { Lesson, Exercise } from '../types';
import ExerciseCard from '../components/ExerciseCard';
import ProgressBar from '../components/ProgressBar';
import { useUserProgress } from '../context/UserProgressContext';
import CodeBlock from '../components/CodeBlock';
import ReactDOM from 'react-dom/client';
import confetti from 'canvas-confetti';

const LessonPage: React.FC = () => {
  const { lessonId } = useParams<{ lessonId: string }>();
  const navigate = useNavigate();
  const { completeLession, addXp, completedLessons } = useUserProgress();
  
  const [currentLesson, setCurrentLesson] = useState<Lesson | null>(null);
  const currentLessonIndex = lessons.findIndex(l => l.id === currentLesson?.id);
  const nextLesson = lessons[currentLessonIndex + 1];
  const isLessonAlreadyCompleted = currentLesson ? completedLessons.includes(currentLesson.id) : false;
  const [lessonExercises, setLessonExercises] = useState<Exercise[]>([]);
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [completedExercises, setCompletedExercises] = useState<number[]>([]);
  const [lessonCompleted, setLessonCompleted] = useState(false);
  
  useEffect(() => {
    if (lessonId) {
      const lesson = lessons.find(l => l.id === lessonId);
      if (lesson) {
        setCurrentLesson(lesson);
        const lessonExercises = exercises.filter(e => e.lessonId === lessonId);
        setLessonExercises(lessonExercises);
        setCurrentExerciseIndex(0);
        setCompletedExercises([]);
      } else {
        navigate('/');
      }
    }
  }, [lessonId, navigate]);

  const handleExerciseComplete = () => {
    if (!currentExerciseIndex.toString()) return;
  
    setCompletedExercises(prev => [...prev, currentExerciseIndex]);
    addXp(10);
  
    if (currentExerciseIndex < lessonExercises.length - 1) {
      setCurrentExerciseIndex(currentExerciseIndex + 1);
    }
  
    if (completedExercises.length + 1 === lessonExercises.length) {
      if (currentLesson) {
        completeLession(currentLesson.id);
        addXp(50);
        setLessonCompleted(true); // ✅ manually mark lesson as completed
    
        // 🎉 Fire confetti
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        });
      }
    }
  };

  const goToPreviousExercise = () => {
    if (currentExerciseIndex > 0) {
      setCurrentExerciseIndex(prev => prev - 1);
    }
  };

  const goToNextExercise = () => {
    if (currentExerciseIndex < lessonExercises.length - 1) {
      setCurrentExerciseIndex(prev => prev + 1);
    }
  };

  const processLessonContent = (content: string) => {
    // Replace code blocks with CodeBlock component
    const processedContent = content.replace(
      /<div class="bg-gray-900 rounded-lg p-4 mb-6">\s*<pre class="text-white"><code class="language-javascript">([\s\S]*?)<\/code><\/pre>\s*<\/div>/g,
      (_, code) => `<div data-code="${encodeURIComponent(code)}"></div>`
    );

    return processedContent;
  };

  useEffect(() => {
    if (currentLesson) {
      const container = document.querySelector('.lesson-content');
      if (container) {
        const codeBlocks = container.querySelectorAll('div[data-code]');
        codeBlocks.forEach((block) => {
          const code = decodeURIComponent(block.getAttribute('data-code') || '');
          const root = document.createElement('div');
          block.replaceWith(root);
          const codeBlock = <CodeBlock code={code} />;
          ReactDOM.createRoot(root).render(codeBlock);
        });
      }
    }
  }, [currentLesson]);

  const currentExercise = lessonExercises[currentExerciseIndex];
  const allExercisesCompleted = completedExercises.length === lessonExercises.length;

  if (!currentLesson) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <p>Loading lesson...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="flex items-center mb-2">
          <button 
            onClick={() => navigate('/')}
            className="mr-3 p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 text-gray-600" />
          </button>
          <h1 className="text-2xl md:text-3xl font-bold">{currentLesson.title}</h1>
        </div>
        {isLessonAlreadyCompleted && (
          <div className="mt-2 text-green-600 flex items-center gap-2">
            <CheckCircle className="h-5 w-5" />
            <span>Lesson Completed</span>
          </div>
        )}
        <p className="text-gray-600 mb-4">{currentLesson.description}</p>
        <ProgressBar 
          value={completedExercises.length} 
          max={lessonExercises.length} 
          label="Lesson progress"
        />
      </div>

      <div className="mb-8">
        <div className="bg-white rounded-xl shadow-md overflow-hidden p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Lesson Content</h2>
          <div 
            className="prose max-w-none lesson-content"
            dangerouslySetInnerHTML={{ 
              __html: processLessonContent(currentLesson.content) 
            }} 
          />
        </div>
      </div>
      
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Exercises</h2>
          <div className="text-sm text-gray-600">
            {currentExerciseIndex + 1} of {lessonExercises.length}
          </div>
        </div>
        
        {lessonExercises.length > 0 && currentExercise ? (
          <ExerciseCard 
            key={currentExercise.id} // Add key prop to force re-render
            exercise={currentExercise}
            onComplete={handleExerciseComplete}
          />
        ) : (
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <p>No exercises found for this lesson.</p>
          </div>
        )}
      </div>
      
      <div className="flex flex-col md:flex-row justify-between gap-4 mt-8">
  <button
    onClick={goToPreviousExercise}
    disabled={currentExerciseIndex === 0}
    className={`px-4 py-2 rounded-md flex items-center justify-center gap-2 ${
      currentExerciseIndex === 0
        ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
    } transition-colors w-full md:w-auto`}
  >
    <ArrowLeft className="h-4 w-4" />
    Previous
  </button>

  {lessonCompleted || isLessonAlreadyCompleted ? (
  <div className="flex flex-col space-y-4 w-full md:w-auto">
    <button
      onClick={() => navigate('/')}
      className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
    >
      <CheckCircle className="h-4 w-4" />
      Lesson Completed - Return Home
    </button>
    {nextLesson && (
      <button
        onClick={() => navigate(`/lesson/${nextLesson.id}`)}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
      >
        Next Lesson →
      </button>
    )}
  </div>
) : (
  <button
    onClick={goToNextExercise}
    disabled={currentExerciseIndex === lessonExercises.length - 1}
    className={`px-4 py-2 rounded-md flex items-center justify-center gap-2 ${
      currentExerciseIndex === lessonExercises.length - 1
        ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
        : 'bg-primary text-white hover:bg-primary-dark'
    } transition-colors w-full md:w-auto`}
  >
    Next
    <ArrowRight className="h-4 w-4" />
  </button>
)}
</div>
    </div>
  );
};

export default LessonPage;