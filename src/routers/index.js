import productRouter from "./doctorsRoute.js";

const configureRouters = (app) => {
  app.use("/doctors", productRouter); // path, route
};

export default configureRouters;
