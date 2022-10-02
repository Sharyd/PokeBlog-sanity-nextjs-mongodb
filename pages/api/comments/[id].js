import {
  connectDatabase,
  insertDocument,
  getAllDocumentsAndFilter,
} from "../../../helpers/db-util";
async function handler(req, res) {
  const id = req.query.id;
  let client;

  try {
    client = await connectDatabase();
  } catch (err) {
    res.status(500).json({ message: "Connection to the database failed!" });
    return;
  }

  if (req.method === "POST") {
    const { email, name, text } = req.body;

    if (
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !text ||
      text.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." });
      client.close();
      return;
    }
    const newComment = {
      email,
      name,
      text,
      id,
    };

    let result;
    try {
      result = await insertDocument(client, "comments", newComment);
      newComment._id = result.insertedId;
      res.status(201).json({ message: "Added comment.", comment: newComment });
    } catch (err) {
      res.status(500).json({ message: "Inserting comment failed!" });
    }

    console.log(result);
  }

  if (req.method === "GET") {
    try {
      const documents = await getAllDocumentsAndFilter(
        client,
        "comments",
        { _id: -1 },
        { id: id }
      );
      res.status(200).json({ comments: documents });
    } catch (err) {
      res.status(500).json({ message: "Getting comments failed." });
    }
  }

  client.close();
}

export default handler;
