const express = require("express");
const Form = require("../models/form.model");
const asyncHandler = require("../middleware/asyncHandler");

const router = express.Router();

router.post(
  "/",
  asyncHandler(async (req, res) => {
    const form = new Form(req.body);
    await form.save();
    res.status(201).send(form);
  })
);

module.exports = router;