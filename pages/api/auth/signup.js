import { hashPassword } from "../../../helpers/auth";
import { connectDatabase } from "../../../helpers/db-util";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const { email, password } = data;

    let client;

    if (
      !email ||
      !email.includes("@") ||
      !password ||
      password.trim().length < 7
    ) {
      res.status(422).json({
        message:
          "Invalid input - password should also be at least 7 characters long.",
      });
      return;
    }

    try {
      client = await connectDatabase();
    } catch (err) {
      res.status(500).json({ message: "Connection to the database failed!" });
      return;
    }
    let existingUser;
    const db = client.db();

    try {
      existingUser = await db.collection("users").findOne({ email: email });

      res.status(200).json({ message: "success" });
    } catch (err) {
      res.status(500).json({ message: "get user failed!" });
      return;
    }

    if (existingUser) {
      res.status(422).json({ message: "User exists already!" });
      client.close();
      return;
    }

    try {
      const hashedPassword = await hashPassword(password);

      const result = await db.collection("users").insertOne({
        email: email,
        password: hashedPassword,
      });

      res.status(201).json({ message: "Created user!" });
      client.close();
    } catch (err) {
      res.status(500).json({ message: "hashing password failed" });
      return;
    }
  }
}

export default handler;
