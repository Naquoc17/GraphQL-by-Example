import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { getCompany } from "../lib/graphql/queries";
import JobList from "../components/JobList";
// import { companies } from "../lib/fake-data";

export default function CompanyPage() {
   const { companyId } = useParams();
   const [company, setCompany] = useState();
   useEffect(() => {
      getCompany(companyId).then(setCompany);
   }, [companyId]);

   if (!company) return <p>Loading...</p>;
   return (
      <div>
         <h1 className="title">{company.name}</h1>
         <div className="box">{company.description}</div>
         <h2 className="title is-5">Jobs at {company.name}</h2>

         <JobList jobs={company.jobs}></JobList>
      </div>
   );
}
