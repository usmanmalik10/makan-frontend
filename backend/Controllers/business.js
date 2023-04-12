const router = require("express").Router();
const bodyparser = require("body-parser");
const multer = require("multer");
const path = require("path");
const user = require("../Models/user");
const business = require('../Models/business')
var ObjectId = require("mongodb").ObjectId;


const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, path.join("")  + './upload');
    },
    filename: (req, file, cb) => {
        console.log("*****file", file, "8888888888", path.join("") + './upload');
        cb(null, new Date().toISOString() + (Math.floor(Math.random() * 90000) + 10000) + '-' + file.originalname);
    },
});
console.log("---storage----", storage);
const upload = multer({
    storage: storage,
});
console.log("---------upload-------", upload);
// router.post("/create", upload.array("profile"), async function (req, res) {
//     console.log("Respoonse: ", req.body);
//     console.log("Respoonse1111111111: ", req.files);

//     try {
//         let data = new business({
//             business_type: req.body.business_type,
//             business_category: req.body.business_category,
//             image: `http://localhost:4000/profile/${req.files.filename}`,
//             details: req.body.details,
//             userId: req.body.userId,
//         });
//         ////////////////////////// Insert data Into data base/////////////////////
//         data.save(function (error, result) {
//             //check error
//             if (error) {
//                 throw new Error("something wents wrong")
//             }
//             return res.status(200).json({
//                 status: true,
//                 message: 'Add in Database successfully',
//                 result: result
//             });
//         });
//     } catch (err) {
//         res.status(400).json({
//             status: false,
//             message: err.message
//         })
//     }
// });
/////////////////////////////////////////////////////////////////////
router.get("/getpost/:id", async function (req, res) {
    try {
        const { id } = req.params;
        const {business_type, business_category, } = req.body
        let data = await business.find({$and:[{business_type: business_type}, {business_category:business_category}, {userId:id}] });
        if (data) {
            res.status(200).json({
                message: "Your data is",
                data,
            });
        } else {
            res.status(200).json({
                message: "no data found"
            });
        }
    } catch (error) {
        res.status(400).json({
            status: false,
            message: err.message
        })
    }
});

router.get("/getall", async function (req, res) {
    try {
        const {business_type, business_category, } = req.body
        let data = await business.find({$and:[{business_type: business_type}, {business_category:business_category}] });
        if (data) {
            res.status(200).json({
                message: "Your data is",
                data,
            });
        } else {
            res.status(200).json({
                message: "no data found"
            });
        }
    } catch (error) {
        res.status(400).json({
            status: false,
            message: err.message
        })
    }
});

module.exports = router;
