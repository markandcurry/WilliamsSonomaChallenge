$(document).ready(function() {
      //
      $.getJSON("json/shop.json", function(json) {

      var html = "";

        for(var i = 0; i < json.groups.length; i++)
          {
              var item = json.groups[i];
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


                  // create modal for every item
                  html += '<!-- Modal -->';
                  html += '<div id="' + item.id + '-modal" class="modal fade" role="dialog">';
                  html += '<!-- Modal dialog-->';
                  html += '<div class="modal-dialog">';
                  html += '<!-- Modal content-->';
                  html += '<div class="modal-content">';

                  html += '<!-- begin carousel -->';
                  html += '<div class="col-lg-12">';
                  html += '<button type="button" class="close" data-dismiss="modal" aria-label="Close">';
                    html += '<span aria-hidden="true">&times;</span>';
                  html += '</button>';
                  html += '<div id="' + item.id + '-indicators" class="carousel slide my-4" data-ride="carousel">';
                  html += '<ol class="carousel-indicators">';

                  // create an indicator for each available slide
                  for(var k = 0; k < item.images.length; k++)
                  {
                      // var slideimage = item.images[j].href;
                      html += '<li data-target="#' + item.id + '-indicators" data-slide-to="' + k + '" class="';

                      if (k === 0 ) {
                          html += ' active';
                      }
                      html += '"></li>';
                  }

                  html += '</ol>';
                  html += '<div class="carousel-inner" role="listbox">';

                  // grab the other slides
                    for(var j = 0; j < item.images.length; j++)
                    {
                        // var slideimage = item.images[j].href;
                        html += '<div class="carousel-item';
                        if (j === 0 ) {
                            html += ' active';
                        }
                        html += '">';
                        html += '<img class="d-block img-fluid" src="' + item.images[j].href + '" >';
                        html += '</div>';
                    }

                    // run this is there aren't any images
                    if (item.images.length === 0) {
                      // var slideimage = item.images[j].href;
                      html += '<div class="carousel-item active">';
                      html += '<center><em>No Slide Available</em></center>';
                      html += '</div>';
                    }


                  html += '</div>';
                  html += '<a class="carousel-control-prev" href="#' + item.id + '-indicators" role="button" data-slide="prev">';
                  html += '<span class="carousel-control-prev-icon" aria-hidden="true"></span>';
                  html += '<span class="sr-only">Previous</span>';
                  html += '</a>';
                  html += '<a class="carousel-control-next" href="#' + item.id + '-indicators" role="button" data-slide="next">';
                  html += '<span class="carousel-control-next-icon" aria-hidden="true"></span>';
                  html += '<span class="sr-only">Next</span>';
                  html += '</a>';
                  html += '</div>';
                  html += '</div><!-- /.col-lg-12 --><!-- end carousel -->';

                  html += '</div>';
                  html += '</div>';
                  html += '</div><!-- /#myModal -->';





          }

        $(".message").html(html);

    });

});
