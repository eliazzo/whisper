import type { NextApiRequest, NextApiResponse } from "next";
import formidable from 'formidable';


export default async function upload(
  req: NextApiRequest,
  res: NextApiResponse
) {
const form = new formidable.IncomingForm();
form.parse(req, (err, fields, files) => {
    if (err) {
      // Handle any errors that occurred during file upload
      console.error('Error parsing form data:', err);
      return res.status(500).send('File upload failed.');
    }

    // Access the uploaded file details
    const uploadedFile = files.file;

    // Handle the uploaded file (e.g., save it to disk)
    // You can also validate the file, check its type, size, etc.

    // Respond to the client indicating the upload was successful
    res.status(200).send('File uploaded successfully.');
  });
}


