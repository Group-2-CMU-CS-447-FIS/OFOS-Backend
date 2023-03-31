import express from "express";
import multer from "multer";
import path from "path";

const router = express.Router();

const checkFileType = (file, cb) => {
    //allow file extenstion
    const fileTypes = /jpeg|jpg|png|gif|svg/;

    const extName = fileTypes.test(
        path.extname(file.originalname).toLowerCase()
    );

    const mimeType = fileTypes.test(file.mimetype);

    if (mimeType && extName) {
        return cb(null, true);
    } else {
        cb(new Error("Error: You can Only Upload Images!!"));
    }
};

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads");
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});

const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => checkFileType(file, cb),
});

// define route to handle file uploads
router.post("/", upload.single("file"), function (req, res, next) {
    if (!req.file) {
        return res.status(400).send("No files were uploaded.");
    }
    res.json({
        message: "File uploaded successfully!",
        file: `/${req.file.path}`,
    });
});

export default router;
