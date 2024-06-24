import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandRock, faHandPaper, faHandScissors } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function App() {
  const [result, setResult] = useState('');
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [roundsPlayed, setRoundsPlayed] = useState(0);

  const handleClick = (choice) => {
    const rand = Math.floor(Math.random() * 3) + 1;
    let roundResult;

    if ((choice === 'rock' && rand === 1) || (choice === 'paper' && rand === 2) || (choice === 'scissors' && rand === 3)) {
      roundResult = 'Draw';
    } else if ((choice === 'rock' && rand === 2) || (choice === 'paper' && rand === 3) || (choice === 'scissors' && rand === 1)) {
      roundResult = 'Computer Wins';
      setComputerScore(computerScore + 1);
    } else {
      roundResult = 'You Win';
      setPlayerScore(playerScore + 1);
    }

    setResult(roundResult);
    setRoundsPlayed(roundsPlayed + 1);

    // Check if best of 5 rounds is reached
    if (roundsPlayed === 4) {
      if (playerScore > computerScore) {
        setResult('You Win the Game!');
      } else if (computerScore > playerScore) {
        setResult('Computer Wins the Game!');
      } else {
        setResult('It\'s a Draw!');
      }
      // Reset scores and roundsPlayed for a new game
      // setPlayerScore(0);
      // setComputerScore(0);
      // setRoundsPlayed(0);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-green-500">
      <div className="flex space-x-8 p-8 bg-white bg-opacity-10 rounded-lg shadow-lg">
        <ChoiceButton icon={faHandRock} label="Rock" onClick={() => handleClick('rock')} />
        <ChoiceButton icon={faHandPaper} label="Paper" onClick={() => handleClick('paper')} />
        <ChoiceButton icon={faHandScissors} label="Scissors" onClick={() => handleClick('scissors')} />
      </div>
      <div className="flex flex-col items-center mt-4">
        <p className="text-white font-bold text-lg mt-3 p-4 bg-blue-700 rounded-lg">Result: {result}</p>
        <div className="flex items-center justify-center mt-4">
          <div className="bg-white bg-opacity-60 rounded-lg p-4 mr-4">
            <p className="text-black text-lg font-bold">Player's Score</p>
            <p className="text-4xl text-green-500">{playerScore}</p>
          </div>
          <div className="bg-white bg-opacity-60 rounded-lg p-4">
            <p className="text-black text-lg font-bold">Computer's Score</p>
            <p className="text-4xl text-red-500">{computerScore}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const ChoiceButton = ({ icon, label, onClick }) => (
  <div className="flex flex-col items-center text-center">
    <div className="mb-4">
      <div className="rounded-full bg-gray-700 p-4 cursor-pointer hover:bg-gray-600 transition duration-300">
        <FontAwesomeIcon icon={icon} className="text-white text-7xl" onClick={onClick} />
      </div>
      <span className="mt-2 text-white text-lg">{label}</span>
    </div>
  </div>
);

export default App;
