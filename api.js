
// //http://api.imgur.com/examples#uploading_js
// function upload() {
//    // file is from a <input> tag or from Drag'n Drop
//    // Is the file an image?
//    if (!file || !file.type.match(/image.*/)) return;
//    // It is!
//    // Let's build a FormData object
//    var fd = new FormData();
//    fd.append("image", file); // Append the file
//    fd.append("key", "5c3d532d20a7ae2c0e97251cfd6409d1"); // Get your own key: http://api.imgur.com/

//    // Create the XHR (Cross-Domain XHR FTW!!!)
//    var xhr = new XMLHttpRequest();
//    xhr.open("POST", "http://api.imgur.com/2/upload.json"); // Boooom!
//    xhr.onload = function() {
//       // Big win!
//       // The URL of the image is:
//       var url = "www.koalastothemax.com?i.";
//       url += JSON.parse(xhr.responseText).upload.links.imgur_page;
//       url += ".jpg";
//       console.log(url);
//    }

//    // Ok, I don't handle the errors. An exercice for the reader.
//    // And now, we send the formdata
//    xhr.send(fd);
// }


    /* Drag'n drop stuff */
    window.ondragover = function(e) {e.preventDefault()}
    window.ondrop = function(e) {e.preventDefault(); upload(e.dataTransfer.files[0]); }
    function upload(file) {

        /* Is the file an image? */
        if (!file || !file.type.match(/image.*/)) return;

        /* It is! */
        document.body.className = "uploading";

        /* Lets build a FormData object*/
        var fd = new FormData(); // I wrote about it: https://hacks.mozilla.org/2011/01/how-to-develop-a-html5-image-uploader/
        fd.append("image", file); // Append the file
        fd.append("key", "6528448c258cff474ca9701c5bab6927"); // Get your own key http://api.imgur.com/
        var xhr = new XMLHttpRequest(); // Create the XHR (Cross-Domain XHR FTW!!!) Thank you sooooo much imgur.com
        xhr.open("POST", "http://api.imgur.com/2/upload.json"); // Boooom!
        xhr.onload = function() {
            // Big win!

            //imgur API gives back imgur.com/3asds...
            //need to get specific jpg
            //need i.imgur/3asds.jpg (the i. and the .jpg at the end)
            var url = JSON.parse(xhr.responseText).upload.links.imgur_page;
            url = url.insert(7,"i.")+".jpg";
            document.querySelector("#link").href = url;
            document.body.className = "uploaded";
        }
        // Ok, I don't handle the errors. An exercice for the reader.

        /* And now, we send the formdata */
        xhr.send(fd);
    }

String.prototype.insert = function (index, string) {
  if (index > 0)
    return this.substring(0, index) + string + this.substring(index, this.length);
  else
    return string + this;
};