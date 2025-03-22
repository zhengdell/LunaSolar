import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">My Flashcards</h1>
      <div className="space-x-4">
        <Link 
          href="/create" 
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Create New Set
        </Link>
        <Link 
          href="/study-sets" 
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          View Study Sets
        </Link>
      </div>
    </main>
  );
} 