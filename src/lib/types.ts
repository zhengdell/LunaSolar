export interface Flashcard {
  id: string;
  term: string;
  definition: string;
}

export interface StudySet {
  id: string;
  title: string;
  description: string;
  flashcards: Flashcard[];
} 