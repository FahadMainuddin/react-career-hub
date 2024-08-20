import { useLoaderData, useParams } from "react-router-dom";


const JobDetails = () => {

    // const {job_description, } = jobs;

    const jobs = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt (id);
    const job = jobs.find (job => job.id === idInt);
    console.log (job);

    return (
        <div>
            <h2 className=" text-3xl font-extrabold text-center mb-6">Job Details</h2>
      
      <div className =" main-container grid grid-cols-4 gap-6 mb-4">
      <div className ='container border md:grid col-span-3 p-4'>
      <p>Details are coming soon</p>
      <h2 className=" text-slate-500 mt-2 p-2"><span className=' font-bold text-xl  text-black '> Job Description :</span> { job.job_description}</h2>
      <h2 className=" text-slate-500 mt-2  p-2"><span className=' font-bold text-xl text-black '> Job Responsibility :</span> { job.job_responsibility}</h2>
      <h2 className=" text-slate-500 mt-2  p-2" ><span className=' font-bold text-xl text-black  '> Educational Requirements :</span> { job.educational_requirements}</h2>
      <h2 className=" text-slate-500 mt-2  p-2"><span className=' font-bold text-xl  text-black  '>  Job Experiences :</span> { job.experiences}</h2>
      <h2></h2>
      </div>

         <div className =" side-container col-span-1 bg-gradient-to-r from-[#7E90FE] to-[#9873FF] p-4 mb-4">
            <h2 className=" underline underline-offset-2 text-xl font-bold">Details Information </h2>
            <br />
            <h2><span className="text-xl font-semibold">Salary :</span> {job.salary}</h2>
            <h2><span className="text-xl font-semibold">Job Type :</span> {job.job_title}</h2>

            <h3 className='  text-xl font-semibold mt-2 underline'> Contact information :</h3>
             <br></br>
            <h2 className="  mt-2 "><span className="text-xl font-semibold">Phone :</span> {job.contact_information.phone}</h2>
            <h2 className=" mt-2"><span className="text-xl font-semibold">Email :</span> {job.contact_information.email}</h2>
            <h2 className=" mt-2"><span className="text-xl font-semibold">Address :</span> {job.contact_information.address}</h2>
            <div> <button className="btn btn-primary w-full mt-4 mb-4 p-2"> Apply Now</button></div>
            </div>
           
           

             
      </div>
       
    
        </div>
    );
};

export default JobDetails;