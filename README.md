# Image Processing API

## Description

This project displays images with adjustable resizing capabilities. It was built using TypeScript, Node.js, and Express.

Values ​​are entered via URL, and the image is processed according to the dimensions specified by the user using the Sharp library. The processed image is then stored in a thumb folder.

## Technologies

1- Node.js
2- Express
3- TypeScritp
4- Sharp
5- Jasmin
6- Supertest

## Features

1- Resize Images
2- Validate Query
3- Error Handling
4- Image Caching

## Scripts

1- npm run dev
2- npm run start
3- npm run build
4- npm run test
5- npm run lint
6- npm run format

## API EndPoint

### Resize Image

GET /api/image

Example:
1- http://localhost:8000/api/image?filename=cat&width=200&height=200
2- http://localhost:8000/api/image?filename=car&width=500&height=500
3- http://localhost:8000/api/image?filename=dog&width=1000&height=800

## Name Image inside Images:

1-cat
2-dog
3-car
