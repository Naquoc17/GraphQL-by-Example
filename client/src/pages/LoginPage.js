import { useState } from "react";
import { login } from "../lib/auth";

export default function LoginPage({ onLogin }) {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [error, setError] = useState(false);

   const handleSubmit = async (event) => {
      event.preventDefault();
      setError(false);
      const user = await login(email, password);
      if (user) {
         onLogin(user);
      } else {
         setError(true);
      }
   };

   return (
      <form onSubmit={handleSubmit}>
         <div className="field">
            <label htmlFor="" className="label">
               Email
            </label>
            <div className="control">
               <input
                  type="email"
                  className="input"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
               />
            </div>
         </div>
         <div className="field">
            <label htmlFor="" className="label">
               password
            </label>
            <div className="control">
               <input
                  type="password"
                  className="input"
                  required
                  value={password}
                  onChange={(event) => {
                     setPassword(event.target.value);
                  }}
               />
            </div>
         </div>
         {error && (
            <div className="message is-danger">
               <p className="message-body">Login failed</p>
            </div>
         )}
         <div className="field">
            <div className="control">
               <button className="button is-link" type="submit">
                  Login
               </button>
            </div>
         </div>
      </form>
   );
}
