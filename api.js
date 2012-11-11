<<<<<<< HEAD
window.ondragover = function(e) {e.preventDefault()}
window.ondrop = function(e) {e.preventDefault(); upload(e.dataTransfer.files[0]); }

//http://api.imgur.com/examples#uploading_js
function upload() {
>>>>>>> 9546b6c526dcbc2b58e509f6f1408ef34e8a2381
   // file is from a <input> tag or from Drag'n Drop
   // Is the file an image?
   if (!file || !file.type.match(/image.*/)) return;
   // It is!
   // Let's build a FormData object
   var fd = new FormData();
   fd.append("image", file); // Append the file
   fd.append("key", "5c3d532d20a7ae2c0e97251cfd6409d1"); // Get your own key: http://api.imgur.com/

   // Create the XHR (Cross-Domain XHR FTW!!!)
   var xhr = new XMLHttpRequest();
   xhr.open("POST", "http://api.imgur.com/2/upload.json"); // Boooom!
   xhr.onload = function() {
      // Big win!
      // The URL of the image is:
      var url = "www.koalastothemax.com?i.";
      url += JSON.parse(xhr.responseText).upload.links.imgur_page);
      url += ".jpg";
      console.log(url);
   }

   // Ok, I don't handle the errors. An exercice for the reader.
   // And now, we send the formdata
   xhr.send(fd);
}