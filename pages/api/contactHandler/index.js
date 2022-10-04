import {
  connectDatabase,
  insertDocument,
  getAllDocuments,
  deleteAllDocument,
} from "../../../helpers/db-util";
const handler = async (req, res) => {
  const { method, body } = req;
  let client;

  try {
    client = await connectDatabase();
  } catch (err) {
    res.status(500).json({ message: "Connection to the database failed!" });
    return;
  }
  if (method === "POST") {
    const { email, name, message } = body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." });
      return;
    }

    const newMessage = {
      email,
      name,
      message,
    };

    let result;

    try {
      result = await insertDocument(client, "messages", newMessage);
      newMessage._id = result.insertedId;
      res
        .status(201)
        .json({ message: "added messages.", messages: newMessage });
    } catch (err) {
      res.status(500).json({ message: "Saving message failed!" });
      return;
    }
  }

  if (method === "GET") {
    try {
      const data = await getAllDocuments(client, "messages");

      res.status(200).json({ messages: data });
    } catch (err) {
      res.status(500).json({ message: "get messages failed!" });
      return;
    }
  }

  if (method === "DELETE") {
    try {
      const result = await deleteAllDocument(client, "messages", {});
      console.log(result);
      res.status(200).json({ message: "messages has been deleted" });
    } catch (err) {
      res.status(500).json({ message: "Deleting messages failed!" });
      return;
    }
  }
  client.close();
};

export default handler;
