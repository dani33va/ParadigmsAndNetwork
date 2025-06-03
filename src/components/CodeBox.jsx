import React, { useState, useEffect } from 'react';
import './CodeBox.css';
import { useNavigate } from 'react-router-dom';

const CodeBox = ({ filePath, language, redirectUrl }) => {
  const [content, setContent] = useState('');
  const navigate = useNavigate()

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch(filePath);
        if (!response.ok) throw new Error('Failed to load');
        const text = await response.text();
        setContent(text);
      } catch (error) {
        console.error('Error loading file:', error);
        setContent(`// Error loading ${language} snippet`);
      }
    };
    
    fetchContent();
  }, [filePath, language]);

  const lines = content.split('\n').slice(0, 10);
  const hasMoreLines = content.split('\n').length > 10;

  const handleClick = () => {
    const parts = redirectUrl.split('/').filter(part => part !== '');
    const algorithm = parts[0];
    const language = parts[1];
    navigate(redirectUrl,  { 
      state: { 
        content,
        language,
        title: `${algorithm} in ${language}` 
      }
    } ); 
  };

  return (
    <div className="code-box-container" onClick={handleClick}>
      {language && <h3 className="code-language">{language}</h3>}
      <div className="code-box">
        <pre>
          <code className="code-content">
            {lines.map((line, i) => (
              <React.Fragment key={i}>
                {line}
                {i < lines.length - 1 && '\n'}
              </React.Fragment>
            ))}
          </code>
        </pre>
        {hasMoreLines && <div className="fade-overlay"></div>}
      </div>
    </div>
  );
};

export default CodeBox;