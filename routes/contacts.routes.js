const express = require('express');
const {
  createContact,
  fetchContacts,
  deleteContact,
  deleteContacts,
  updateContact,
} = require('../controllers/contacts.controllers.js');
const {protect} = require('../middlewares/auth.middlewares.js')


const router = express.Router();

router.route('/').post(protect, createContact);
router.route('/').get(protect, fetchContacts);
router.route('/:id').delete(protect, deleteContact).put(protect, updateContact);
router.route('/delete').post(protect, deleteContacts);

module.exports = router