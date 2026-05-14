import React from 'react'

const sortBtns = document.querySelectorAll('.job-id li');

sortBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    sortBtns.forEach((btn) => btn.classList.remove('active'));
    btn.classList.add('active');
  });
  
});

const Jobs = () => {
  return (
    <section id='jobs' className='jobs'>
      <h1>Latest Job Notifications</h1>
      <section className="job-section">
        <ul className='job-id'>
          <li>Recent Jobs</li>
          <li>Full Time</li>
          <li>Part Time</li>
        </ul>
      
      </section>
    </section>
  )
}

export default Jobs
