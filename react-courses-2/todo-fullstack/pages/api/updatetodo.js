import { connectDB } from "../../config/db.config";
import { TodoModel } from "../../models/todo.model";

// updatetodo [POST] request handler
export default async function handler(req, res) {
  // checking the request method
  if (req.method === "POST") {
    // connecting to DB
    connectDB();
    // updating todo based on id passed in body
    await TodoModel.updateOne(
      { id: req.body.id },
      { completed: req.body.completed },
      {},
      (err, response) => {
        // sending conditional response with status code
        if (err) {
          return res.status(500).json({ success: false, err });
        } else {
          return res.status(200).json({ success: true, response });
        }
      }
    );
  }
}
