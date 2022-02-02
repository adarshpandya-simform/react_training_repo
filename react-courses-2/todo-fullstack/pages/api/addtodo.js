import { connectDB } from "../../config/db.config";
import { TodoModel } from "../../models/todo.model";

// addtodo [POST] request handler
export default async function handler(req, res) {
  // checking the request method
  if (req.method === "POST") {
    // connecting to DB
    connectDB();
    const todoData = JSON.parse(req.body);
    // creating Todo object
    const todo = new TodoModel(todoData);
    // storing todo
    const data = await todo.save((err) => {
      // sending response conditionally with status code
      if (err) {
        return res.status(500).json({ success: false, err });
      } else {
        return res.status(200).json({ success: true, todo });
      }
    });
  }
}
