import { connectDB } from "../../config/db.config";
import { TodoModel } from "../../models/todo.model";

// deletetodo [POST] request handler
export default async function handler(req, res) {
  // checking the request method
  if (req.method === "POST") {
    // connecting to DB
    connectDB();
    // deleting todo based on id passed in body
    await TodoModel.deleteOne({ id: req.body.id }, {}, (err) => {
      // sending conditional response with status code
      if (err) {
        return res.status(500).json({ success: false });
      } else {
        return res.status(200).json({ success: true });
      }
    });
  }
}
