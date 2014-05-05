'use strict';

var _ = require('underscore');

global.userFactory = {
  create: function(){
    var user = {};
    user.name = _.sample(['Thomas', 'Edi', 'Jonas', 'Sascha', 'Jeremy', 'Batiste', 'Andy', 'Sebastian']);
    user.email = user.name.toLowerCase() + '@local.ch';
    user.password = 'aPassword123';
    return user;
  }
};