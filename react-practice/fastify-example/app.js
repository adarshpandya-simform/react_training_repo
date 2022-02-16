import fastify from "fastify";
import fastifyCors from "fastify-cors";
import { connectDB } from "./config/db.config.js";
import { routes } from "./routes/routes.js";

// connecting to DB
connectDB();

// defining the port
const PORT = process.env.PORT || 2000;
// initalizing fastify with logger:on
const app = fastify({ logger: true });

// enabling cors support for fastify
app.register(fastifyCors);

// routing for different routes
routes.forEach((route) => {
  // routing through individual route
  app.route(route);
});

// making server listen on PORT : 2000
app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
    process.exit(1);
  } else {
    console.log(`app is running on port: {${PORT}}`);
  }
});
