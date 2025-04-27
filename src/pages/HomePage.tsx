import React, { useState } from 'react';
import LessonCard from '../components/LessonCard';
import ProgressBar from '../components/ProgressBar';
import { lessons } from '../data/lessons';
import { useUserProgress } from '../context/UserProgressContext';
import { Flame, Award, Rocket, Coffee } from 'lucide-react';

const HomePage: React.FC = () => {
  const { completedLessons, streak, xp, level } = useUserProgress();
  const [filter, setFilter] = useState<'all' | 'beginner' | 'intermediate' | 'advanced'>('all');

  const filteredLessons = filter === 'all' 
    ? lessons 
    : lessons.filter(lesson => lesson.difficulty.toLowerCase() === filter);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero section */}
      <section className="mb-12">
        <div className="bg-gradient-to-r from-primary to-primary-dark rounded-xl p-8 text-white">
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="md:w-2/3 mb-6 md:mb-0">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Learn JavaScript the fun way!
              </h1>
              <p className="text-lg opacity-90 mb-6">
                Master JavaScript through interactive lessons, just like learning a new language.
              </p>
              <div className="flex gap-4">
                <ProgressBar 
                  value={completedLessons.length} 
                  max={lessons.length}
                  label="Overall progress" 
                />
              </div>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <Flame className="h-6 w-6 text-orange-300 mr-2" />
                  <span className="text-lg font-semibold">{streak} day streak</span>
                </div>
                <div className="flex items-center mb-4">
                  <Award className="h-6 w-6 text-yellow-300 mr-2" />
                  <span className="text-lg font-semibold">Level {level}</span>
                </div>
                <div className="flex items-center">
                  <Rocket className="h-6 w-6 text-blue-300 mr-2" />
                  <span className="text-lg font-semibold">{xp} XP earned</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Daily goal section */}
      <section className="mb-12">
        <div className="bg-orange-50 rounded-xl p-6 border border-orange-100">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center">
              <div className="bg-orange-100 p-3 rounded-full mr-4">
                <Coffee className="h-6 w-6 text-orange-500" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Daily Goal</h2>
                <p className="text-gray-600">Complete 1 more lesson today to maintain your streak!</p>
              </div>
            </div>
            <button className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-colors">
              Start Lesson
            </button>
          </div>
        </div>
      </section>
      
      {/* Lessons section */}
      <section>
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 md:mb-0">Lessons</h2>
          
          <div className="flex gap-2 overflow-x-auto pb-2">
            <button 
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === 'all' 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All
            </button>
            <button 
              onClick={() => setFilter('beginner')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === 'beginner' 
                  ? 'bg-green-500 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Beginner
            </button>
            <button 
              onClick={() => setFilter('intermediate')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === 'intermediate' 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Intermediate
            </button>
            <button 
              onClick={() => setFilter('advanced')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === 'advanced' 
                  ? 'bg-purple-500 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Advanced
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLessons.map((lesson, index) => (
            <LessonCard key={lesson.id} lesson={lesson} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;