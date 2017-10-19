$(function(){

  var picturesUrl = 'https://images-api.nasa.gov/search?keywords=space,earth,planet';
  var firstSection = $('.first');


  $.ajax({
      url: picturesUrl,
      method: 'GET',
      dataType: 'json'
  }).done(function(response) {
    var images = [];
    images.push(response.collection.items);
    $.each(images, function(index, element){
      var imageUrl = element[Math.ceil((Math.random()*element.length))].links[0].href;
      var backgroundImage = 'url('+imageUrl+')';
      firstSection.css({
        background: backgroundImage,
        backgroundSize: 'cover'
      });
    });
    }).fail(function(error){
    console.log(error);
  })

  var marsUrl = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=JT7zPWwBHu6sJnEJjzNDX5TmpxTqgIRDv08Ncm9Q';


  $.ajax({
    url: marsUrl,
    method: 'GET',
    dataType: 'json'
  }).done(function(response){
    console.log(response.photos[0]);
    var img_src = response.photos[0].img_src;
    var imageMars = $('<img src = '+ img_src +'>');
    var gallery = $('.gallery');
    gallery.append(imageMars);
    }).fail(function(error){
    console.log(error);
  })

});
