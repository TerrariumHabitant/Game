require('babel-register')({
    presets: [ 'es2015' ]
 });

 require("babel-core").transform("code", {
    plugins: ["transform-es2015-spread"]
  });
 
 require('./game');