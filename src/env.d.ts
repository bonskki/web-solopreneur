type Runtime = import("@astrojs/cloudflare").Runtime<Env>;

declare namespace App {
	interface Locals extends Runtime {}
}

interface ImportMetaEnv {
    readonly TURSO_DATABASE_URL: string;
    readonly TURSO_AUTH_TOKEN: string;
	readonly BETTER_AUTH_SECRET: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}