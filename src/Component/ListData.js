import React from 'react'
import Job from './Job'

function ListData({data}) {

   const listofJob = data.map(job=>{
       return(
           <Job job={job} key={job.id}/>
       )
   })

    return (
        <div className="jobList">
            {listofJob}
        </div>
    )
}

export default ListData
