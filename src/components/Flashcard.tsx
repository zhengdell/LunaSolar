'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FlashcardProps {
  term: string;
  definition: string;
}

export function Flashcard({ term, definition }: FlashcardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="relative w-96 h-60 cursor-pointer perspective-1000"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={isFlipped ? 'back' : 'front'}
          initial={{ rotateY: 90 }}
          animate={{ rotateY: 0 }}
          exit={{ rotateY: -90 }}
          transition={{ duration: 0.3 }}
          className="absolute w-full h-full bg-white rounded-xl shadow-lg p-6"
        >
          <div className="flex items-center justify-center h-full">
            <p className="text-xl font-medium text-center">
              {isFlipped ? definition : term}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
} 