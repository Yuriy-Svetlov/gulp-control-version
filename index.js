'use strict';

var  fs = require('fs'),
     Stream = require('stream'),
     glo_name,
     adler32 = require('adler32');




var tew = function (wayfile) {

console.error("NEW TEST - "+wayfile);


watchfs();
function watchfs(){
var w = fs.watch(wayfile, function (event, filename) {
    console.log('event is: ' + event);
       if (filename) {
         console.log('filename provided: ' + filename);
         glo_name = filename;
w.close(); 
         ter();
       } else {
         console.log('filename not provided');
       }
    });
}



  


function hasfilemane(){
  var timeInMs = Date.now();
  var data = new Buffer(''+timeInMs);
  var sum = adler32.sum(data);
  console.log('timeInMs 2 : ' + sum);
  return sum;
}


function ter(){
var namer ="" + glo_name;
  //Определяем есть ли в имени файла хэш
  if(gusorstr(namer) === 10){
      //console.log("Удаляем первые несколько символов");
      namer=namer.substring(9);
      //console.log("Удалили - "+mysay);
    }

  
    fs.rename('src/test/'+glo_name+"", 'src/test/'+hasfilemane()+""+namer+"", function(err) {
    if ( err ) console.log('ERROR: ' + err)
    });
   watchfs();
}


function gusorstr(finame) {
  var a = 0;
        var b = parseInt(finame[0]);
        var v = parseInt(finame[1]);
        for(var i1=0; i1<10; i1++ ){
          if(b === i1){
            for(var i2=0; i2<10; i2++ ){
              if(v === i2){
                console.log("Это хэш");
                i2=10;
                a = 10;
              }
            }
            i1=10;
          }else if(i1 === 9){
            console.log("Это слово");
          }

        }
  return a;
}



var readable = new Stream.Transform({ objectMode: true });
    readable._transform = function (file, unused, callback) {

    //console.log(colors.red('This version will be removed. Download the new version - https://www.npmjs.com/package/gulp-update-module'));

    
     // [START]
     //s------------------------------------------------------------------
     
    
  
    //s------------------------------------------------------------------
    


        
        //....
        //
        // Will be updated
        //
        //....
       return readable;
    }
    return readable;
}
module.exports = tew;