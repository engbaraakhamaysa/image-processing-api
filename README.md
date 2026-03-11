# Image Processing API

## Description
This project is an **Image Processing API** that allows users to dynamically resize images through URL parameters. The API is built using **TypeScript**, **Node.js**, and **Express**.

Users can provide the image name and dimensions through URL query parameters. The image is processed using the **Sharp** library, and the resized image is stored in a **thumb** folder for caching, allowing faster responses for future requests with the same dimensions.

## Technologies Used
Node.js, Express, TypeScript, Sharp, Jasmine, SuperTest.

## Features
- Resize images based on user-provided dimensions.
- Validate query parameters before processing.
- Handle errors such as missing parameters or invalid values.
- Cache resized images to improve performance.

## Available Scripts
- `npm run dev` – Start the development server.
- `npm start` – Start the production server.
- `npm run build` – Compile TypeScript into JavaScript.
- `npm test` – Run tests using Jasmine and SuperTest.
- `npm run lint` – Run ESLint to check code quality.
- `npm run format` – Format the code using Prettier.

## API Endpoint

### Resize Image
GET /api/image

### Example Requests
http://localhost:8000/api/image?filename=cat&width=200&height=200  
http://localhost:8000/api/image?filename=car&width=500&height=500  
http://localhost:8000/api/image?filename=dog&width=1000&height=800  

## Available Images
Images available inside the **images** folder:
- cat
- dog
- car

## How It Works
1. The user sends a request with `filename`, `width`, and `height`.
2. The API checks if a resized version already exists in the **thumb** folder.
3. If the image exists, the cached version is returned.
4. If not, the image is resized using **Sharp**, saved in the **thumb** folder, and then returned to the user.
