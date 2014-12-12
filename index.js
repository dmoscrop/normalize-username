var unorm = require('unorm'),
	foldCase = require('fold-case');

module.exports = function normalize(username) {
	var normalized = foldCase(unorm.nfkd(username));
	
	if (normalized === foldCase(unorm.nfkd(normalized))) {
		return normalized;
	}
	
	throw new Error('Normalization function was not idempotent. This is a bug with unorm or fold-case and you should shut down everything.');
};
