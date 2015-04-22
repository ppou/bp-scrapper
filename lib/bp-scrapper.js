/*
 * bp-scrapper
 * https://github.com/p.poularakis/bp-scrapper
 *
 * Copyright (c) 2015 ppou
 * Licensed under the MIT license.
 */

'use strict';

var request = require('request')
var cheerio = require('cheerio')
var _ = require('highland')

var isModelEU = function (x){
	return x.title.indexOf("EU") > -1 
}

exports.eu = function(data){
	console.log("eu " + data)
	return _(scrap(data)).find(isModelEU)
}


var scrap = function(data) {
  var res = []
  var $ = cheerio.load(data)
  $('tr.cpc').each(function(i){
    res.push({id:i, title:$(this).find('a.title').text(), shop:$(this).find('div.store-info div.info a').attr('title'), price: $(this).find('a.button').text()})
})
	return res
};

exports.scrap = scrap;