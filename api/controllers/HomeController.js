/**
 * HomeController
 *
 * @description :: Server-side logic for managing homes
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

  index: function(req, res, next) {
    return res.view('home/index');
  },

  postContact: function(req, res, next) {

    ContactService.sendForm(req, function(err, contact) {
      if (err) return res.badRequest();
      else {
        EmailService.sendContactMail({
          options: contact
        });

        return res.redirect('/');
      }
    });

  }
};
