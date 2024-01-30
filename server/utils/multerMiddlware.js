const multer = require('multer');


// upload multiple file
const uploadMultply = multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, 'uploads/');
        },
        filename: (req, file, cb) => {
            cb(null, file.originalname);
        }
    }),
   
}).array('image',2);
module.exports = {
    uploadMultply
}