import React, { useState, useEffect } from 'react';
import axios from 'axios';
import JobSearchSm from './JobSearchSm';
import JobCard from './JobCard';
// import dentalImg from '../images/Dental-image.png';

const JobPostings = ({jobSearch, setJobSearch}) => {
  const [jobList, setJobList] = useState([]);
  const [resultsFound, setResultsFound] = useState(true);
  const queryString = window.location.search
  console.log(queryString);
  const urlParams = new URLSearchParams(queryString);
  const zip = urlParams.get('zip')
  const backgroundColor = urlParams.get('backgroundColor')
  const jobTitle = urlParams.get('jobTitle')
  console.log(zip, backgroundColor);



  useEffect(() => {
    const session = sessionStorage.getItem('jobList')

    if(session){
      setJobList(JSON.parse(session))
    }

    axios.post('https://jooble.org/api/2f68c697-0b9e-420b-ac07-3522403e50ae', {
      keywords: jobTitle,
      // location: jobSearch.location
      location: zip
    })
      .then(res => res.data)
      .then(data => {
        let jobs = data.jobs;
        if(jobs.length > 0){
          setJobList(jobs);
          setResultsFound(true);
          sessionStorage.setItem('jobList', JSON.stringify(jobs));

        } else {
          setResultsFound(false);
        }
      })
  }, [jobSearch]);
  
  return (
    <div className='jobs-page-container' style={{backgroundColor}}>
      <JobSearchSm setJobSearch={setJobSearch} />
      <div className='grid-container' style={{backgroundColor}}>
        <div className='job-postings-grid' style={{backgroundColor}}>
          {!resultsFound && 
              <div className='noresults-searching-container'>
                <h3>No job postings found...try again!</h3>
              </div> 
          } 

          {resultsFound && jobList.length > 0 ?
            jobList.map(job => {
              return (
                <JobCard 
                  key={job.id}
                  title={job.title}
                  location={job.location} 
                  company={job.company}
                  description={job.snippet}
                  link={job.link}
                />
              )
            })
            : resultsFound && 
                <div className='noresults-searching-container'>
                  <h3>Searching.....</h3> 
                </div>
          }                     
        </div>
      </div>
    </div>
  )
}
export default JobPostings;