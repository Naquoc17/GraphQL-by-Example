import { useState } from "react";

export default function CreateJobPage() {
   const [title, setTitle] = useState("");
   const [description, setDescription] = useState("");

   const handleSubmit = (event) => {
      event.preventDefault();
      console.log("should post a new job:", { title, description });
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
