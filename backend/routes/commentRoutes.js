const express = require('express');
const router = express.Router();
const { createComment, getComments, updateComment, deleteComment } = require('../controllers/commentController');

router.post('/', createComment);

router.get('/', getComments);

router.put('/:id', updateComment);

router.delete('/:id', deleteComment);

module.exports = router;
