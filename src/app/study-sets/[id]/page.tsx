'use client';

import React, { useEffect } from 'react';
import { useStore } from '../../../lib/store';
import { Flashcard } from '../../../components/Flashcard';

export default function StudySet({ params }: { params: { id: string } }) {
  const { currentSet, currentCardIndex, setCurrentSet, nextCard, previousCard } = useStore();
  const studySets = useStore(state => state.studySets);

  useEffect(() => {
    const set = studySets.find(set => set.id === params.id);
    if (set) setCurrentSet(set);
  }, [params.id, studySets, setCurrentSet]);

  if (!currentSet) return <div>Set not found</div>;

  const currentCard = currentSet.flashcards[currentCardIndex];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">{currentSet.title}</h1>
      
      <div className="flex flex-col items-center gap-6">
        <Flashcard
          term={currentCard.term}
          definition={currentCard.definition}
        />
        
        <div className="flex gap-4">
          <button
            onClick={previousCard}
            disabled={currentCardIndex === 0}
            className="bg-gray-500 text-white px-4 py-2 rounded disabled:opacity-50"
          >
            Previous
          </button>
          <button
            onClick={nextCard}
            disabled={currentCardIndex === currentSet.flashcards.length - 1}
            className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
        
        <div className="text-sm text-gray-500">
          Card {currentCardIndex + 1} of {currentSet.flashcards.length}
        </div>
      </div>
    </div>
  );
} 