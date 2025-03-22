'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useStore } from '@/lib/store';

export default function CreateSet() {
  const router = useRouter();
  const addStudySet = useStore(state => state.addStudySet);
  const [title, setTitle] = useState('');
  const [cards, setCards] = useState([{ term: '', definition: '' }]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newSet = {
      id: Date.now().toString(),
      title,
      description: '',
      flashcards: cards.map((card, index) => ({
        id: `card-${index}`,
        ...card
      }))
    };
    
    addStudySet(newSet);
    router.push('/study-sets');
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Create New Study Set</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter set title"
            className="w-full p-2 border rounded"
          />
        </div>

        {cards.map((card, index) => (
          <div key={index} className="flex gap-4">
            <input
              type="text"
              value={card.term}
              onChange={(e) => {
                const newCards = [...cards];
                newCards[index].term = e.target.value;
                setCards(newCards);
              }}
              placeholder="Term"
              className="w-1/2 p-2 border rounded"
            />
            <input
              type="text"
              value={card.definition}
              onChange={(e) => {
                const newCards = [...cards];
                newCards[index].definition = e.target.value;
                setCards(newCards);
              }}
              placeholder="Definition"
              className="w-1/2 p-2 border rounded"
            />
          </div>
        ))}

        <button
          type="button"
          onClick={() => setCards([...cards, { term: '', definition: '' }])}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Add Card
        </button>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Create Set
        </button>
      </form>
    </div>
  );
} 