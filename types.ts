export interface Activity {
  id: string;
  title: string;
  description: string;
  questions?: string[];
}

export interface Lesson {
  id: string;
  title: string;
  objectives: string[];
  theory: string; // Supports Markdown-like structure in rendering if needed, or just plain text paragraphs
  methodology: string;
  activities: Activity[];
  reflectionQuestions: string[];
}

export interface Bimester {
  id: number;
  title: string;
  lessons: Lesson[];
}

export interface Grade {
  id: number;
  title: string;
  description: string;
  color: string;
  bimesters: Bimester[];
}

export interface StudentResponse {
  studentName: string;
  answers: Record<string, string>; // Key is activity ID or question index
}