import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { jobs } from "../lib/fake-data";
import { formatDate } from "../lib/formatter";

export default function JobPage() {
   const { jobId } = useParams();

   const job = jobs.find((job) => job.id === jobId);

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
