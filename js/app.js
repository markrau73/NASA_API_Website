$(function(){

  var picturesUrl = 'https://images-api.nasa.gov/search?keywords=space,earth,planet';
  var firstSection = $('#first');

  $.ajax({
      url: picturesUrl,
      method: 'GET',
      dataType: 'json'
  }).done(function(response) {
    var images = [];
    images.push(response.collection.items);
    $.each(images, function(index, element){
      var imageUrl = element[Math.ceil((Math.random()*element.length))].links[0].href;
      var backgroundImage = 'url('+imageUrl+')'
      firstSection.css({
        background: backgroundImage,
        backgroundSize: 'cover'
      });
    });
    }).fail(function(error){
    console.log(error);
  })


});
