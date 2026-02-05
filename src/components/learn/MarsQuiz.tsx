'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const QUESTIONS = [
  {
    question: 'How long is a day on Mars (called a "sol")?',
    options: ['12 hours', '24 hours 37 minutes', '48 hours', '36 hours'],
    correct: 1,
    explanation: 'A Martian day is remarkably similar to Earth\'s: just 37 minutes longer!',
  },
  {
    question: 'What gives Mars its red color?',
    options: ['Red rocks', 'Iron oxide (rust)', 'Volcanic ash', 'Red sand'],
    correct: 1,
    explanation: 'Mars is covered in iron oxide, essentially rust, giving it the distinctive red-orange appearance.',
  },
  {
    question: 'How many moons does Mars have?',
    options: ['None', '1', '2', '4'],
    correct: 2,
    explanation: 'Mars has two small moons: Phobos and Deimos, named after the Greek gods of fear and terror.',
  },
  {
    question: 'Which is the largest volcano in the solar system?',
    options: ['Mount Everest', 'Mauna Kea', 'Olympus Mons', 'Mount Etna'],
    correct: 2,
    explanation: 'Olympus Mons on Mars is nearly 3 times the height of Mount Everest!',
  },
  {
    question: 'What percentage of Mars\'s atmosphere is CO2?',
    options: ['21%', '50%', '78%', '95%'],
    correct: 3,
    explanation: 'Mars\'s atmosphere is 95% carbon dioxide, with only 0.13% oxygen compared to Earth\'s 21%.',
  },
  {
    question: 'How long does it take to travel to Mars?',
    options: ['1 week', '3 months', '7-9 months', '2 years'],
    correct: 2,
    explanation: 'With current technology, a trip to Mars takes about 7-9 months depending on orbital positions.',
  },
];

function ProgressBar({ current, total }: { current: number; total: number }) {
  return (
    <div className="flex gap-2 mb-8">
      {[...Array(total)].map((_, i) => (
        <div 
          key={i}
          className={`h-1 flex-1 rounded-full transition-all duration-300 ${
            i < current ? 'bg-[#ff4d00]' : i === current ? 'bg-[#ff4d00]/50' : 'bg-zinc-800'
          }`}
        />
      ))}
    </div>
  );
}

function QuizResult({ score, total, onRestart }: { score: number; total: number; onRestart: () => void }) {
  const percentage = Math.round((score / total) * 100);
  
  let message = '';
  let emoji = '';
  
  if (percentage === 100) {
    message = 'Perfect! You\'re a Mars expert!';
    emoji = '🏆';
  } else if (percentage >= 80) {
    message = 'Excellent! You really know your Mars facts!';
    emoji = '🌟';
  } else if (percentage >= 60) {
    message = 'Good job! You\'ve learned a lot about Mars.';
    emoji = '👍';
  } else {
    message = 'Keep exploring! There\'s so much to learn about Mars.';
    emoji = '🚀';
  }
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center py-12"
    >
      <span className="text-8xl mb-6 block">{emoji}</span>
      <h3 className="text-3xl font-bold text-white mb-4">Quiz Complete!</h3>
      <p className="text-5xl font-bold text-[#ff4d00] mb-4">{score}/{total}</p>
      <p className="text-xl text-zinc-400 mb-8">{message}</p>
      
      <button
        onClick={onRestart}
        className="px-8 py-4 bg-[#ff4d00] hover:bg-[#ff6b2d] rounded-full font-semibold transition-all"
      >
        Try Again
      </button>
    </motion.div>
  );
}

export default function MarsQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [quizComplete, setQuizComplete] = useState(false);
  
  const question = QUESTIONS[currentQuestion];
  
  const handleAnswer = (index: number) => {
    if (selectedAnswer !== null) return;
    
    setSelectedAnswer(index);
    setShowExplanation(true);
    
    if (index === question.correct) {
      setScore(score + 1);
    }
  };
  
  const handleNext = () => {
    if (currentQuestion < QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setQuizComplete(true);
    }
  };
  
  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setQuizComplete(false);
  };
  
  return (
    <section className="py-32 bg-[#030303] relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,77,0,0.05)_0%,_transparent_70%)]" />
      
      <div className="max-w-3xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-[#ff4d00] text-sm font-medium tracking-wider uppercase mb-4 block">
            Test Your Knowledge
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Mars Quiz
          </h2>
          <p className="text-xl text-zinc-400">
            How much have you learned? Take this quick quiz to find out!
          </p>
        </motion.div>
        
        <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05]">
          <AnimatePresence mode="wait">
            {quizComplete ? (
              <QuizResult score={score} total={QUESTIONS.length} onRestart={handleRestart} />
            ) : (
              <motion.div
                key={currentQuestion}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <ProgressBar current={currentQuestion} total={QUESTIONS.length} />
                
                <p className="text-sm text-zinc-500 mb-2">
                  Question {currentQuestion + 1} of {QUESTIONS.length}
                </p>
                
                <h3 className="text-2xl font-bold text-white mb-8">
                  {question.question}
                </h3>
                
                <div className="space-y-3 mb-8">
                  {question.options.map((option, i) => (
                    <button
                      key={i}
                      onClick={() => handleAnswer(i)}
                      disabled={selectedAnswer !== null}
                      className={`w-full p-4 rounded-xl text-left transition-all duration-300 ${
                        selectedAnswer === null
                          ? 'bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.06] hover:border-white/20'
                          : selectedAnswer === i
                            ? i === question.correct
                              ? 'bg-green-500/20 border border-green-500/50'
                              : 'bg-red-500/20 border border-red-500/50'
                            : i === question.correct
                              ? 'bg-green-500/20 border border-green-500/50'
                              : 'bg-white/[0.02] border border-white/[0.05] opacity-50'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                          selectedAnswer === null
                            ? 'bg-white/10'
                            : selectedAnswer === i
                              ? i === question.correct
                                ? 'bg-green-500'
                                : 'bg-red-500'
                              : i === question.correct
                                ? 'bg-green-500'
                                : 'bg-white/10'
                        }`}>
                          {String.fromCharCode(65 + i)}
                        </span>
                        <span className="text-white">{option}</span>
                        {selectedAnswer !== null && i === question.correct && (
                          <span className="ml-auto text-green-400">✓</span>
                        )}
                        {selectedAnswer === i && i !== question.correct && (
                          <span className="ml-auto text-red-400">✗</span>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
                
                <AnimatePresence>
                  {showExplanation && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-4 rounded-xl bg-[#ff4d00]/10 border border-[#ff4d00]/20 mb-6">
                        <p className="text-zinc-300">
                          <span className="text-[#ff4d00] font-semibold">💡 </span>
                          {question.explanation}
                        </p>
                      </div>
                      
                      <button
                        onClick={handleNext}
                        className="w-full py-4 bg-[#ff4d00] hover:bg-[#ff6b2d] rounded-xl font-semibold transition-all"
                      >
                        {currentQuestion < QUESTIONS.length - 1 ? 'Next Question' : 'See Results'}
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
