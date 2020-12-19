const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  about: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  avatar: {
    type: String,
    required: true,
    validate: {
      validator(v) {
        return /https?:\/\/(www)?[\-.~:\/?#\[\]@!$&'()*+,;=\w]+#?\b/gi.test(v);
      },
      message: 'Wrong URL',
    }
  }

});

module.exports = mongoose.model('user', userSchema);