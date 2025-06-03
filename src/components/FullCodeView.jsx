import React from 'react';
import { useLocation, useNavigate} from 'react-router-dom';
import './FullCodeView.css';

const FullCodeView = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { content, title } = location.state || {};
  
  const pathParts = location.pathname.split('/').filter(part => part !== '');
  const algorithm = pathParts[0];
  const lang = pathParts[1];

  const handleBackToExplanation = () => {
    navigate(`/${algorithm}/${lang}`, {
      state: location.state
    });
  };

  if (!content) {
    return (
      <div className="fullcode-error-container">
        <div className="fullcode-error-content">
          <h1 className="fullcode-error-title">Error: No code content found</h1>
          <button className="fullcode-error-button" onClick={() => navigate('/')}>
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fullcode-container">
      <div className="fullcode-content-wrapper">
        <h1 className="fullcode-title">{title || `${algorithm} in ${lang}`}</h1>
        
        <div className="fullcode-code-container">
          <pre className="fullcode-pre">
            <code className="fullcode-code">
              {content}
            </code>
          </pre>
        </div>

        <div className="fullcode-button-group">
          <button className="fullcode-home-button" onClick={() => navigate('/')}>
            Back to Home
          </button>
          <button className="fullcode-explanation-button" onClick={handleBackToExplanation}>
            Back to Explanation
          </button>
        </div>
      </div>
    </div>
  );
};

export default FullCodeView;