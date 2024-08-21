import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { formatDate } from "../lib/formatter";
import { getJob } from "../lib/graphql/queries";

export default function JobPage() {
   const { jobId } = useParams();
   const [job, setJob] = useState();
   useEffect(() => {
      getJob(jobId).then(setJob);
   }, [jobId]);

   console.log("[JobPage] job:", job);

   if (!job) return <p>Loading...</p>;
   return (
      <div>
         <h1 className="title is-2">{job.title}</h1>
         <h2 className="subtitle is-4">
            <Link to={`/companies/${job.company.id}`}>{job.company.name}</Link>
         </h2>
         <div className="box">
            <div className="block has-test-grey">
               Posted: {formatDate(job.date, "long")}
            </div>
            <p className="block">{job.description}</p>
         </div>
      </div>
   );
}
