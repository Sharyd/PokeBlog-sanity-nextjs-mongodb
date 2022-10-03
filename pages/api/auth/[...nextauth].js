import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { verifyPassword } from "../../../helpers/auth";
import { connectDatabase } from "../../../helpers/db-util";

export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    Providers.Credentials({
      async authorize(credentials) {
        let client;
        try {
          client = await connectDatabase();
        } catch (err) {
          res
            .status(500)
            .json({ message: "Connection to the database failed!" });
          return;
        }

        let user;
        try {
          user = await client.db().collection("users").findOne({
            email: credentials.email,
          });
        } catch (err) {
          res.status(500).json({ message: "Getting user failed!" });
          return;
        }

        if (!user) {
          throw new Error("No user found!");
        }

        const isValid = await verifyPassword(
          credentials.password,
          user.password
        );

        if (!isValid) {
          client.close();
          throw new Error("Could not log you in! Wrong password");
        }
        client.close();
        return { email: user.email };
      },
    }),
  ],
});
