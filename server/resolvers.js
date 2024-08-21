import { getCompany } from "./db/companies.js";
import { getJob, getJobs, getJobsByCompany } from "./db/jobs.js";

export const resolvers = {
   Query: {
      company: (_root, { id }) => getCompany(id),
      job: (_root, { id }) => getJob(id),
      jobs: () => getJobs(),
   },

   Company: {
      jobs: (company) => getJobsByCompany(company.id),
   },

   Job: {
      date: (job) => toIsoDate(job.createdAt),
      company: (job) => getCompany(job.companyId),
   },
};

function toIsoDate(value) {
   return value.slice(0, "YYYY-MM-DD".length);
}
