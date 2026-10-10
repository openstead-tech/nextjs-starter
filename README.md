# Openstead Next.js starter

A small Next.js application with React, a production start command, and a health
route. Connect your repository to [Openstead](https://openstead.tech) or create
this application directly from the Starter Projects catalogue.

Use Node.js 24. Install dependencies with `npm ci`, build with `npm run build`,
and start with `npm start`. The server binds to `0.0.0.0`; set `PORT` to choose
the listening port. The application serves `/` and `/health`.

This template explicitly enables Next.js standalone output. Openstead packages
the generated server, its traced dependencies and static/public assets into a
smaller runtime image. Your complete source and build dependencies remain in
the build stage. `/request` demonstrates server rendering on each request;
`/api/time` is a dynamic server endpoint and `/openstead.svg` is a public asset.

The catalogue starts the first free deployment automatically. If you copy this
template into GitHub, connect your copy as the service's repository source to
deploy your subsequent changes from GitHub.
