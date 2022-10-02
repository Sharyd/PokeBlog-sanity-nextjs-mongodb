import cookie from "cookie";

const handler = (req, res) => {
  if (req.method === "POST") {
    const { username, password } = req.body;
    if (
      username === process.env.NEXT_PUBLIC_ADMIN_USERNAME &&
      password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD
    ) {
      res.setHeader(
        "Set-Cookie",
        cookie.serialize("token", process.env.NEXT_PUBLIC_TOKEN, {
          maxAge: 60 * 60,
          sameSite: "strict",
          path: "/",
        })
      );
      res.status(200).json({ message: "Successfully login" });
    } else {
      res.status(400).json("Wrong password or username!");
    }
  }
};

export default handler;
