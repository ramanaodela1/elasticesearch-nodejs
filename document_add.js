var client = require('./connection.js');

client.index({  
  index: 'employeedata',
  id: '1',
  type: 'Employee',
  body: {
    "name": "Ramana",
    "address": "Karimnagar",
  
  }
},function(err,resp,status) {
    console.log(resp);
});
client.index({  
  index: 'employeedata',
  id: '1',
  type: 'person',
  body: {
    "name": "yogi",
    "address": "Karimnagar",
  
  }
},function(err,resp,status) {
    console.log(resp);
});