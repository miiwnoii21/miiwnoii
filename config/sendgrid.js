module.exports.sendgrid = {

  smtp: 'serversmtp.sendgrid.net',
  user: process.env.SENDGRID_USERNAME || 'app36352024@heroku.com',
  password: process.env.SENDGRID_PASSWORD || 'sgd22moq1978'

};
