const mongoose = require("mongoose");

const persistentAccountSchema = new mongoose.Schema({
  referenceNumber: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  accountName: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  accountReference: {
    type: String,
    required: true,
  },
  financialIdentificationNumber: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: false,
  },
  creditBankId: {
    type: String,
    required: false,
  },
  creditBankAccountNumber: {
    type: String,
    required: false,
  },
  callbackUrl: {
    type: String,
    required: false,
  },
});

const PersistentAccount = mongoose.model(
  "PersistentAccount",
  persistentAccountSchema
);

module.exports = PersistentAccount;
