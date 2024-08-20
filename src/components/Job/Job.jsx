import { CiLocationOn } from "react-icons/ci";
import { LuBadgeDollarSign } from "react-icons/lu";
import { Link } from "react-router-dom";

const Job = ({job}) => {
const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary, job_description, job_responsibility  } = job;

    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
  <figure>
    <img
      src={logo}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{job_title}</h2>
    <p>{company_name}</p>
   <div>
   <button className=" px-5 py-2 font-extrabold border border-[#7E90FE] rounded-xl mr-4">{remote_or_onsite}</button>
   <button  className=" px-5 py-2 font-extrabold border border-[#7E90FE] rounded-xl mr-4">{job_type}</button>
   </div>
   <div className=" flex gap-6">
   <div className =" flex gap-2  text-center align-2 ">
    <h1>< CiLocationOn className=" text-2xl"></CiLocationOn></h1>
    <p>{location}</p>
    </div> 
   <div className=" flex gap-2"> 
    <h2><LuBadgeDollarSign className=" text-2xl"></LuBadgeDollarSign></h2>
    <p>{salary}</p>
   </div>
   </div>


    <div className="card-actions mt-2">
      <Link to={`/job/ ${id}`} > 
      <button className="btn btn-primary font-bold">View Details</button>
      </Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Job;