var images = ["https://us.123rf.com/450wm/kinokotagawa/kinokotagawa1712/kinokotagawa171200465/91961518-mom-wearing-short-sleeve-clothes-is-pointing.jpg?ver=6", "https://thumbs.dreamstime.com/b/dad-icon-cartoon-style-dad-icon-cartoon-style-white-background-123080092.jpg", "https://img.freepik.com/free-vector/cute-boy-standing-position-showing-thumb_96037-450.jpg?size=626&ext=jpg"];
var names = ["Mom", "Dad", "Me", "Us"];

var i = 0;

function update(){

  var array_length = images.length - 1;
  var updated_image = images[i];
  var updated_text = names[i];

  document.getElementById("family_book_image").src = updated_image;
  document.getElementById("name_label").innerHTML = updated_text;

  i++;


  if(i>array_length){
  i = 0;
                
  }
}