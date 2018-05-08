$(document).ready(function() {
      //
      $.ajax({
        url: 'https://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json',
        dataType: 'json',
        jsonpCallback: 'MyJSONPCallback', // specify the callback name if you're hard-coding it
        success: function(data){


      var html = "";

        for(var i = 0; i < data.groups.length; i++)
          {
              var item = data.groups[i];
              // var itemName = item.name;
              // var itemID = item.id;
              // var itemThumbnail = item.thumbnail.href;
              var itemPrice = '';
              if ('priceRange' in item) {
                itemPrice = item.priceRange.selling.low + ' - $' + item.priceRange.selling.high;
              }
              else {
                itemPrice = item.price.selling;
              }

                  html += '<div class="col-lg-4 col-md-6 mb-4">';
                  html += '<div class="card">';
                  html += '<a data-toggle="modal" data-target="#' + item.id + '-modal">';
                  html += '<h4 class="item-header">' + item.name + '</h4>';
                  html += '<img src="' + item.thumbnail.href + '" alt="">';
                  html += '<div class="price-container"><span class="price-text">$' + itemPrice + '</span></div>';
                  html += '</a>';
                  html += '</div>';
                  html += '</div>';

                  html += '<!-- Modal -->';
                  html += '<div id="' + item.id + '-modal" class="modal fade" role="dialog">';
                  html += '<div class="modal-dialog">';
                  html += '<!-- Modal content-->';
                  html += '<div class="modal-content">';
                  html += '<div class="col-lg-12">';
                  html += '<div id="carouselExampleIndicators" class="carousel slide my-4" data-ride="carousel">';
                  html += '<div class="carousel-inner" role="listbox">';

                  // grab the other slides
                    for(var j = 0; j < item.images.length; j++)
                    {
                        // var slideimage = item.images[j].href;
                        html += '<div class="carousel-item ';
                        // add active class to first slide
                          if (j === 0 ) {
                              html += 'active';
                          }
                        html += '">';
                        html += '<img class="d-block img-fluid" src="' + item.images[j].href + '" >';
                        html += '</div>';
                    }


                  html += '</div>';
                  html += '<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">';
                  html += '<span class="carousel-control-prev-icon" aria-hidden="true"></span>';
                  html += '<span class="sr-only">Previous</span>';
                  html += '</a>';
                  html += '<a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">';
                  html += '<span class="carousel-control-next-icon" aria-hidden="true"></span>';
                  html += '<span class="sr-only">Next</span>';
                  html += '</a>';
                  html += '</div>';
                  html += '</div>';
                  html += '<!-- /.col-lg-12 -->';
                  html += '</div>';

                  html += '</div>';
                  html += '</div><!-- /#myModal -->';

          }

        $(".message").html(html);

        }

    });

});
