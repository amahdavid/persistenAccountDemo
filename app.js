const express = require("express");
const app = express();
const PersistentAccount = require("./persistentAccountSchema");

app.use(express.json());


app.post("/registerPersistentAccount", async (req, res) => {
    console.log("POST /registerPersistentAccount")
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
        });
    
        // Save the persistent account to the database
        await persistentAccount.save();
    
        // Return a success response
        res.status(200).json(
            { 
                referenceNumber: req.body.referenceNumber,
                statusCode: "0",
                statusMessage: "success",
                accountReference: req.body.accountReference,
                accountNumber: req.body.accountNumber, 
            });
      } catch (error) {
        // Return an error response
        res.status(500).json({ error: 'An error occurred while creating the persistent account' });
      }
});

module.exports = app;
