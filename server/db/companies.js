import { connection } from "./connection.js";

const getCompanyTable = () => connection.table("company");

export async function getCompany(objectId) {
   return await getCompanyTable().where({ id: objectId }).first();
}

// export async function fetchCompanies(objectId) {
//    try {
//       const companies = await getCompanyTable().where({ id: objectId }).first();
//       console.log("Data retrieved successfully:", companies);
//    } catch (error) {
//       console.error("Error fetching data:", error);
//    }
// }
