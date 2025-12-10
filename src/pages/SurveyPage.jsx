import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/survey.css'; 

const SurveyPage = () => {
  const [formData, setFormData] = useState({
    role: '',
    usage: '',
    reasons: [],
    reason_text: '',
    consent: false,
  });
  const [showModal, setShowModal] = useState(false); 

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox' && name === 'reasons') {
      setFormData(prevData => ({
        ...prevData,
        reasons: checked 
          ? [...prevData.reasons, value]
          : prevData.reasons.filter(reason => reason !== value)
      }));
    } else {
      setFormData(prevData => ({
        ...prevData,
        [name]: type === 'checkbox' ? checked : value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Survey Submitted:', formData);
    setShowModal(true); 
  };

  return (
    <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh', padding: '20px' }}>
      <Link to="/dashboard" className="back-btn" title="Go Back">←</Link>

      <div className="survey-container">
        <h1 style={{ color: '#4dd0ff' }}>Piracy Usage Survey</h1>
        <p className="intro">
          This survey collects data on content consumption.
        </p>

        <form onSubmit={handleSubmit}>
          
          <fieldset>
            <legend>1️⃣ What best describes you?</legend>
            <label><input type="radio" name="role" value="student" required checked={formData.role === 'student'} onChange={handleChange} /> Student</label><br />
            <label><input type="radio" name="role" value="working_professional" required checked={formData.role === 'working_professional'} onChange={handleChange} /> Working Professional</label><br />
            <label><input type="radio" name="role" value="unemployed" required checked={formData.role === 'unemployed'} onChange={handleChange} /> Unemployed</label>
          </fieldset>

          <fieldset>
            <legend>2️⃣ Which sources do you primarily use?</legend>
            <label><input type="radio" name="usage" value="official" required checked={formData.usage === 'official'} onChange={handleChange} /> Official websites only</label><br />
            <label><input type="radio" name="usage" value="pirated" required checked={formData.usage === 'pirated'} onChange={handleChange} /> Pirated websites mostly</label><br />
            <label><input type="radio" name="usage" value="both" required checked={formData.usage === 'both'} onChange={handleChange} /> A mix</label><br />
          </fieldset>

          <fieldset>
            <legend>3️⃣ If you use pirated websites, why?</legend>
            <label><input type="checkbox" name="reasons" value="cost" checked={formData.reasons.includes('cost')} onChange={handleChange} /> Lower cost / free</label><br />
            <label><input type="checkbox" name="reasons" value="availability" checked={formData.reasons.includes('availability')} onChange={handleChange} /> Unavailable in my region</label><br />
          </fieldset>

          <div className="text-center">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>

      {showModal && (
        <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} aria-modal="true" role="dialog">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content bg-dark text-light">
              <div className="modal-header">
                <h5 className="modal-title" style={{ color: '#4dd0ff' }}>Submission Successful!</h5>
                <button type="button" className="btn-close btn-close-white" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body">
                Thank you for completing the survey.
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" onClick={() => setShowModal(false)}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SurveyPage;