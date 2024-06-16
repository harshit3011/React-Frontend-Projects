import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { data } from '../Assets/data.js';

function App() {
  const quizData = data;
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [color, setColor] = useState('');
  const [turn, setTurn] = useState(0)
  const [selectedOption, setSelectedOption] = useState(null); // State to track selected option

  const handleNext = () => {
    setIndex(prev => (prev + 1) % quizData.length);
    setColor('');
    setTurn(prev=>prev+1)
    setSelectedOption(null); // Reset selected option when moving to the next question
  };

  const handleChange = (option) => {
    const correctAns = quizData[index]['option' + quizData[index].ans];

    if (option === correctAns) {
      setScore(prevScore => prevScore + 1);
      setColor('green');
    } else {
      setColor('red');
    }

    setSelectedOption(option); // Update selected option
  };

  return (
    <>
      <div className="bg-purple-300 flex items-center justify-center min-h-screen">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h1 className="text-2xl font-bold mb-4 text-center">Quiz App</h1>
          <hr className="mb-4" />
          {turn !== 5 ? (
            <div className="mb-4">
              <p className="text-lg font-medium">{quizData[index].question}</p>
              <div className="mt-2 space-y-2">
                <label className={`flex items-center bg-gray-200 p-2 rounded border ${selectedOption === quizData[index].option1 && (color === 'green' ? 'bg-green-300' : 'bg-red-300')}`}>
                  <input type="radio" name="question1" className="mr-2" checked={selectedOption === quizData[index].option1} onChange={() => handleChange(quizData[index].option1)} /> {quizData[index].option1}
                </label>
                <label className={`flex items-center bg-gray-200 p-2 rounded border ${selectedOption === quizData[index].option2 && (color === 'green' ? 'bg-green-300' : 'bg-red-300')}`}>
                  <input type="radio" checked={selectedOption === quizData[index].option2} onChange={() => handleChange(quizData[index].option2)} /> {quizData[index].option2}
                </label>
                <label className={`flex items-center bg-gray-200 p-2 rounded border ${selectedOption === quizData[index].option3 && (color === 'green' ? 'bg-green-300' : 'bg-red-300')}`}>
                  <input type="radio" className="mr-2" checked={selectedOption === quizData[index].option3} onChange={() => handleChange(quizData[index].option3)} /> {quizData[index].option3}
                </label>
                <label className={`flex items-center bg-gray-200 p-2 rounded border ${selectedOption === quizData[index].option4 && (color === 'green' ? 'bg-green-300' : 'bg-red-300')}`}>
                  <input type="radio" className="mr-2" checked={selectedOption === quizData[index].option4} onChange={() => handleChange(quizData[index].option4)} /> {quizData[index].option4}
                </label>
              </div>
              <button className="w-full bg-blue-400 text-white py-2 px-4 rounded hover:bg-blue-800" onClick={handleNext}>Next</button>
              <p className="mt-4 text-center text-gray-700">Score: {score}</p>
            </div>
            
          ) : (
            <div className="mb-4">
              <p className='text-lg font-medium'>Final score: {score}</p>
            </div>
          )}
         
        </div>
      </div>
    </>
  );
}

export default App;
