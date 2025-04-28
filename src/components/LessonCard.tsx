import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Lock } from 'lucide-react';
import { Lesson } from '../types';
import { useUserProgress } from '../context/UserProgressContext';

interface LessonCardProps {
  lesson: Lesson;
  index: number;
  lessons: Lesson[];
}

const LessonCard: React.FC<LessonCardProps> = ({ lesson, index, lessons }) => {
  const { completedLessons } = useUserProgress();
  
  const isCompleted = completedLessons.includes(lesson.id);
  const isFirstLesson = index === 0;
  const previousLesson = index > 0 ? lessons[index - 1] : null;
  const isPreviousLessonCompleted = previousLesson ? completedLessons.includes(previousLesson.id) : false;

  const isAvailable = isFirstLesson || isPreviousLessonCompleted || isCompleted;

  return (
    <Link
      to={isAvailable ? `/lesson/${lesson.id}` : '#'}
      className={`group relative flex flex-col overflow-hidden rounded-xl ${
        isAvailable 
          ? 'bg-white hover:shadow-md transform hover:-translate-y-1 cursor-pointer' 
          : 'bg-gray-100 cursor-not-allowed'
      } shadow transition-all duration-300`}
      onClick={(e) => !isAvailable && e.preventDefault()}
    >
      {/* Card content */}
      <div className="p-6">
        <div 
          className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
            isCompleted ? 'bg-green-100' : 'bg-primary-light'
          }`}
        >
          {isCompleted ? (
            <CheckCircle className="h-6 w-6 text-green-500" />
          ) : (
            <span className={`text-lg font-bold ${isAvailable ? 'text-primary' : 'text-gray-400'}`}>
              {index + 1}
            </span>
          )}
        </div>
        
        <h3 className={`text-lg font-semibold mb-2 ${!isAvailable && 'text-gray-400'}`}>
          {lesson.title}
        </h3>
        
        <p className={`text-sm ${isAvailable ? 'text-gray-600' : 'text-gray-400'}`}>
          {lesson.description}
        </p>
        
        <div className="mt-4 flex items-center gap-2">
          <div className={`px-2 py-1 rounded-full text-xs ${
            isAvailable ? 'bg-blue-100 text-blue-600' : 'bg-gray-200 text-gray-400'
          }`}>
            {lesson.difficulty}
          </div>
          <div className={`px-2 py-1 rounded-full text-xs ${
            isAvailable ? 'bg-purple-100 text-purple-600' : 'bg-gray-200 text-gray-400'
          }`}>
            {lesson.exercises} exercises
          </div>
        </div>
      </div>
      
      {/* Locked overlay */}
      {!isAvailable && (
        <div className="absolute inset-0 bg-gray-200 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-full p-2 shadow">
            <Lock className="h-6 w-6 text-gray-400" />
          </div>
        </div>
      )}
      
      {/* Progress indicator */}
      {isCompleted && (
        <div className="absolute top-3 right-3">
          <div className="bg-green-500 text-white rounded-full p-1">
            <CheckCircle className="h-5 w-5" />
          </div>
        </div>
      )}
      {isAvailable && !isCompleted && (
        <div className="absolute top-3 left-3 animate-pulse">
          <div className="bg-blue-500 text-white rounded-full px-2 py-1 text-xs font-semibold shadow">
            Unlocked!
          </div>
        </div>
      )}
    </Link>
  );
};

export default LessonCard;