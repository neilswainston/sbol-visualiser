var sboljs = require('sboljs')

function getSBOLDocument(url, callback)
{	
	sboljs.loadRDF(url, function(err, doc)
	{
		callback(doc);
	});
}

module.exports = {
	getSBOLDocument: getSBOLDocument
}