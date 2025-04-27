import React, { useState } from 'react';
import { Award, Trophy, BarChart2, Zap, BookOpen, Calendar, Flag, User, Save } from 'lucide-react';
import ProgressBar from '../components/ProgressBar';
import { useUserProgress } from '../context/UserProgressContext';
import { lessons } from '../data/lessons';

const ProfilePage: React.FC = () => {
  const { 
    streak, 
    xp, 
    level, 
    completedLessons, 
    lastCompletedDate,
    username,
    displayName,
    updateProfile
  } = useUserProgress();
  
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    username: username,
    displayName: displayName
  });

  const daysSinceStart = lastCompletedDate 
    ? Math.floor((new Date().getTime() - new Date(lastCompletedDate).getTime()) / (1000 * 3600 * 24)) + 1
    : 0;
  
  const xpForNextLevel = level * 100;
  const xpProgress = Math.min(xp - ((level - 1) * 100), xpForNextLevel);
  
  const achievements = [
    {
      id: 'first-lesson',
      title: 'First Step',
      description: 'Complete your first lesson',
      icon: <Flag className="h-6 w-6 text-green-500" />,
      unlocked: completedLessons.length > 0
    },
    {
      id: 'three-day-streak',
      title: 'Getting Started',
      description: 'Maintain a 3-day streak',
      icon: <Zap className="h-6 w-6 text-yellow-500" />,
      unlocked: streak >= 3
    },
    {
      id: 'level5',
      title: 'Knowledge Seeker',
      description: 'Reach level 5',
      icon: <BookOpen className="h-6 w-6 text-blue-500" />,
      unlocked: level >= 5
    },
    {
      id: 'all-beginner',
      title: 'Beginner Master',
      description: 'Complete all beginner lessons',
      icon: <Trophy className="h-6 w-6 text-purple-500" />,
      unlocked: lessons
        .filter(lesson => lesson.difficulty === 'Beginner')
        .every(lesson => completedLessons.includes(lesson.id))
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile(formData);
    setIsEditing(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Your Profile</h1>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
        >
          {isEditing ? 'Cancel' : 'Edit Profile'}
        </button>
      </div>
      
      {isEditing ? (
        <div className="bg-white rounded-xl shadow-md mb-8">
          <form onSubmit={handleSubmit} className="p-6">
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                Username
              </label>
              <input
                type="text"
                id="username"
                value={formData.username}
                onChange={(e) => setFormData(prev => ({ ...prev, username: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Enter username"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="displayName" className="block text-sm font-medium text-gray-700 mb-1">
                Display Name
              </label>
              <input
                type="text"
                id="displayName"
                value={formData.displayName}
                onChange={(e) => setFormData(prev => ({ ...prev, displayName: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Enter display name"
              />
            </div>
            
            <button
              type="submit"
              className="w-full px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors flex items-center justify-center gap-2"
            >
              <Save className="h-4 w-4" />
              Save Changes
            </button>
          </form>
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-md mb-8 p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-primary text-white p-4 rounded-full">
              <User className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">{displayName || 'Set your display name'}</h2>
              <p className="text-gray-600">@{username || 'username'}</p>
            </div>
          </div>
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left column - Stats */}
        <div className="md:col-span-2">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-6">Your Progress</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Calendar className="h-5 w-5 text-gray-500 mr-2" />
                    <h3 className="text-lg font-medium">Learning Streak</h3>
                  </div>
                  <p className="text-3xl font-bold text-primary">{streak} days</p>
                  <p className="text-sm text-gray-600 mt-1">Keep it going!</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <BarChart2 className="h-5 w-5 text-gray-500 mr-2" />
                    <h3 className="text-lg font-medium">Days Active</h3>
                  </div>
                  <p className="text-3xl font-bold text-blue-500">{daysSinceStart}</p>
                  <p className="text-sm text-gray-600 mt-1">Since you started</p>
                </div>
              </div>
              
              <div className="mb-8">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <Award className="h-5 w-5 text-yellow-500 mr-2" />
                    <h3 className="text-lg font-medium">Level {level}</h3>
                  </div>
                  <span className="text-sm text-gray-600">{xpProgress}/{xpForNextLevel} XP to next level</span>
                </div>
                <ProgressBar value={xpProgress} max={xpForNextLevel} />
              </div>
              
              <div className="mb-8">
                <div className="flex items-center mb-2">
                  <BookOpen className="h-5 w-5 text-gray-500 mr-2" />
                  <h3 className="text-lg font-medium">Lessons Completed</h3>
                </div>
                <ProgressBar 
                  value={completedLessons.length} 
                  max={lessons.length} 
                  label="Overall progress" 
                />
                <div className="flex justify-between mt-4">
                  <div>
                    <p className="text-2xl font-bold text-primary">{completedLessons.length}</p>
                    <p className="text-sm text-gray-600">Lessons completed</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-orange-500">{lessons.length - completedLessons.length}</p>
                    <p className="text-sm text-gray-600">Lessons remaining</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right column - Achievements */}
        <div>
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-6">Achievements</h2>
              
              <div className="space-y-4">
                {achievements.map(achievement => (
                  <div 
                    key={achievement.id}
                    className={`p-4 rounded-lg border ${
                      achievement.unlocked 
                        ? 'border-green-200 bg-green-50' 
                        : 'border-gray-200 bg-gray-50 opacity-70'
                    }`}
                  >
                    <div className="flex items-center">
                      <div className={`p-2 rounded-full mr-3 ${
                        achievement.unlocked ? 'bg-white' : 'bg-gray-200'
                      }`}>
                        {achievement.icon}
                      </div>
                      <div>
                        <h3 className={`font-medium ${
                          achievement.unlocked ? 'text-gray-900' : 'text-gray-600'
                        }`}>
                          {achievement.title}
                        </h3>
                        <p className="text-sm text-gray-600">{achievement.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;