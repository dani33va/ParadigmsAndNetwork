import React from 'react';
import CodeBox from './components/CodeBox.jsx';
import { Routes, Route } from 'react-router-dom';
import CodeExplanation from './components/CodeExplanation';
import './App.css';

const App = () => {
  const sections = [
    {
      title: "Caesar Cipher",
      boxes: [{file: "/files/1-1_caesarCipherPython.txt",url: "/CaesarCipher/Python", language:"Python" },
        {file: "/files/1-2_caesarCipherJava.txt",url: "/CaesarCipher/Java", language:"Java" },
        {file: "/files/1-3_caesarCipherFSharp.txt",url: "/CaesarCipher/FSharp", language: "F#" },
        {file: "/files/1-4_caesarCipherProlog.txt",url: "/CaesarCipher/Prolog", language: "Prolog" }]
    },
    {
      title: "Bulls and Cows",
      boxes: [{file: "/files/2-1_bullsAndCowsPython.txt",url: "/BullsAndCows/Python", language:"Python" },
        {file: "/files/2-2_bullsAndCowsJava.txt",url: "/BullsAndCows/Java", language:"Java" },
        {file: "/files/2-3_bullsAndCowsFSharp.txt",url: "/BullsAndCows/FSharp", language: "F#"},
        {file: "/files/2-4_bullsAndCowsProlog.txt",url: "/BullsAndCows/Prolog",language: "Prolog" }        
      ]
    },
    {
      title: "Maze Generation",
      boxes: [{file: "/files/3-1_mazeGenerationPython.txt",url: "/Maze_Generation/Python" , language:"Python"},
        {file: "/files/3-2_mazeGenerationJava.txt",url: "/Maze_Generation/Java", language:"Java" },
        {file: "/files/3-3_mazeGenerationFSharp.txt",url: "/Maze_Generation/FSharp", language: "F#" },
        {file: "/files/3-4_mazeGenerationProlog.txt",url: "/Maze_Generation/Prolog",language: "Prolog" }]
    },
    {
      title: "nQueens",
      boxes: [{file: "/files/4-1_nQueensPython.txt",url: "/nQueens/Python", language:"Python" },
         {file: "/files/4-2_nQueensJava.txt",url: "/nQueens/Java", language:"Java" },
         {file: "/files/4-3_nQueensFSharp.txt",url: "/nQueens/FSharp", language: "F#" }, 
        {file: "/files/4-4_nQueensProlog.txt",url: "/nQueens/Prolog",language: "Prolog" }]
    }
  ];


  

  return (
  <div className="page-container"> {/* Changed from landing-page to page-container */}
    <Routes>
      <Route path="/" element={
        <div className="content-wrapper">
          <h1 className="main-title">Programming paradigms</h1>            
            <div className="sections-container">
              {sections.map((section, index) => (
                <div key={index} className="section">
                  <h2 className="section-title">{section.title}</h2>
                  <div className="boxes-container">
                    {section.boxes.map((box, boxIndex) => (
                      <CodeBox 
                        key={boxIndex} 
                        filePath={box.file}
                        redirectUrl={box.url} 
                        language={box.language} 
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        } />
        <Route path="/:algorithm/:language" element={<CodeExplanation />} />
      </Routes>
    </div>
  );
};

export default App;