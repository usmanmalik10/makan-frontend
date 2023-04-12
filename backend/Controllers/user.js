const router = require('express').Router();
const bodyparser = require('body-parser');
const user = require('../Models/user');
const multer = require("multer");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const nodemailer = require("nodemailer");
var smtpTransport = require('nodemailer-smtp-transport');
const path = require("path");


const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, path.join("")  + '/upload');
    },
    filename: (req, file, cb) => {
        console.log("*****file", file, "8888888888", path.join("") + '/upload');
        cb(null, file.fieldname);
    },
});
const upload = multer({
    storage: storage,
});

router.post('/create', upload.single("profile"), async function (req, res) {
    console.log("*********11111111111*********", req.file);
    // if (!req.file) {
    //     throw new Error('No file uploaded.')
    // }
    console.log("***req.body****", req.body);
    const { email, password, username, role, address } = req.body

    try {
        let isDuplicateEmail = await user.findOne({ "email": email })
        if (isDuplicateEmail) {
            throw new Error("This email already exit")
        }
        const hasedpassword = await bcrypt.hashSync(password, 10)
        const data = new user({
            username,
            email,
            password: hashedPassword,
            profile_image: `http://localhost:4000/profile/${req.file.filename}`,
            role,
            address
        })

        await data.save(function (error, result) {
            if (error) {
                throw new Error("something wents wrong")
            }
            return res.status(200).json({
                status: true,
                message: 'Add new user in Database successfully',
                result: result
            });
        });

    } catch (err) {
        if (err.code === 'ENOENT') {
            return res.status(400).json({
                status: false,
                message: 'File not found.',
            })
        }
        res.status(500).json({
            status: false,
            message: err.message
        })
    }

})
/////////////////////////////////////////////////////////////////////

router.get('/find/:id', async (req, res) => {
    try {
        let data = await user.findOne({ _id: req.params.id })
        if (data) {
            res.status(200).json({
                message: "your data",
                data
            })
        } else {
            res.status(200).json({
                message: "no data are found"
            })
        }
    }
    catch (err) {
        res.status(400).json({
            status: false,
            message: err.message
        })
    }
});
//////////////////////////////////////////////////////////////

router.get('/getUsers/:role', async function (req, res) {
    try{
        let data  = await user.find({role:req.params.role})
        if (data) {
            res.status(200).json({
                message: "your data",
                data
            })
        } else {
            res.status(200).json({
                message: "no data are found"
            })
        }
    }
    catch (err) {
        res.status(400).json({
            status: false,
            message: err.message
        })
    }
})
///////////////////////////////////////////////////////////////
router.post('/login', async (req, res) => {
    const { email, password } = req.body
    try {

        let data = await user.findOne({ "email": email })
        if (data) {
            const isMatch = await bcrypt.compare(password, data.password);
            if (isMatch) {
                const token = jwt.sign(
                    {
                        email: req.body.email,
                        id: data._id,
                        role: data.role
                    },
                    'secret',
                    { expiresIn: "7d" }
                );
                res.status(200).json({
                    message: "login successfull",
                    data: data,
                    token
                })
            } else {
                res.status(400).json({
                    message: "invalid email or password"
                })
            }
        } else {
            res.status(400).json({
                message: "user not found"
            })
        }
    } catch (error) {
        res.status(400).json({
            status: false,
            message: err.message
        })
    }
})
router.post('/forget_password', async (req, res) => {
    console.log("-----", req.body.email);

    const data = await user.findOne({ email: req.body.email })
    console.log("data", data)
    if (!data) {
        res.status(401).json({
            status: false,
            message: 'invalid email'

        })
    }
    else {
        const otpcode = Math.floor((Math.random() * 10000) + 1);

        //console.log(req.body.email, otpcode)
        await sendMailer(req.body.email, otpcode)
        await user.findOneAndUpdate({ email: req.body.email }, { $set: { "otp": otpcode } })

        return res.json({
            status: true,
            message: 'Check your Email'
        })

    }



});
///////////////////////////////////////////////////////////////////////////
router.post('/reset_password', async (req, res) => {
    const { email, password, otp } = req.body
    try {
        const data1 = await user.findOne({ $and: [{ "email": email }, { "otp": otp }] })

        console.log("data1", data1);
        if (data1 == null) {
            res.json({
                status: false,
                message: 'Email or OTP are Invalid...'

            })
        }
        else {
            let data = await user.findOneAndUpdate({ email }, { $set: { password } })
            if (data) {
                res.json({
                    status: true,
                    message: 'password update successfully'
                })
            } else {
                res.json({
                    status: false,
                    message: 'password update fail......'
                })
            }
        }
    } catch (erro) {
        console.log(error)
    }

})
/////////////////////////////////////////////////////////
router.delete('/delete/:userid', async function (req, res) {
    try {
        let data = await user.findOne({ _id: req.body.id })
        if (data.role == 'admin') {
            let data1 = await user.findByIdAndDelete({ _id: req.params.userid })
            if (data1) {
                res.status(401).json({
                    status: true,
                    message: "delete user successfully"
                })
            } else {
                res.status(401).json({
                    status: false,
                    message: "delete user failed"
                })
            }
        } else {
            res.status(401).json({
                status: false,
                message: "you can't do this action"
            })
        }
    } catch (err) {
        res.status(400).json({
            status: false,
            message: err.message
        })
    }
})

async function sendMailer(email, otpcode) {

    let transporter = nodemailer.createTransport(smtpTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',

        auth: {
            user: "ciitlahore383@gmail.com", // generated ethereal user
            pass: "Bakerabu@1234", // generated ethereal password
        },
    }));
    let info = await transporter.sendMail({
        from: 'ciitlahore383@gmail.com', // sender address
        to: email, // list of receivers
        subject: "Email verification code", // Subject line
        text: "Hello world?", // plain text body
        html: `<p> Your Email verfication OTP == ${otpcode}  </p>` // html body
    });

    console.log("Message sent: %s", info.messageId);



    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    return true
}

module.exports = router;