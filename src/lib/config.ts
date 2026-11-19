export const env = process.env.VERCEL_ENV ?? "development";
export const commit = process.env.VERCEL_GIT_COMMIT_SHA?.slice(0, 7) ?? "local";
