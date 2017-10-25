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



    var random = Math.floor(Math.random()*response.photos.length);

    var imageMars1 = $('<img src = '+ response.photos[random].img_src +'>');
    var image1 = $('.first_ul').find('li').eq(0);
    image1.append(imageMars1);

    var imageMars2 = $('<img src = '+ response.photos[random+1].img_src +'>');
    var image2 = $('.first_ul').find('li').eq(1);
    image2.append(imageMars2);

    var imageMars3 = $('<img src = '+ response.photos[random+2].img_src +'>');
    var image3 = $('.first_ul').find('li').eq(2);
    image3.append(imageMars3);

    var imageMars4 = $('<img src = '+ response.photos[random+3].img_src +'>');
    var image4 = $('.second_ul').find('li').eq(0);
    image4.append(imageMars4);

    var imageMars5 = $('<img src = '+ response.photos[random+4].img_src +'>');
    var image5 = $('.second_ul').find('li').eq(1);
    image5.append(imageMars5);

    var imageMars6 = $('<img src = '+ response.photos[random+5].img_src +'>');
    var image6 = $('.second_ul').find('li').eq(2);
    image6.append(imageMars6);

    var imageMars7 = $('<img src = '+ response.photos[random+6].img_src +'>');
    var image7 = $('.third_ul').find('li').eq(0);
    image7.append(imageMars7);

    var imageMars8 = $('<img src = '+ response.photos[random+7].img_src +'>');
    var image8 = $('.third_ul').find('li').eq(1);
    image8.append(imageMars8);

    var imageMars9 = $('<img src = '+ response.photos[random+8].img_src +'>');
    var image9 = $('.third_ul').find('li').eq(2);
    image9.append(imageMars9);

    var imageMars10 = $('<img src = '+ response.photos[random+9].img_src +'>');
    var image10 = $('.fourth_ul').find('li').eq(0);
    image10.append(imageMars10);

    var imageMars11 = $('<img src = '+ response.photos[random+10].img_src +'>');
    var image11 = $('.fourth_ul').find('li').eq(1);
    image11.append(imageMars11);

    var imageMars12 = $('<img src = '+ response.photos[random+12].img_src +'>');
    var image12 = $('.fourth_ul').find('li').eq(2);
    image12.append(imageMars12);

  }).fail(function(error){
  console.log(error);
})

var button = $('button');
var hiddenGallery = $('.hidden-gallery');

button.on('click', function(){
  hiddenGallery.css('display', 'block');
  button.css('display', 'none');
})


});
