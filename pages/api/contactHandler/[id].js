import { ObjectId } from "bson";

import { connectDatabase, deleteDocument } from "../../../helpers/db-util";
const handler = async (req, res) => {
  const {
    method,
    query: { id },
  } = req;

  let client;

  try {
    client = await connectDatabase();
  } catch (err) {
    res.status(500).json({ message: "Connection to the database failed!" });
    return;
  }

  if (method === "DELETE") {
    try {
      const result = await deleteDocument(client, "messages", {
        _id: ObjectId(id),
      });
      console.log(result);
      res.status(200).json({ message: "message has been deleted" });
    } catch (err) {
      res.status(500).json({ message: "get messages failed!" });
      return;
    }
  }
};

export default handler;
