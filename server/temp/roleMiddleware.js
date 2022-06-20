export const roleMiddlewareForCreatingAppointment = (roles) => {
  return (req, res, next) => {
    if (roles.includes(["doctor"]) || roles.includes(["admin"])) {
      next();
    } else {
      return res.status(401).json("You're not authorised");
    }
  };
};

export const adminAndUserOnlyRole = (roles) => {
  return (req, res, next) => {
    if (roles.includes(["admin"])) {
      next()
    } else {
      return res.status(401).json("You're not authorised");
    }
  }
}