import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { codeSections } from './CodeSections';
import './CodeExplanation.css';

const CodeExplanation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { content, language, title } = location.state || {};
  
  const pathParts = location.pathname.split('/').filter(part => part !== '');
  const algorithm = pathParts[0];
  const lang = pathParts[1];
  
  const sections = codeSections[algorithm]?.[lang] || [];

  const handleShowFullCode = () => {
    navigate(`/${algorithm}/${lang}/full-code`, {
      state: { content, language, title }
    });
  };

  if (!content) {
    return (
      <div className="code-explanation-container">
        <div className="content-wrapper">
          <h1>Error: No code content found</h1>
          <button className="back-button" onClick={() => navigate('/')}>
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const renderCodeWithEllipsis = (codeRanges) => {
    const result = [];
    
    codeRanges.forEach((range, index) => {
      if (index > 0 && range[0] !== codeRanges[index-1][1] + 1) {
        result.push(<div key={`ellipsis-${index}`} className="code-ellipsis">...</div>);
      }
      
      const [start, end = start] = range;
      const lines = content.split('\n').slice(start - 1, end);
      
      result.push(
        <React.Fragment key={`code-${index}`}>
          {lines.map((line, i) => (
            <React.Fragment key={i}>
              {line}
              {i < lines.length - 1 && '\n'}
            </React.Fragment>
          ))}
        </React.Fragment>
      );
    });
    
    return result;
  };

  return (
    <div className="code-explanation-container">
      <div className="content-wrapper">
        <h1 className="main-title">{title || `${algorithm} in ${lang}`}</h1>
        
        <div className="sections-wrapper">
          {sections.map((section, index) => (
            <div 
              key={index} 
              className={`explanation-section ${index % 2 === 0 ? 'left-right' : 'right-left'} ${
                section.codeLines.length === 0 ? 'no-code' : ''
              }`}
            >
              {section.codeLines.length > 0 ? (
                <>
                  <div className="explanation-text">
                    <p>{section.explanation}</p>
                  </div>
                  <div className="code-preview">
                    <pre>
                      <code>
                        {renderCodeWithEllipsis(section.codeLines)}
                      </code>
                    </pre>
                  </div>
                </>
              ) : (
                <div className="centered-explanation">
                  <p>{section.explanation}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="button-container">
          <button className="back-button" onClick={() => navigate('/')}>
            Back to Home
          </button>
          <button className="full-code-button" onClick={handleShowFullCode}>
            Show Full Code
          </button>
        </div>
      </div>
    </div>
  );
};

export default CodeExplanation;