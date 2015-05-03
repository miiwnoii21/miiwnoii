module.exports = {

    sendForm: function(req, cb) {

        var params = req.body || req.allParams();

        Contact.create({
            name: params.name,
            email: params.email,
            phone: params.phone,
            message: params.message
        }, cb);
    }

};
