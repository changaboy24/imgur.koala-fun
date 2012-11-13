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
            //imgur API gives back imgur.com/3asds...
            //need to get specific jpg
            //need i.imgur/3asds.jpg (the i. and the .jpg at the end)
            var url = JSON.parse(xhr.responseText).upload.links.imgur_page;
            url = url.insert(7,"i.")+".jpg";
            var koala_url = "http://www.koalastothemax.com/?"+url;

            var img = document.createElement("img");
            img.src = url;
            //$('imgur').appendChild(img);
            var imgur = document.getElementById('imgur');
            imgur.appendChild(img);


            var lnk = document.createElement("a");
            lnk.href = koala_url;
            lnk.innerHTML = 'koala';
            var koala = document.getElementById('koala');
            koala.appendChild(lnk);
            //$('koala').appendChild(lnk);
            console.log(lnk);
            console.log(img);
        }

        xhr.send(fd);
    }

String.prototype.insert = function (index, string) {
  if (index > 0)
    return this.substring(0, index) + string + this.substring(index, this.length);
  else
    return string + this;
};