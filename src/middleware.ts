import { auth } from "../auth"; // import your Better Auth instance
import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {
    const isAuthed = await auth.api
        .getSession({
            headers: context.request.headers,
        });
    if (context.url.pathname === "/profile" && !isAuthed) {
        return context.redirect("/sign-in");
    }
    return next();
});