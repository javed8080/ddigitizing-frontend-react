import React from 'react';

const AppFooter = () => {
  return (
    <div className="footer-copy">
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <ul className="social-list">
              <li className="social-item-facebook">
                <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/Edigit">
                  <i className="hc-facebook"></i>
                </a>
              </li>
              <li className="social-item-twitter">
                <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/Edigit">
                  <i className="hc-twitter"></i>
                </a>
              </li>
              <li className="social-item-linkedin">
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/Edigit">
                  <i className="hc-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-sm-6">
            <div className="copy-text">
              <p>© Edigit. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppFooter;
