import prisma from "../db";
import { hashPassword, createJWT, comparePasswords } from "../modules/auth";

export const createUser = async (req, res, next) => {
  try {
    const hash = await hashPassword(req.body.password);
    const newUser = await prisma.user.create({
      data: {
        username: req.body.username,
        password: hash,
      },
    });

    const token = createJWT(newUser);
    res.json({ token });
  } catch (e) {
    e.type = "input";
    console.log(e);
    next(e);
  }
};

export const signIn = async (req, res) => {
  const userExists = await prisma.user.findUnique({
    where: { username: req.body.username },
  });
  const isValid = await comparePasswords(
    req.body.password,
    userExists.password
  );
  if (!isValid) {
    res.status(401);
    res.send("Invalid username or password");
    return;
  }

  const token = createJWT(userExists);
  res.json({ token });
};

//   const userExists = prisma.user.findUnique({
//     where: { id: req.body.username },
//   });

//   if (!userExists) {
//     res.status(401);
//     res.send({ message: "User already exists" });
//     return;
//   }
