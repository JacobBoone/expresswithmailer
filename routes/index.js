var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'JACOB IS KING' });
});


// router.post('/send', function(req, res, next){
// 	var transporter = nodemailer.createTransport({
// 		service: 'Gmail',
// 		auth: {
// 			user: 'onyxholisticservices@gmail.com',
// 			pass: 'xjbjxjvtbtitwmtt'
// 		}
// 	})

//     var mailOptions = {
//         from: '<onyxholisticservices@gmail.com>',
//         to: 'onyxholisticservices@gmail.com',
//         subject: 'Contact Form',
//         text: 'Name: ' + req.body.name + '\n' + 'Email: ' + req.body.email + '\n' + req.body.message
//     };

//     transporter.sendMail(mailOptions, function(error, info){
//     	if (error) {
//             res.render('index', {
//                 title: 'Contact Error',
//                 msg: 'Error occured, message not sent.',
//                 err: true,
//                 page: 'index'
//             });
//         } else {
//             res.render('index', {
//                 title: 'Contact Sent...',
//                 msg: 'Message sent! Thank you.',
//                 err: false,
//                 page: 'index'
//             });
//         }
//     });
// });


module.exports = router;
