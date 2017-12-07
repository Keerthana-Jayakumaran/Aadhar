var SignedXml = require('xml-crypto').SignedXml	  
		, fs = require('fs')
		, dom = require('xmldom').DOMParser
		, FileKeyInfo = require('xml-crypto').FileKeyInfo  

	var xml = fs.readFileSync('in.xml', {encoding: 'utf8'});
	console.log(xml);
	var sig = new SignedXml()
	sig.canonicalizationAlgorithm = "http://www.w3.org/TR/2001/REC-xml-c14n-20010315";
	sig.addReference("//*[local-name(.)='Auth']", ["http://www.w3.org/2000/09/xmldsig#enveloped-signature"], ["http://www.w3.org/2001/04/xmlenc#sha256"]);
	sig.signingKey = fs.readFileSync("privateKey.pem")
	sig.computeSignature(xml)
	fs.writeFileSync("signed.xml", sig.getSignedXml())