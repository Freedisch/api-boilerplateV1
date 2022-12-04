import * as user from "../user";

describe("user handler", () => {
  it("should create a new user", async () => {
    const req = { body: { username: "Grace", password: "grace2022" } };
    const res = {
      json({ token }) {
        expect(token).toBeTruthy();
      },
    };
    const newUser = await user.createUser(req, res, () => {});
  });
});
