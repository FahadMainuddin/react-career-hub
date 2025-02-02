import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {

  const [jobs, setJobs] = useState( [] );

  const [dataLength, setDataLength] = useState(4);

  useEffect(() => { 

    fetch('jobs.json')
       .then(res => res.json ())
       .then (data => setJobs (data));

  }, []);
    return (
        <div className=" border border-purple-400 p-6 mt-12 mb-6">

            <div className=" mb-6 text-center ">
            <h2 className="text-6xl text-center font-bold mb-4 "> Featured Jobs: { jobs.length}</h2>
            <p className=" text-2xl text-center text-slate-500 mb -4">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>


            <div className="  grid grid-cols-2 gap-6 mt-6">
                {
                    jobs. slice( 0, dataLength).map(job => <Job key = {job.id} job={job}></Job>)
                }
            </div>

            <div className={dataLength=== jobs.length && 'hidden'}>
                
                <button 
                onClick={()=> setDataLength (jobs.length)}
                className="btn btn-primary text-center"> Show more Jobs</button>
            </div>
        
        </div>

        
    );
};

export default FeaturedJobs;