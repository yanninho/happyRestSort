'use strict';
/**
* Extract sort from request
* Example : /test?sort=name,username&desc=username give req.happyRest.sort = ["name","-username"]
**/
var _ = require('underscore');

module.exports = {
   extractSort: function(req, res, next) {
    if (!req.happyRest) req.happyRest = {};
    if (req.happyRest.sort) return next();

    req.happyRest.sort = {};

    var sorts = req.query.sort;
    var desc = req.query.desc;
    
    if (sorts) {
		if (!_.isUndefined(desc)) {
			req.happyRest.sort = _.map(sorts.split(','), function(sort) {													
				if (_.contains(desc.split(','), sort)) {						
					sort = '-' + sort;
				}
				return sort;
			});				
		}
		else {
			req.happyRest.sort = sorts.split(',');
		}
	}
    next();
  }
};
