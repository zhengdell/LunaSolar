'use client';

import React from 'react';
import { useStore } from '../../../lib/store';
import Link from 'next/link';

export default function StudySets() {
  const studySets = useStore(state => state.studySets);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">My Study Sets</h1>
      
      <div className="grid gap-4">
        {studySets.map(set => (
          <Link 
            key={set.id}
            href={`/study-sets/${set.id}`}
            className="p-4 border rounded hover:bg-gray-50"
          >
            <h2 className="text-xl font-semibold">{set.title}</h2>
            <p className="text-gray-500">{set.flashcards.length} cards</p>
          </Link>
        ))}
      </div>
      
      {studySets.length === 0 && (
        <p className="text-gray-500">
          No study sets yet. <Link href="/create" className="text-blue-500">Create one!</Link>
        </p>
      )}
    </div>
  );
} 