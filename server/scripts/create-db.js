import { connection } from "../db/connection";

const { schema } = connection;

await schema.dropTableIfExists("user");
await schema.dropTableIfExists("job");
await schema.dropTableIfExists("company");
