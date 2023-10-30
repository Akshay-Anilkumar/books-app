const express = require("express");
const { check, validationResult } = require("express-validator");
const router = express.Router();
const Book = require("../models/bookModel");

router.post(
  "/books",
  [
    check("title").notEmpty(),
    check("author").notEmpty(),
    check("summary").notEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: "Please complete all required fields." });
    }

    try {
      const book = new Book(req.body);
      await book.save();
      res.status(201).json(book);
    } catch (error) {
      res
        .status(500)
        .json({ error: "An error occurred while creating the book." });
    }
  }
);

router.get("/books", async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching books." });
  }
});

router.get("/books/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ error: "Book not found." });
    }
    res.status(200).json(book);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching the book." });
  }
});

router.put(
  "/books/:id",
  [
    check("title").notEmpty(),
    check("author").notEmpty(),
    check("summary").notEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: "Please complete all required fields." });
    }

    try {
      const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (!book) {
        return res.status(404).json({ error: "Book not found." });
      }
      res.status(200).json(book);
    } catch (error) {
      res
        .status(500)
        .json({ error: "An error occurred while updating the book." });
    }
  }
);

router.delete("/books/:id", async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) {
      return res.status(404).json({ error: "Book not found." });
    }
    res.json({ message: "Book deleted successfully." });
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while deleting the book." });
  }
});

module.exports = router;
