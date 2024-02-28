import React, { useState } from 'react';

export function liveLecture() {
  const [questions, setQuestions] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleSend = () => {
    if (inputText.trim() === '') return; // Ensure text is not empty
    const newQuestion = { text: inputText, votes: 0 };
    setQuestions([...questions, newQuestion]);
    setInputText('');
  };

  const handleUpvote = (index) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].votes += 1;
    // Sort questions array based on votes, highest to lowest
    updatedQuestions.sort((a, b) => b.votes - a.votes);
    setQuestions(updatedQuestions);
  };

  return (
    <div>
      <div style={inputContainerStyle}>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type your question here..."
          style={inputStyle}
        />
        <button style={buttonStyle} onClick={handleSend}>Send</button>
      </div>
      <div style={questionListStyle}>
        {questions.map((question, index) => (
          <div key={index} style={questionCardStyle}>
            <div>{question.text}</div>
            <div style={voteSectionStyle}>
              <span>{question.votes}</span>
              <button style={upvoteButtonStyle} onClick={() => handleUpvote(index)}>Upvote</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Inline CSS styles
const inputContainerStyle = {
  position: 'fixed',
  bottom: '10px',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
};

const inputStyle = {
  marginRight: '10px',
  padding: '5px',
  width: '300px',
};

const buttonStyle = {
  padding: '5px 10px',
};

const questionListStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const questionCardStyle = {
  border: '1px solid #ccc',
  borderRadius: '5px',
  padding: '10px',
  margin: '10px',
  width: '300px',
};

const voteSectionStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};

const upvoteButtonStyle = {
  padding: '5px 10px',
};

