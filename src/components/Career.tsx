import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI/ML Intern</h4>
                <h5>techmedy.ai</h5>
              </div>
              <h3>Jun 2025 – Aug 2025</h3>
            </div>
            <p>
              Built ML classification and regression models using Python, Pandas,
              NumPy, and scikit-learn. Performed EDA on 10,000+ record datasets
              with hyperparameter tuning, improving model accuracy by 7%. Delhi,
              India.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Project Lead</h4>
                <h5>ACM SFSU — AI/ML Special Interest Group</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Leading AI/ML projects and workshops for the SFSU ACM chapter,
              bridging coursework with real-world applied machine learning.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Team Lead</h4>
                <h5>Spark SF — Hackathon Division</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Led team to Top 10 finish at SF Hacks 2025. Coordinated full-stack
              development under 24-hour sprint conditions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;