function search() {
	var file = $('#choosefile').val();
	//var url = 'https://api.instagram.com/v1/tags/' + query + '/media/recent?client_id=52b557afb1c64d5aa7480bef6c368f3e&callback=foo';
	var apiKey = '5c3d532d20a7ae2c0e97251cfd6409d1';
	//var url = 'http://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=' + apiKey + '&tags=' + query + '&format=json&nojsoncallback=1&per_page=10&page=1';
	//$.getJSON(url, handleRequest);
}
//http://api.imgur.com/examples#uploading_js
function upload() {
   // file is from a <input> tag or from Drag'n Drop
   // Is the file an image?
   var file = $('choosefile').val;
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
      console.log(JSON.parse(xhr.responseText).upload.links.imgur_page);
   }

   // Ok, I don't handle the errors. An exercice for the reader.
   // And now, we send the formdata
   xhr.send(fd);
}