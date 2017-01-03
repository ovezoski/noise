var bcrypt = require("bcrypt-nodejs");
bcrypt.compare( "ok", "$2a$10$UXFG7fAWSSqCr0rN7LDRMOnF.0t1B8njzaRnJYPz7XqlqVR.GqPs.", function(err, result) {
  if(result){

  console.log("true");

  }else if(!result){

      console.log("false");

    }
  });
