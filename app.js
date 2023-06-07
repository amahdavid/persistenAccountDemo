const express = require("express");
const app = express();
const PersistentAccount = require("./persistentAccountSchema");

app.use(express.json());

app.post("/registerPersistentAccount", async (req, res) => {
  console.log("POST /registerPersistentAccount");
  try {
    // Extract the request body
    const {
      referenceNumber,
      phoneNumber,
      accountName,
      firstName,
      lastName,
      accountReference,
      financialIdentificationNumber,
      email,
      creditBankId,
      creditBankAccountNumber,
      callbackUrl,
      accountNumber,
    } = req.body;

    // Check if the account already exists
    const existingAccount = await PersistentAccount.findOne({ referenceNumber });
    if (existingAccount) {
      return res.status(409).json({ error: 'Persistent account already exists' });
    }

    // Create a new persistent account document
    const persistentAccount = new PersistentAccount({
      referenceNumber,
      phoneNumber,
      accountName,
      firstName,
      lastName,
      accountReference,
      financialIdentificationNumber,
      email,
      creditBankId,
      creditBankAccountNumber,
      callbackUrl,
      accountNumber,
    });

    // Save the persistent account to the database
    await persistentAccount.save();

    // Return a success response
    res.status(200).json({
      referenceNumber: req.body.referenceNumber,
      accountReference: req.body.accountReference,
    });
  } catch (error) {
    // Return an error response
    res.status(500).json({ error: "An error occurred while creating the persistent account" });
  }
});


app.get("/getPersistentAccount/:id", async (req, res) => {
  console.log("GET /getPersistentAccount/:id");
  try {
    // Extract the request parameters
    const { id } = req.params;

    // Find the persistent account in the database
    const persistentAccount = await PersistentAccount.findOne({
      referenceNumber: id,
    });

    // Return a success response
    res.status(200).json({
      referenceNumber: persistentAccount.referenceNumber,
      statusCode: "0",
      statusMessage: "success",
      accountReference: persistentAccount.accountReference,
      accountNumber: "1061871576",
    });
  } catch (error) {
    // Return an error response
    res.status(500).json({
      error: "An error occurred while retrieving the persistent account",
    });
  }
});

app.post("/updatePersistentAccount", async (req, res) => {
  console.log("POST /updatePersistentAccount");
  try {
    // Extract the request body
    const {
      referenceNumber,
      phoneNumber,
      accountName,
      firstName,
      lastName,
      accountReference,
      financialIdentificationNumber,
      email,
      creditBankId,
      creditBankAccountNumber,
      callbackUrl,
    } = req.body;

    // Find the persistent account in the database and update it
    const updatedAccount = await PersistentAccount.findOneAndUpdate(
      { referenceNumber: referenceNumber },
      {
        phoneNumber,
        accountName,
        firstName,
        lastName,
        accountReference,
        financialIdentificationNumber,
        email,
        creditBankId,
        creditBankAccountNumber,
        callbackUrl,
      },
      { new: true }
    );

    // Return a success response
    if(updatedAccount) {
      res.status(200).json({
        referenceNumber: updatedAccount.referenceNumber,
        accountReference: updatedAccount.accountReference,
        phoneNumber: updatedAccount.phoneNumber,
        firstName: updatedAccount.firstName,
        lastName: updatedAccount.lastName,
        accountName: updatedAccount.accountName,
        financialIdentificationNumber: updatedAccount.financialIdentificationNumber,
        email: updatedAccount.email,
        creditBankId: updatedAccount.creditBankId,
        creditBankAccountNumber: updatedAccount.creditBankAccountNumber,
        statusCode: "0",
        statusMessage: "success",
      });
    } else {
      res.status(404).json({
        error: "The persistent account does not exist",
      });
    }
  } catch (error) {
    // Return an error response
    res.status(500).json({
      error: "An error occurred while updating the persistent account",
    });
  }
});

app.delete("/deletePersistentAccount/:id", async (req, res) => {
  console.log("DELETE /deletePersistentAccount/:id");
  try {
    // Extract the request parameters
    const { id } = req.params;

    // Find the persistent account in the database and delete it
    const deletedAccount = await PersistentAccount.findOneAndDelete({
      referenceNumber: id,
    });

    // Return a success response
    if(deletedAccount) {
      res.status(200).json({
        referenceNumber: deletedAccount.referenceNumber,
        accountReference: deletedAccount.accountReference,
        reason: "off-boarded account"
      });
    } else {
      res.status(404).json({
        error: "The persistent account does not exist",
      });
    }
  } catch (error) {
    // Return an error response
    res.status(500).json({
      error: "An error occurred while deleting the persistent account",
    });
  }
});
      

module.exports = app;
