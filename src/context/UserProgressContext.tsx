import React, { createContext, useContext, useState, useEffect } from 'react';

interface UserProgressContextType {
  completedLessons: string[];
  currentLessonId: string | null;
  streak: number;
  xp: number;
  level: number;
  lastCompletedDate: string | null;
  username: string;
  displayName: string;
  completeLession: (lessonId: string) => void;
  addXp: (amount: number) => void;
  updateProfile: (data: { username: string; displayName: string }) => void;
}

const UserProgressContext = createContext<UserProgressContextType | undefined>(undefined);

export const useUserProgress = () => {
  const context = useContext(UserProgressContext);
  if (context === undefined) {
    throw new Error('useUserProgress must be used within a UserProgressProvider');
  }
  return context;
};

interface UserProgressProviderProps {
  children: React.ReactNode;
}

export const UserProgressProvider: React.FC<UserProgressProviderProps> = ({ children }) => {
  const [completedLessons, setCompletedLessons] = useState<string[]>(() => {
    const saved = localStorage.getItem('jslingo-completed-lessons');
    return saved ? JSON.parse(saved) : [];
  });
  const [unlockedLessons, setUnlockedLessons] = useState<string[]>(["1"]); // Unlock Lesson 1 by default
  
  const [currentLessonId, setCurrentLessonId] = useState<string | null>(() => {
    const saved = localStorage.getItem('jslingo-current-lesson');
    return saved || 'js-basics-1';
  });
  
  const [streak, setStreak] = useState<number>(() => {
    const saved = localStorage.getItem('jslingo-streak');
    return saved ? parseInt(saved, 10) : 0;
  });
  
  const [xp, setXp] = useState<number>(() => {
    const saved = localStorage.getItem('jslingo-xp');
    return saved ? parseInt(saved, 10) : 0;
  });
  
  const [lastCompletedDate, setLastCompletedDate] = useState<string | null>(() => {
    return localStorage.getItem('jslingo-last-completed');
  });

  const [username, setUsername] = useState<string>(() => {
    const saved = localStorage.getItem('jslingo-username');
    return saved || '';
  });

  const [displayName, setDisplayName] = useState<string>(() => {
    const saved = localStorage.getItem('jslingo-display-name');
    return saved || '';
  });

  const level = Math.floor(xp / 100) + 1;

  useEffect(() => {
    if (lastCompletedDate) {
      const lastDate = new Date(lastCompletedDate);
      const today = new Date();
      const yesterday = new Date(today);
      yesterday.setDate(yesterday.getDate() - 1);
      
      if (lastDate < yesterday && lastDate.getDate() !== yesterday.getDate()) {
        setStreak(0);
      }
    }
  }, [lastCompletedDate]);

  useEffect(() => {
    localStorage.setItem('jslingo-completed-lessons', JSON.stringify(completedLessons));
    localStorage.setItem('jslingo-streak', streak.toString());
    localStorage.setItem('jslingo-xp', xp.toString());
    localStorage.setItem('jslingo-username', username);
    localStorage.setItem('jslingo-display-name', displayName);
    if (currentLessonId) {
      localStorage.setItem('jslingo-current-lesson', currentLessonId);
    }
    if (lastCompletedDate) {
      localStorage.setItem('jslingo-last-completed', lastCompletedDate);
    }
  }, [completedLessons, streak, xp, currentLessonId, lastCompletedDate, username, displayName]);

  const completeLession = (lessonId: string) => {
    if (!completedLessons.includes(lessonId)) {
      setCompletedLessons(prev => [...prev, lessonId]);
      
      const today = new Date().toISOString().split('T')[0];
      if (lastCompletedDate !== today) {
        setStreak(prev => prev + 1);
        setLastCompletedDate(today);
      }
      
      setCurrentLessonId(lessonId);
    }
  };

  const addXp = (amount: number) => {
    setXp(prev => prev + amount);
  };

  const updateProfile = (data: { username: string; displayName: string }) => {
    setUsername(data.username);
    setDisplayName(data.displayName);
  };

  const unlockLesson = (lessonId: string) => {
    if (!unlockedLessons.includes(lessonId)) {
      setUnlockedLessons(prev => [...prev, lessonId]);
    }
  };

  const value = {
    completedLessons,
    currentLessonId,
    streak,
    xp,
    level,
    lastCompletedDate,
    username,
    displayName,
    completeLession,
    addXp,
    updateProfile,
    unlockedLessons,
    unlockLesson
  };

  return (
    <UserProgressContext.Provider value={value}>
      {children}
    </UserProgressContext.Provider>
  );
};