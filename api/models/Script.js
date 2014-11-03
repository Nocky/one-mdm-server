/**
* Script.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    name: { 
      type: 'string',
      defaultsTo: 'Check Script'
    },
    content: { 
      type: 'string',
      defaultsTo: 'df'
    },
    device: {
      model: 'device',
      required: true
    },
    status: {
      type: 'string',
      defaultsTo: 'pending'
    }
  }

};

