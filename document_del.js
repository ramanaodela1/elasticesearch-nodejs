var client = require('./connection.js');

client.delete({  
  index: 'employeedata',
  id: '1',
  type: 'Employee',
  type:'person'
},function(err,resp,status) {
    console.log(resp);
});