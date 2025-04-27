import React, { useState } from 'react';
import { CheckCircle, X, ArrowRight } from 'lucide-react';
import { Exercise } from '../types';
import CodeEditor from './CodeEditor';

interface ExerciseCardProps {
  exercise: Exercise;
  onComplete: () => void;
}

const ExerciseCard: React.FC<ExerciseCardProps> = ({ exercise, onComplete }) => {
  const [code, setCode] = useState(exercise.initialCode || '');
  const [result, setResult] = useState<'correct' | 'incorrect' | null>(null);
  const [feedback, setFeedback] = useState('');
  const [showHint, setShowHint] = useState(false);

  const checkAnswer = () => {
    try {
      // Create a function that will evaluate the test
      const testFunction = new Function('code', `
        try {
          ${exercise.testFunction}
        } catch (error) {
          return false;
        }
      `);
      
      // Run the test
      const passed = testFunction(code);
      
      if (passed) {
        setResult('correct');
        setFeedback('Great job! Your solution is correct.');
        // Give user some time to see the success message
        setTimeout(() => {
          onComplete();
        }, 1500);
      } else {
        setResult('incorrect');
        setFeedback('Not quite right. Try again!');
      }
    } catch (error) {
      setResult('incorrect');
      setFeedback(`Error: ${error instanceof Error ? error.message : 'Something went wrong'}`);
    }
  };

  const resetExercise = () => {
    setCode(exercise.initialCode || '');
    setResult(null);
    setFeedback('');
    setShowHint(false);
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-4">{exercise.title}</h3>
        <p className="text-gray-600 mb-6">{exercise.description}</p>
        
        <div className="mb-6">
          <CodeEditor 
            value={code} 
            onChange={setCode} 
            language="javascript"
            placeholder="Type your JavaScript code here..."
          />
        </div>
        
        {feedback && (
          <div className={`p-4 mb-6 rounded-md ${
            result === 'correct' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
          }`}>
            <div className="flex items-start">
              {result === 'correct' ? (
                <CheckCircle className="h-5 w-5 mr-2 mt-0.5" />
              ) : (
                <X className="h-5 w-5 mr-2 mt-0.5" />
              )}
              <p>{feedback}</p>
            </div>
          </div>
        )}
        
        <div className="flex flex-wrap gap-3">
          <button
            onClick={checkAnswer}
            className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors flex items-center gap-1"
          >
            Check Answer
            <ArrowRight className="h-4 w-4" />
          </button>
          
          <button
            onClick={resetExercise}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
          >
            Reset
          </button>
          
          <button
            onClick={() => setShowHint(!showHint)}
            className="px-4 py-2 bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200 transition-colors"
          >
            {showHint ? 'Hide Hint' : 'Show Hint'}
          </button>
        </div>
        
        {showHint && (
          <div className="mt-4 p-4 bg-blue-50 rounded-md">
            <p className="text-blue-700">{exercise.hint}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExerciseCard;