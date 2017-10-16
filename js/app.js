$(function(){

  var picturesUrl = 'https://images-api.nasa.gov/search?keywords=space,earth,planet';
  var firstSection = $('.first');
  var marsUrl = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=JT7zPWwBHu6sJnEJjzNDX5TmpxTqgIRDv08Ncm9Q';

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
