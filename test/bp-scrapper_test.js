'use strict';

var bp_scrapper = require('../lib/bp-scrapper.js');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

var scrap = '<tr class="cpc paid is-verified no-group" data-m="2773" data-verified="1"><td class="store diff"><div class="store-info clr"><div class="info"><a data-title="buy-more" data-url="/m/2773/buy-more.html" class="mbanner" title="buy-more" href="/m/2773/buy-more.html"><img alt="buy-more" src="http://i.pstatic.gr/bp_merchants/2773.jpg" width="90" height="30">a><p class="review-stars"><em class="hi">★</em><em class="hi">★</em><em class="hi">★</em><em>☆</em><em>☆</em><span class="number">3</span></p>div>div class="badge"><a title="Απλός συνεργάτης" class="click-badge simple" href="javascript:void(0);">Partner</a></div></div>td>th class="descr">p><a rel="nofollow" class="title no-img" href="/item/15293496/samsung-g850f-galaxy-alpha-charcoal-black-sm-g850fzkedbt.html">Samsung G850F Galaxy Alpha EU - charcoal black </a></p><p class="availability" content="Διαθέσιμο σε 3-7 ημέρες">Διαθέσιμο σε 3-7 ημέρες</p></th>td class="goto"><a rel="nofollow" class="button tomer" title="Κατάστημα" href="/item/15293496/samsung-g850f-galaxy-alpha-charcoal-black-sm-g850fzkedbt.html">579,76€</a><p class="micons">em style="position: relative;" class="ship cond-shipping icon" data-tt-title="6€ για δέματα βάρους έως 2kg">Δωρεάν αντικαταβολή<br>Έξοδα αποστολής<span style="display: none;" class="tt"><ul><li>6€ για δέματα βάρους έως 2kg</li></ul></span></em></p></td></tr><tr class="cpc paid is-verified no-group" data-m="2773" data-verified="1"><td class="store diff"><div class="store-info clr"><div class="info"><a data-title="buy-more" data-url="/m/2773/buy-more.html" class="mbanner" title="buy-more" href="/m/2773/buy-more.html"><img alt="buy-more" src="http://i.pstatic.gr/bp_merchants/2773.jpg" width="90" height="30">a><p class="review-stars"><em class="hi">★</em><em class="hi">★</em><em class="hi">★</em><em>☆</em><em>☆</em><span class="number">3</span></p>div>div class="badge"><a title="Απλός συνεργάτης" class="click-badge simple" href="javascript:void(0);">Partner</a></div></div>td>th class="descr">p><a rel="nofollow" class="title no-img" href="/item/15293496/samsung-g850f-galaxy-alpha-charcoal-black-sm-g850fzkedbt.html">Samsung G850F Galaxy Alpha - charcoal black </a></p><p class="availability" content="Διαθέσιμο σε 3-7 ημέρες">Διαθέσιμο σε 3-7 ημέρες</p></th>td class="goto"><a rel="nofollow" class="button tomer" title="Κατάστημα" href="/item/15293496/samsung-g850f-galaxy-alpha-charcoal-black-sm-g850fzkedbt.html">379,76€</a><p class="micons">em style="position: relative;" class="ship cond-shipping icon" data-tt-title="6€ για δέματα βάρους έως 2kg">Δωρεάν αντικαταβολή<br>Έξοδα αποστολής<span style="display: none;" class="tt"><ul><li>6€ για δέματα βάρους έως 2kg</li></ul></span></em></p></td></tr><tr class="cpc paid is-verified no-group" data-m="2773" data-verified="1">td class="store diff">div class="store-info clr">div class="info"><a data-title="buy-more" data-url="/m/2773/buy-more.html" class="mbanner" title="buy-more" href="/m/2773/buy-more.html"><img alt="buy-more" src="http://i.pstatic.gr/bp_merchants/2773.jpg" width="90" height="30">a><p class="review-stars"><em class="hi">★</em><em class="hi">★</em><em class="hi">★</em><em>☆</em><em>☆</em><span class="number">3</span></p>div>div class="badge"><a title="Απλός συνεργάτης" class="click-badge simple" href="javascript:void(0);">Partner</a></div></div>td>th class="descr">p><a rel="nofollow" class="title no-img" href="/item/15293496/samsung-g850f-galaxy-alpha-charcoal-black-sm-g850fzkedbt.html">Samsung G850F Galaxy Alpha - charcoal black </a></p><p class="availability" content="Διαθέσιμο σε 3-7 ημέρες">Διαθέσιμο σε 3-7 ημέρες</p></th>td class="goto"><a rel="nofollow" class="button tomer" title="Κατάστημα" href="/item/15293496/samsung-g850f-galaxy-alpha-charcoal-black-sm-g850fzkedbt.html">279,76€</a><p class="micons">em style="position: relative;" class="ship cond-shipping icon" data-tt-title="6€ για δέματα βάρους έως 2kg">Δωρεάν αντικαταβολή<br>Έξοδα αποστολής<span style="display: none;" class="tt"><ul><li>6€ για δέματα βάρους έως 2kg</li></ul></span></em></p></td></tr>';

exports['test'] = {
  'correctly matches bestprice product results page': function(test) {
    test.expect(1);
	var res = bp_scrapper.scrap(scrap)
	console.log(res);
    test.equal(3,res.length);
    test.done();
  },
  'non bestprice input wont match anything': function(test) {
    test.expect(1);
    test.equal(bp_scrapper.scrap('This is not a palindrome'), false);
    test.done();
  },
  'eu filter': function(test) {
    test.expect(1);
    var res = bp_scrapper.scrap(scrap);
    var d = bp_scrapper.eu(res);
	console.log("eu result is : " + d);
	test.equal(1,d.length);
    test.done();
  }
};

