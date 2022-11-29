import prisma from "../db";

//GET all the products
export const getProduct = async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      id: req.user.id,
    },
    include: {
      product: true,
    },
  });
  res.json({ data: user });
};

//GET a single product
export const getOneProduct = async (req, res) => {
  const product = await prisma.product.findFirst({
    where: {
      id: req.params.id,
      belongsToId: req.user.id,
    },
  });
  res.json({ data: product });
};

//Create product
export const createProduct = async (req, res) => {
  const product = await prisma.product.create({
    data: {
      name: req.body.name,
      belongsToId: req.user.id,
    },
  });
  res.json({ data: product });
};

//Update product
export const updateProduct = async (req, res) => {
  const product = await prisma.product.update({
    where: {
      id_belongsToId: {
        id: req.params.id,
        belongsToId: req.user.id,
      },
    },
    data: {
      name: req.body.name,
    },
  });
  res.json({ data: product });
};

//Delete product
export const deleteProduct = async (req, res) => {
  const deleted = await prisma.product.delete({
    where: {
      id_belongsToId: {
        id: req.params.id,
        belongsToId: req.user.id,
      },
    },
  });
  res.json({ data: deleted });
};
