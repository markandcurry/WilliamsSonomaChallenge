# Williams-Sonoma Challenge

Code Challenge for Williams-Sonoma

## Getting Started

This was built with Bootstrap and JQuery

### Prerequisites

Bootstrap and JQuery

### Installing

I have Bootstrap and JQuery local becuase I like to do it that way. Since this is using JSON you'll have to build this on a local server or your own domain.

## Running the tests

My biggest problems were in making sure that the application could find the correct data in the JSON file. Using if...in seemed the most helpful.

```
if ('priceRange' in item) {
  console.log(item.priceRange.selling.low);
}
```
Another problem was that the data had variable keys. Coming from a SQL background this seemed like heresy, but I used the above snippet to solve that

```
var itemPrice = '';
if ('priceRange' in item) {
  itemPrice = item.priceRange.selling.low + ' - $' + item.priceRange.selling.high;
}
else {
  itemPrice = item.price.selling;
}
```

Please note that we're looking in item instead of in json or data, the broader data source instead of the individual items.

## Deployment

This should work fine all by itself. I've also included js/crossdomain.js if you manage to have a CORS exception and can load data from westelm.com onto your domain. If you prefer to use variables I've included those, but I've only found it necessary when dealing with variable data.

## Built With

* [jQuery](https://jquery.com/) - Animations and JSON call
* [Bootstrap 3](http://getbootstrap.com/docs/3.3/) - Layout; used bootstrap carousel and modal

## Authors

* **Mark Warren** - *Initial work* - [markandcurry](https://github.com/markandcurry)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* https://stackoverflow.com/questions/15268594/iterate-through-nested-json-object-array
* https://stackoverflow.com/questions/6849802/jquery-getjson-works-locally-but-not-cross-domain
