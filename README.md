# Secure File Storage and Sharing System on Azure

## Overview

The **Secure File Storage and Sharing System** is a full-stack web application that enables users to securely upload, store, and share files using Azure services. This system leverages Azure Blob Storage for file storage and Azure Key Vault for encryption key management. The frontend is built with Angular, while the backend utilizes Node.js and Express.js.

## Features

- **File Upload:** Upload files to Azure Blob Storage through a user-friendly Angular frontend.
- **File Encryption:** Encrypt files using keys stored in Azure Key Vault before uploading.
- **Secure Storage:** Store encrypted files securely in Azure Blob Storage.
- **Frontend Integration:** Angular frontend for interacting with the backend API.
- **Backend API:** Node.js backend for handling file uploads and encryption.

## Technologies Used

- **Azure Blob Storage**: For storing files.
- **Azure Key Vault**: For managing encryption keys.
- **Node.js**: Backend server environment.
- **Express.js**: Web framework for Node.js.
- **Multer**: Middleware for handling file uploads.
- **Angular**: Frontend framework.
- **Axios**: HTTP client for making requests from Angular.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later)
- [Angular CLI](https://angular.io/cli)
- [Azure Subscription](https://azure.microsoft.com/)
- [Git](https://git-scm.com/)

### Setup

#### 1. Clone the Repository

```bash
git clone https://github.com/arjunraj79/SecureFileStorageAndSharingSystemOnAzure.git
cd SecureFileStorageAndSharingSystemOnAzureUsage ```bash



Open the frontend application in your browser.
Use the file input to select a file.
Click "Upload" to upload the file to the backend.
The backend will handle file encryption and upload it to Azure Blob Storage.

2.Deployment
Deploy the backend and frontend to your preferred cloud provider or hosting service. Make sure to update environment variables accordingly for production.

3.Troubleshooting
CORS Issues: Ensure that CORS is enabled on the backend server to allow requests from the frontend.
Authentication Errors: Verify that Azure credentials and Key Vault configurations are correct.
Branch Protection Errors: If you encounter issues pushing to GitHub, ensure you follow the branch protection rules or create a pull request.




**Sourced from MIT License**
