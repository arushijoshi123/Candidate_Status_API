const express = require("express");
const userRouter = express.Router();
const {
  candidateStatus,
  addUser,
  addCandidate,
  updateStatus,
  fetchStatus,
} = require("../Controllers/userController");

userRouter.post("/add", addUser);
userRouter.post("/addCandidate", addCandidate);
userRouter.post("/updateStatus", updateStatus);
userRouter.post("/fetchStatus", fetchStatus);
module.exports = userRouter;
