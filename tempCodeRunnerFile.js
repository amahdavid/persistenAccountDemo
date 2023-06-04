
const database = '27017';
const collection = 'PersistentAccounts';

// The current database to use.
use(database);

// Create a new collection.
db.createCollection(collection);

// Insert a document into the collection.   
db[collection].insertMany(
    {
        "referenceNumber":"0053459875439143453000",
        "phoneNumber":"08048276159",
        "firstName":"Bellview",
        "lastName": "Walker",
        "accountName": "Bellview Walker",
        "financialIdentificationNumber": "12345454326",
        "accountReference": "123467891334",
        "creditBankId": "3E94C4BC-6F9A-442F-8F1A-8214478D5D86",
        "creditBankAccountNumber":"0000000000",
        "callbackUrl":"http://localhost:9091/test-callback"
      },
      {
        "referenceNumber": "0123456789012345678901",
        "phoneNumber": "09090909090",
        "firstName": "John",
        "lastName": "Doe",
        "accountName": "John Doe",
        "financialIdentificationNumber": "9876543210",
        "accountReference": "567890123456",
        "creditBankId": "AABBCCDD-EEFF-0011-2233-445566778899",
        "creditBankAccountNumber": "1234567890",
        "callbackUrl": "http://localhost:9091/callback"
      },  
      {
        "referenceNumber": "0987654321123456789012",
        "phoneNumber": "08012345678",
        "firstName": "Jane",
        "lastName": "Smith",
        "accountName": "Jane Smith",
        "financialIdentificationNumber": "2468135790",
        "accountReference": "987654321098",
        "creditBankId": "BBCCDDEE-FF00-1122-3344-556677889900",
        "creditBankAccountNumber": "9876543210",
        "callbackUrl": "http://localhost:9091/api/callback"
      },
      {
        "referenceNumber": "2222222222222222222222",
        "phoneNumber": "08080808080",
        "firstName": "Sarah",
        "lastName": "Williams",
        "accountName": "Sarah Williams",
        "financialIdentificationNumber": "8642097531",
        "accountReference": "345678901234",
        "creditBankId": "DDAABBCC-00FF-1122-3344-556677889900",
        "creditBankAccountNumber": "1111111111",
        "callbackUrl": "http://localhost:9091/notify"
      },
      {
        "referenceNumber": "3333333333333333333333",
        "phoneNumber": "09012345678",
        "firstName": "Michael",
        "lastName": "Brown",
        "accountName": "Michael Brown",
        "financialIdentificationNumber": "9876543210",
        "accountReference": "987654321098",
        "creditBankId": "ABCDEF01-2345-6789-0ABC-DEF012345678",
        "creditBankAccountNumber": "1234567890",
        "callbackUrl": "http://localhost:9091/webhook"
      },
      {
        "referenceNumber": "4444444444444444444444",
        "phoneNumber": "08012345678",
        "firstName": "Emily",
        "lastName": "Davis",
        "accountName": "Emily Davis",
        "financialIdentificationNumber": "2468135790",
        "accountReference": "654321098765",
        "creditBankId": "01234567-89AB-CDEF-0123-456789ABCDEF",
        "creditBankAccountNumber": "9876543210",
        "callbackUrl": "http://localhost:9091/api/callback"
      },
      {
        "referenceNumber": "5555555555555555555555",
        "phoneNumber": "07070707070",
        "firstName": "Daniel",
        "lastName": "Miller",
        "accountName": "Daniel Miller",
        "financialIdentificationNumber": "1357924680",
        "accountReference": "890123456789",
        "creditBankId": "DEF01234-5678-9ABC-DEF0-123456789ABC",
        "creditBankAccountNumber": "9999999999",
        "callbackUrl": "http://localhost:9091/callback"
      },
      {
        "referenceNumber": "6666666666666666666666",
        "phoneNumber": "08080808080",
        "firstName": "Olivia",
        "lastName": "Smith",
        "accountName": "Olivia Smith",
        "financialIdentificationNumber": "8642097531",
        "accountReference": "123456789012",
        "creditBankId": "FEDCBA98-7654-3210-FEDC-BA9876543210",
        "creditBankAccountNumber": "1111111111",
        "callbackUrl": "http://localhost:9091/webhook"
      },
      {
        "referenceNumber": "7777777777777777777777",
        "phoneNumber": "09090909090",
        "firstName": "Sophia",
        "lastName": "Johnson",
        "accountName": "Sophia Johnson",
        "financialIdentificationNumber": "2468135790",
        "accountReference": "345678901234",
        "creditBankId": "DCBA9876-5432-10FE-DCBA-9876543210FE",
        "creditBankAccountNumber": "1234567890",
        "callbackUrl": "http://localhost:9091/api/callback"
      }
);
