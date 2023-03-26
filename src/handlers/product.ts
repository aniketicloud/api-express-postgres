import prisma from "../db";

// get all products
export const getProducts = async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      id: req.user.id,
    },
    include: {
      products: true,
    },
  });

  res.json({ data: user.products });
};

// get single product
export const getOneProduct = async (req, res) => {
  // express.urlencoded is turning into an object
  const id = req.param.id;

  const product = await prisma.product.findFirst({
    where: { id: id, belongsToId: req.user.id },
  });

  res.json({ data: product });
};
