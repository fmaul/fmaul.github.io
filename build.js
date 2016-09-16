var compressor = require('node-minify');

// Using YUI Compressor for CSS
new compressor.minify({
  type: 'yui-css',
  fileIn: 'assets/css/main.css',
  fileOut: 'assets/css/main.min.css',
  callback: function(err, min){
    console.log(err);
    //console.log(min);
  }
});

new compressor.minify({
  type: 'gcc',
  fileIn: 'assets/js/main.js',
  fileOut: 'assets/js/main.min.js',
  callback: function(err, min){
    console.log(err);
    //console.log(min);
  }
});
