import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { universityObj } from './universityData';

export function SignUpPage({navigation}) {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState('')  




  const handleChange = (event) =>{
    setSelectedOption(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  // const handleSignUp = () => {
  //   if ((selectedOption === "University of York" && email.endsWith('@york.ac.uk')) ||
  //       (selectedOption === "York St.John" && email.endsWith("@yorksj.ac.uk"))) {
  //     setIsValidEmail(true);
  //     setShowOptions(true);
  //   } else {
  //     setIsValidEmail(false);
  //   }
  // };

  const handleSignUpObject = () => {
    if (universityObj.hasOwnProperty(selectedOption) && email.endsWith(universityObj[selectedOption])){
      setIsValidEmail(true)
      setShowOptions(true)
    } else {
      setIsValidEmail(false)
    }
  
  }


  const handleCreateQuestionBoard = () => {
    // Handle create question board action
  };

  const handleJoinQuestionBoard = () => {
    // Navigate to LiveLecture component
    window.location.href = '/liveLecture';
  };

  return (
    <div>
      {!showOptions ? (
        <div>
          <h2>Select your University</h2>
          <select value={selectedOption} onChange={handleChange}>
            <option value="">-- Please select --</option>
            <option value="University of York">University of York</option>
            <option value="York St.John">York St.John</option>
          </select>
          <h1>Sign Up</h1>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
          />
          <button onClick={handleSignUpObject}>Sign Up</button>
          {!isValidEmail && (
            <p style={{ color: 'red' }}>Please submit a valid email address for your University</p>
          )}
        </div>
      ) : (
        <div>
          <h1>Welcome!</h1>
          <button onClick={handleCreateQuestionBoard}>Create Question Board</button>
          <button onClick={() => navigation.navigate("Question Board")}>Join Question Board</button>
        </div>
      )}
    </div>
  );
}