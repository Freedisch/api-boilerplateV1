import prisma from "../db";

//GET Updates
export const getUpdate = async (req, res) => {
  const products = await prisma.product.findMany({
    where: {
      belongsToId: req.user.id,
    },
    include: {
      updates: true,
    },
  });
  const updates = products.reduce((allUpdates, products) => {
    return [...allUpdates, ...products.updates];
  }, []);
  if (!products) {
    return res.status(400).json({ message: "Empty" });
  }
  res.json({ data: updates });
};

//GET SINGLE UPDATE
export const getOneUpdate = async (req, res) => {
  const update = await prisma.update.findFirst({
    where: {
      id: req.params.id,
    },
  });
  res.json({ data: update });
};

//Create Update
export const createUpdate = async (req, res) => {
  const product = await prisma.product.findUnique({
    where: {
      id: req.body.productId,
    },
  });

  if (!product) {
    return res.json({ message: `nope` });
  }

  const update = await prisma.update.create({
    data: req.body,
  });

  res.json({ data: update });
};

//Update Update
export const Update = async (req, res) => {
  const products = await prisma.product.findMany({
    where: {
      belongsToId: req.user.id,
    },
    include: {
      updates: true,
    },
  });

  const updates = products.reduce((allUpdates, product) => {
    return [...allUpdates, ...product.updates];
  }, []);

  const match = updates.find((update) => update.id === req.params.id);

  if (!match) {
    return res.json({ message: "nope" });
  }

  const updated = await prisma.update.update({
    where: {
      id: req.params.id,
    },
    data: req.body,
  });

  res.json({ data: updated });
};

//Delete update
export const deleteUpdate = async (req, res) => {
  const products = await prisma.product.findMany({
    where: {
      belongsToId: req.user.id,
    },
    include: {
      updates: true,
    },
  });

  const updates = products.reduce((allUpdates, product) => {
    return [...allUpdates, ...product.updates];
  }, []);

  const match = updates.find((update) => update.id === req.params.id);
  if (!match) {
    return res.json({ message: "update not found" });
  }
  const deleted = await prisma.update.delete({
    where: {
      id: req.params.id,
    },
  });
  res.json({ data: deleted });
};
