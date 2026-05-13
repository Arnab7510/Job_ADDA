import React from 'react'

const Jobs = () => {
  return (
    <section id='jobs' className='jobs'>
      <h1>Latest Job Notifications</h1>
      <section className="box-section">
         <a href='Govt.jsx' className='box-link'  >
        <div className="box">
            <h2><u>GOVT Jobs</u></h2>
          
          <p>
            Government jobs offer stable careers with secure income, fixed hours, and great benefits. They’re highly valued for long-term growth, respect, and reliability.

          </p>
        </div>
        </a>

        <a href='https://www.naukri.com/private-jobs-in-kolkata' className='box-link'>
        <div className="box">
          <h2><u>Private Jobs</u></h2>
          <p>
            Private jobs offer fast growth, dynamic work environments, and performance-based rewards. They’re ideal for building skills, gaining experience, and advancing your career quickly.

          </p>

        </div>
        </a>
      </section>
    </section>
  )
}

export default Jobs
