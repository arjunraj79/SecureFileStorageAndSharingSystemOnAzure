const express = require('express');
const multer = require('multer');
const { BlobServiceClient } = require('@azure/storage-blob');
const { DefaultAzureCredential } = require('@azure/identity');
const { KeyClient } = require('@azure/keyvault-keys');
require('dotenv').config();
const cors = require('cors');

const app = express();
const upload = multer();


// Load Azure credentials from .env
const AZURE_STORAGE_ACCOUNT = process.env.AZURE_STORAGE_ACCOUNT;
const BLOB_CONTAINER = process.env.BLOB_CONTAINER;
const AZURE_KEY_VAULT_URL = process.env.AZURE_KEY_VAULT_URL;

// Initialize Blob Service Client
const blobServiceClient = new BlobServiceClient(
  `https://${AZURE_STORAGE_ACCOUNT}.blob.core.windows.net`,
  new DefaultAzureCredential()
);

// Initialize Key Vault Client
const keyClient = new KeyClient(AZURE_KEY_VAULT_URL, new DefaultAzureCredential());

app.get('/', (req, res) => {
  res.send('Azure Secure File Storage System');
});

// Endpoint to upload files
app.post('/upload', upload.single('file'), async (req, res) => {
  try {
    const file = req.file;
    const containerClient = blobServiceClient.getContainerClient(BLOB_CONTAINER);
    const blockBlobClient = containerClient.getBlockBlobClient(file.originalname);

    // Encrypt the file here using a key from Azure Key Vault (To be implemented in next steps)
    
    await blockBlobClient.upload(file.buffer, file.size);
    res.send('File uploaded successfully.');
  } catch (error) {
    console.error('Error uploading file:', error);
    res.status(500).send('Error uploading file.');
  }
});

app.listen(4200, () => {
  console.log('Server running on port 3000');
});
app.use(cors());  // Enable CORS for all routes

app.set('view engine', 'ejs');
app.set('view engine', 'pug');
