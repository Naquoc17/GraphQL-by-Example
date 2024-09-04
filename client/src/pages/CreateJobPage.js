import { useState } from "react";
import { createJob } from "../lib/graphql/queries";
import { useNavigate } from "react-router-dom";

export default function CreateJobPage() {
   const navigate = useNavigate();
   const [title, setTitle] = useState("");
   const [description, setDescription] = useState("");

   const handleSubmit = async (event) => {
      event.preventDefault();
      const job = await createJob({ title, description });
      console.log("Job created:", job);
      navigate(`/jobs/${job.id}`);
   };

   return (
      <div>
         <h1 className="title">New Job</h1>
         <div className="box">
            <form action="">
               <div className="field">
                  <label htmlFor="" className="label">
                     Title
                  </label>
                  <div className="control">
                     <input
                        type="text"
                        className="input"
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                     />
                  </div>
               </div>

               <div className="field">
                  <label htmlFor="" className="label">
                     Description
                  </label>
                  <div className="control">
                     <input
                        type="text"
                        className="input"
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                     />
                  </div>
               </div>

               <div className="field">
                  <div className="control">
                     <button className="button is-link" onClick={handleSubmit}>
                        Submit
                     </button>
                  </div>
               </div>
            </form>
         </div>
      </div>
   );
}
