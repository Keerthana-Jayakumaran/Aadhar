var select = require('xml-crypto').xpath
  , dom = require('xmldom').DOMParser
  , SignedXml = require('xml-crypto').SignedXml
  , FileKeyInfo = require('xml-crypto').FileKeyInfo  
  , fs = require('fs')

function signXml(xml, xpath, key, dest)
{
  var sig = new SignedXml()
  sig.signingKey = fs.readFileSync(key)
  sig.addReference("//*[local-name(.)='Auth']", ["http://www.w3.org/2000/09/xmldsig#enveloped-signature"], ["http://www.w3.org/2001/04/xmlenc#sha256"])    
  sig.computeSignature(xml)
  fs.writeFileSync(dest, sig.getSignedXml())
}

function validateXml(xml, key)
{
  var doc = new dom().parseFromString(xml)    
  var signature = select(doc, "/*/*[local-name(.)='Signature' and namespace-uri(.)='http://www.w3.org/2000/09/xmldsig#']")[0]
  var sig = new SignedXml()
  sig.keyInfoProvider = new FileKeyInfo(key)
  sig.loadSignature(signature.toString())
  var res = sig.checkSignature(xml)
  if (!res) console.log(sig.validationErrors)
  return res;
}


var xml = fs.readFileSync('in.xml', {encoding: 'utf8'});

//sign an xml document
signXml(xml, "//*[local-name(.)='auth']","client.pem","result.xml")

console.log("xml signed succesfully")

var signedXml = fs.readFileSync("result.xml").toString()
console.log("validating signature...")

//validate an xml document
if (validateXml(signedXml, "client_public.pem"))
  console.log("signature is valid")
else
  console.log("signature not valid")