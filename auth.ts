// ~/auth.ts

import { betterAuth } from "better-auth";
import { LibsqlDialect } from "@libsql/kysely-libsql";

const { TURSO_DATABASE_URL, TURSO_AUTH_TOKEN } = import.meta.env;
 
const dialect = new LibsqlDialect({
    url: TURSO_DATABASE_URL || "",
    authToken: TURSO_AUTH_TOKEN || "",
})
 
export const auth = betterAuth({
  database: {
    dialect,
    type: "sqlite"
  },
  emailAndPassword: {  
    enabled: true
},
});