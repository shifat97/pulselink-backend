import doctorRouter from "./doctorsRoute.js";
import appointmentRouter from "./appointmentRoute.js";

const configureRouters = (app) => {
  app.use("/doctors", doctorRouter); // path, route
  app.use("/appointments", appointmentRouter);
};

export default configureRouters;
