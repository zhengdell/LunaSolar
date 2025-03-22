import { create } from 'zustand/vanilla';
import { createWithEqualityFn } from 'zustand/traditional';

interface Flashcard {
  id: string;
  term: string;
  definition: string;
}

interface StudySet {
  id: string;
  title: string;
  description: string;
  flashcards: Flashcard[];
}

interface StoreState {
  studySets: StudySet[];
  currentSet: StudySet | null;
  currentCardIndex: number;
  
  addStudySet: (set: StudySet) => void;
  setCurrentSet: (set: StudySet) => void;
  nextCard: () => void;
  previousCard: () => void;
}

export const useStore = createWithEqualityFn<StoreState>()((set) => ({
  studySets: [],
  currentSet: null,
  currentCardIndex: 0,
  
  addStudySet: (newSet) => set((state) => ({
    studySets: [...state.studySets, newSet]
  })),
  
  setCurrentSet: (studySet) => set({
    currentSet: studySet,
    currentCardIndex: 0
  }),
  
  nextCard: () => set((state) => ({
    currentCardIndex: state.currentSet 
      ? Math.min(state.currentCardIndex + 1, state.currentSet.flashcards.length - 1)
      : 0
  })),
  
  previousCard: () => set((state) => ({
    currentCardIndex: Math.max(0, state.currentCardIndex - 1)
  }))
})); 