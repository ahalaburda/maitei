import React from 'react';

import './404.css'

function NoMatch() {
	return (
        <div>
            {/* Content Wrapper */}
            <div id="content-wrapper-404" className="d-flex flex-column">
              {/* Main Content */}
              <div id="content">
                {/* Begin Page Content */}
                <div className="container-fluid">
                  {/* 404 Error Text */}
                  <div className="text-center">
                    <div className="error mx-auto" data-text={404}>404</div>
                    <p className="lead text-gray-800 mb-5">Page Not Found</p>
                    <p className="text-gray-500 mb-0">Nde tavy, ndaipori mba'eve ...</p>
                    <a href="/">← Jaguevi</a>
                  </div>
                </div>
                {/* /.container-fluid */}
              </div>
              {/* End of Main Content */}

            
            {/* End of Content Wrapper */}
          </div>
        </div>
	);
}

export default NoMatch;

