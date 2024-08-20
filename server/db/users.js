import { connection } from "./connection";

const getUserTable = () => connection.table("user");

async function getUser(objectId) {
   return await getUserTable().where({ id: objectId }).first();
}

async function getUserByEmail(email) {
   return await getUserTable().where({ email }).first();
}

export { getUser, getUserByEmail };
