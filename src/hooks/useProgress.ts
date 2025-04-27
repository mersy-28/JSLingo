// src/hooks/useProgress.ts

import { useState, useEffect } from "react";

const PROGRESS_KEY = "jslingo_progress";

export function useProgress() {
  const [completedLessons, setCompletedLessons] = useState<number[]>([]);

  // Load progress when the app starts
  useEffect(() => {
    const stored = localStorage.getItem(PROGRESS_KEY);
    if (stored) {
      setCompletedLessons(JSON.parse(stored));
    }
  }, []);

  // Save progress whenever it changes
  useEffect(() => {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(completedLessons));
  }, [completedLessons]);

  const markLessonCompleted = (lessonId: number) => {
    if (!completedLessons.includes(lessonId)) {
      setCompletedLessons([...completedLessons, lessonId]);
    }
  };

  return {
    completedLessons,
    markLessonCompleted,
  };
}