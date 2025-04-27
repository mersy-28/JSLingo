export interface Lesson {
  id: string;
  title: string;
  description: string;
  difficulty: string;
  exercises: number;
  content: string;
}

export interface Exercise {
  id: string;
  lessonId: string;
  title: string;
  description: string;
  hint: string;
  initialCode: string;
  testFunction: string;
}