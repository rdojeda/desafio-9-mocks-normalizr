import { Router } from "express";
import messagesApi from "../daos/messagesApi.js";

const router = Router();
const api = new messagesApi();

router.get("/", (req, res) => {
  const allMessages = api.getAll();
  res.json(allMessages);
});

router.post("/", (req, res) => {
  const { cant } = req.query;
  let max = cant || 50;
  let messages = api.createMessages(max);
  res.json(messages);
  console.table(messages);
});

export default router;
