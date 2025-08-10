/**
 * Express router for handling comment-related API endpoints.
 * 
 * @module routes/api/comments
 */

 /**
    * GET /comments
    * Retrieves all comments from the database.
    * 
    * @name GetComments
    * @function
    * @memberof module:routes/api/comments
    * @param {Object} req - Express request object
    * @param {Object} res - Express response object
    * @returns {Object[]} 200 - An array of comment objects
    * @returns {Object} 500 - Internal server error
    */

 /**
    * DELETE /comments/:id
    * Deletes a comment by its ID.
    * 
    * @name DeleteComment
    * @function
    * @memberof module:routes/api/comments
    * @param {Object} req - Express request object
    * @param {Object} req.params.id - The ID of the comment to delete
    * @param {Object} res - Express response object
    * @returns {void} 204 - No content, comment deleted successfully
    * @returns {Object} 404 - Comment not found
    * @returns {Object} 500 - Internal server error
    */
const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;

//hey copilot, can you help me implement the create comment functionality?

router.get("/comments", async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// add another endpoint to delete a comment
router.delete("/comments/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const deletedComment = await Comment.findByIdAndDelete(id);
        if (!deletedComment) {
            return res.status(404).json({ error: "Comment not found" });
        }
        res.sendStatus(204);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});