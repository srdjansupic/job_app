import React from 'react'

function Job({ job }) {

 

    return (
        <div className="job">
            <div className="company">
            <div className="img">
                <img src={job.logo} alt="logo-company"></img>
            </div>
            <div className="job-description">
                <div className="name-company">
                    <h1>{job.company}</h1>
                    <span className={job.new === true ? "new": null}>{job.new === true ? "new": null}</span>
                    <span className={job.featured === true ? "featured": null}>{job.featured === true ? "featured": null}</span>
                </div>
                <div className="position">
                    <span>{job.position}</span>
                </div>
                <div className="postedAt">
                    <span>{job.postedAt} - {job.contract} - {job.location}</span>
                </div>
            </div>
            </div>
            <div className="Listtechnologies">
                <div className="technologies">
                    <span>{job.role}</span>
                    <span>{job.level}</span>
                    {job.languages.map(el=>{return(<span>{el}</span>)})}
                </div>
            </div>
        </div>
    )
}

export default Job
