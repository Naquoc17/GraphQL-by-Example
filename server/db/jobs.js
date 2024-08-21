import { connection } from "./connection.js";
import { generateID } from "./ids.js";

const getJobTable = () => connection.table("job");

async function getJobs() {
   return await getJobTable().select();
}

async function getJobsByCompany(companyId) {
   return await getJobTable().select().where({ companyId });
}

async function getJob(objectId) {
   return await getJobTable().where({ id: objectId }).first();
}

async function createJob({ companyId, title, description }) {
   const job = {
      id: generateID(),
      companyId,
      title,
      description,
      createdAt: new Date().toISOString(),
   };
   await getJobTable().insert(job);
   return job;
}

async function deleteJob(jobId) {
   const job = await getJobTable().where({ id: jobId }).first();
   if (!job) {
      throw new Error(`Job not found ${id}`);
   }
   await getJobTable().where({ id: jobId }).delete();
   return job;
}

async function updateJob(jobId, jobTitle, jobDescription) {
   const job = await getJobTable().where({ id: jobId }).first();
   if (!job) {
      throw new Error(`Job not found: ${id}`);
   }
   const updatedFields = { title: jobTitle, description: jobDescription };
   await getJobTable().where({ id: jobId }).update(updatedFields);
   return { ...job, ...updatedFields };
}

export { getJobs, getJob, createJob, deleteJob, updateJob, getJobsByCompany };
