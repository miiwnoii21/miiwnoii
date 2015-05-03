var sendgrid = require('sendgrid');
var ejs = require('ejs');
var _ = require('lodash');

module.exports = {

  sendContactMail: function(options) {

    var data = _.clone(options);

    var template = "<table width='450' cellpadding='0' cellspacing='0' align='center' border='1' style='font-size:13px; font-family:Tahoma; color:#000; line-height:16px;'> <tr> </tr> <tr> <td>Name</td> <td> <%- options.name %> </td> </tr> <tr> <td>Email</td> <td> <%- options.email %> </td> </tr> <tr> <td>Phone</td> <td> <%- options.phone %> </td> </tr> <tr> <td>Message</td> <td> <%- options.message %> </td> </tr> </table>";
    var html = ejs.render(template, options);

    var smtp = sendgrid(sails.config.sendgrid.user, sails.config.sendgrid.password);
    smtp.send({
      to: sails.config.owner.email,
      from: data.options.email,
      subject: 'Contact from ' + data.options.name,
      html: html
    }, function(err, json) {
      if (err) {
        return console.error(err);
      }

      console.log('send result: ', json);
    });

  }

};
