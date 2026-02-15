const router = require("express").Router();
const Cart = require("../models/Cart");

// Add item
router.post("/", async (req, res) => {
  const item = await Cart.findOne({ name: req.body.name });

  if (item) {
    item.quantity += 1;
    await item.save();
  } else {
    await Cart.create({ ...req.body, quantity: 1 });
  }

  res.send("Added");
});

// Get cart
router.get("/", async (req, res) => {
  const data = await Cart.find();
  res.json(data);
});

// Update quantity
router.put("/:id", async (req, res) => {
  await Cart.findByIdAndUpdate(req.params.id, {
    quantity: req.body.quantity
  });
  res.send("Updated");
});

// Remove item
router.delete("/:id", async (req, res) => {
  await Cart.findByIdAndDelete(req.params.id);
  res.send("Deleted");
});

module.exports = router;
