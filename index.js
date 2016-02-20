'use strict';
var  fs = require('fs'),
     adler32 = require('adler32');


var tew = function (dname, fname) {
var readable;

  testfilename(dname, fname);
  function testfilename(dir, namefile) {

    fs.readdir(dir, function(err, items) {
      for (var i=0; i<items.length; i++) {
        if(items[i].substring(9, 50) ===  fname){

          fs.unlinkSync(dname+""+items[i]);
        }
      }
    });
  }



  function hasfilemane2(){
      var timeInMs = Date.now();
      var data = new Buffer(''+timeInMs);
      var sum = adler32.sum(data);
    return sum;
  }
var inte2 = hasfilemane2();
readable = inte2;

  return readable;
}
module.exports = exports = tew;




exports.rewrite = function (data){
var g_hash;

  var str = JSON.stringify(data);
  var data_json = JSON.parse(str);

  var resdir = data_json.resdir;
  var namefile = data_json.namefile;
  var dirrefactor = data_json.dirrefactor;
  var namerefactor = data_json.namerefactor;
  var codname = data_json.codname;

  var dirrefactorURL = data.dirrefactor[0];


  if(codname === undefined){
    codname = "utf-8";
  }
  if(namerefactor === undefined ){
    namerefactor = namefile;
  }



  fs.readdir(resdir, function(err, items) {
  //fs--------------------------------------------------  
    if (!err) {
      for (var i=0; i<items.length; i++) {
        //for-------------------------------------------
        if(items[i].substring(9, 50) ===  namefile){
         g_hash = items[i].substring(0, 9);
         

          for(var i=0; data.dirrefactor[1].length > i; i++){
            //for-2-------------------------------------
              var url = data.dirrefactor[0]+""+data.dirrefactor[1][i];

              //[read]
              var datafile = fs.readFileSync(url, codname);
              //fs-rename-----------------------------------
                  var renameMe = namerefactor;
                  var re = RegExp("\\d{9}"+renameMe , "g");
                  datafile = datafile.replace(re, g_hash+""+namerefactor);

                  fs.writeFileSync(url, datafile);
                  datafile = null;
              //fs-rename-----------------------------------
              //[/read]
          //for-2-------------------------------------
          }
        }  
      }
      //for-------------------------------------------------
    }else{
      return console.log(err);
    }    
  //fs-------------------------------------------------- 
  });
};












































   
