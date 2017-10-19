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
    console.log(response.photos);

    var image1_src = response.photos[0].img_src;
    var imageMars1 = $('<img src = '+ image1_src +'>');
    var image1 = $('.first_ul').find('li').eq(0);
    image1.append(imageMars1);

    var image2_src = response.photos[6].img_src;
    var imageMars2 = $('<img src = '+ image2_src +'>');
    var image2 = $('.first_ul').find('li').eq(1);
    image2.append(imageMars2);

    var image3_src = response.photos[18].img_src;
    var imageMars3 = $('<img src = '+ image3_src +'>');
    var image3 = $('.first_ul').find('li').eq(2);
    image3.append(imageMars3);

    var image4_src = response.photos[25].img_src;
    var imageMars4 = $('<img src = '+ image4_src +'>');
    var image4 = $('.second_ul').find('li').eq(0);
    image4.append(imageMars4);

    var image5_src = response.photos[65].img_src;
    var imageMars5 = $('<img src = '+ image5_src +'>');
    var image5 = $('.second_ul').find('li').eq(1);
    image5.append(imageMars5);

    var image6_src = response.photos[170].img_src;
    var imageMars6 = $('<img src = '+ image6_src +'>');
    var image6 = $('.second_ul').find('li').eq(2);
    image6.append(imageMars6);

    }).fail(function(error){
    console.log(error);
  })

});
