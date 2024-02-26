import express from "express";
import { sendSuccess, sendError } from "../utils/responses.js";
import { SUCCESSFUL, BAD_REQUEST } from "../config/messages.js";
import Todo from "../models/Todo.js";

const router = express.Router();

router.post("/todos", (req, res) => {
  const todo = new Todo({
    text: req.body.text,
  });

  todo
    .save()
    .then((result) => {
      sendSuccess(res, SUCCESSFUL, result);
    })
    .catch((e) => {
      sendError(res, BAD_REQUEST, e);
    });
});

router.get("/", (req, res) => {
  Todo.find({}, { __v: 0 })
    .then((todos) => {
      console.log(todos);
      sendSuccess(res, SUCCESSFUL, todos);
    })
    .catch((e) => {
      sendError(res, BAD_REQUEST, e);
    });
});

router.get("/health", (req, res) => {
  res.json("Helath is fine.");
});
//it's a prefix before api it is useful when you have many modules and you want to
//differentiate b/w each module you can use this technique
export default router;
