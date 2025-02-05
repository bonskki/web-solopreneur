// ~/auth.ts

import { betterAuth } from "better-auth";
import { LibsqlDialect } from "@libsql/kysely-libsql";

const { TURSO_DATABASE_URL, TURSO_AUTH_TOKEN } = import.meta.env;

const dialect = new LibsqlDialect({
    url: TURSO_DATABASE_URL || "",
    authToken: TURSO_AUTH_TOKEN || "",
});

export const auth = betterAuth({
    // secret: {
    //     BETTER_AUTH_SECRET: import.meta.env.BETTER_AUTH_SECRET,
    //     BETTER_AUTH_URL: import.meta.env.BETTER_AUTH_URL
    // },
    database: {
        dialect,
        type: "sqlite"
    },
    emailAndPassword: {
        enabled: true,
        autoSignIn: false
    },
});