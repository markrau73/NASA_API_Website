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

    var imageMars1 = $('<img src = '+ response.photos[Math.floor(Math.random()*10)].img_src +'>');
    var image1 = $('.first_ul').find('li').eq(0);
    image1.append(imageMars1);

    var imageMars2 = $('<img src = '+ response.photos[Math.floor(Math.random()*10)].img_src +'>');
    var image2 = $('.first_ul').find('li').eq(1);
    image2.append(imageMars2);

    var imageMars3 = $('<img src = '+ response.photos[Math.floor(Math.random()*10)].img_src +'>');
    var image3 = $('.first_ul').find('li').eq(2);
    image3.append(imageMars3);

    var imageMars4 = $('<img src = '+ response.photos[Math.floor(Math.random()*10)].img_src +'>');
    var image4 = $('.second_ul').find('li').eq(0);
    image4.append(imageMars4);

    var imageMars5 = $('<img src = '+ response.photos[Math.floor(Math.random()*10)].img_src +'>');
    var image5 = $('.second_ul').find('li').eq(1);
    image5.append(imageMars5);

    var imageMars6 = $('<img src = '+ response.photos[Math.floor(Math.random()*10)].img_src +'>');
    var image6 = $('.second_ul').find('li').eq(2);
    image6.append(imageMars6);

  }).fail(function(error){
  console.log(error);
})

});
