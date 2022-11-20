import { isDataView } from "util/types";
import prisma from "../db";

//GET Updates
const getUpdate = async (req, res) => {
  const update = await prisma.product.findMany({
    where: {
      belongsToId: req.user.id,
    },
    include: {
      updates: true,
    },
  });
  res.json({ data: update });
};

//GET SINGLE UPDATE
const getOneUpdate = async (req, res) => {
  const update = await prisma.update.findFirst({
    where: {
      id: req.params.id,
      //productId: req.product.id,
    },
  });
  res.json({ data: update });
};

//Update Update
const Update = async (req, res) => {
  const update = await prisma.update.update({
    where: {
      id: req.params.id,
      productId: req.product.id,
    },
    data: {
      title: req.body.title,
      body: req.body.body,
      status: req.body.status,
    },
  });

  res.json({ data: update });
};

//Delete update
const deleteUpdate = (req, res) => {
  const deleted = prisma.update.delete({
    where: {
      id: req.params.id,
      productId: req.product.id,
    },
  });
};
