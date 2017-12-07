var builder = require('xmlbuilder');
var fs = require('fs');
var xml = builder.create('Auth',{version:'1.0',encoding :'utf-8'})
.att({ 'xmlns': 'http://www.uidai.gov.in/authentication/uid-auth-request/1.0','ver':'1.6','tid':'public','ac':'public','sa':'public','lk':'MKg8njN6O+QRUmYF+TrbBUCqlrCnbN/Ns6hYbnnaOk99e5UGNhhE/xQ=','uid':'999999990019','txn':'GEO.11051880'})
.ele('Skey',{'ci':'20200916'},'Nc6DrZKFk1oQXxfgnFUl0mmtYYIPl0RGaFd2oINkpChU1++xdddMx6Dlbz6mEYs3IyzChGjRXN5/al9r0runFX8LspTfMchwpxaaDIOyIUguBoYmPUqJDqTQcwey6NtcTJWFSgOvBg+omUkdbK/9GOQ5KWWrN+E0A9JN0IPU4IJqJZmsA6ETZlVoZteYtoMIUcv53qmxNPOEmJ3s4BC3ppHRRWRFMUp/eW7DFJ33W+uInZB6yekKE0dz8fYeo03w2JUT1wlafL7aseb04nv5tNEbllHWafmbMpbv2pXKr+WPgytjrygt1LagGqF4a5Mr/UTNwsy4m/YwlkWN0QcYVw==').up()
.ele('Uses',{'otp':'n','pin':'n','bio':'n','pa':'n','pfa':'n','pi':'y'}).up()
.ele('Data',{'type':'X'},'YOn05vg5qMwElULpEmdiH0j6rM1XWcbQN0n+CFNQeazouCgjyPBH/a2SwbFgq/fFCYUm+the8gQyYC36VO49NLcNcD7WdMhweoiDYgJoCX/t87Kbq/ABoAetfX7OLAck/mHrTmw8tsfJgo4xGSzKZKr+pVn1O8dDHJjwgptySr7vp2Ntj6ogu6B905rsyTWw73iMgoILDHf5soM3Pvde+/XW5rJD9AIPQGhHnKirwkiAgNIhtWU6ttYg4t6gHHbZ0gVBwgjRzM3sDWKzK0EnmA==').up()
.ele('Hmac','xy+JPoVN9dsWVm4YPZFwhVBKcUzzCTVvAxikT6BT5EcPgzX2JkLFDls+kLoNMpWe').up()
.ele('Signature',{'xmlns':'http://www.w3.org/2000/09/xmldsig#'})
.ele('SignedInfo').ele('CanonicalizationMethod',{'Algorithm':'http://www.w3.org/TR/2001/REC-xml-c14n-20010315'}).up()
.ele('SignatureMethod',{'Algorithm':'http://www.w3.org/2000/09/xmldsig#rsa-sha1'})
.ele('Reference',{'URI':'#_0'})
.ele('Transforms').ele('Transform',{'Algorithm':'http://www.w3.org/2000/09/xmldsig#enveloped-signature'}).up().up() //Transforms
.ele('DigestMethod',{'Algorithm':'http://www.w3.org/2001/04/xmlenc#sha256'}).up()
.ele('DigestValue','h+QKEbANmvyq0oY3nVb95LGopWuOLkyFqtvDgvSD3t8=').up()
.up() //reference
.up() // signed info
 .ele('SignatureValue','d1rLu5htO0kZwXqrb2mQiFkANYHSdc+dELbCXbW9Pg9194BpFo2ylJw14Gmj78D1PccD78ZCygd0MQ/vB+dapsBSl3PeOoOasfOUTGgWSzcN/FPzuixkRuMoG9BwcG5RrtPBsQrmwr9eZXfXcVChviq6rDNfRxl9jk8BTaHxuy4T8EmDif3TYXuQPQ5WirME1K+74+0mOTbNsWPQlQAN1RbUm0CcL0v68PRPd/7MsocR8GClb5ucE//dvezkU3lRGkb/a1tI/BF4Re8PJEbp12JQAvtxCB9MKF7YaaYP5kJdlBfmY0yJKKcd0TNURSGvfnrRM1lrEq38MlPSxrJBIg==').up()
 .ele('KeyInfo')
 .ele('X509Data')
.ele('X509SubjectName','C=IN,ST=KA,L=Bangalore,O=Public AUA,OU=Staging Services,CN=Public AUA for Staging Services').up()
 .ele('X509Certificate','MIIDuDCCAqCgAwIBAgIGA7J+eqryMA0GCSqGSIb3DQEBBQUAMIGNMQswCQYDVQQGEwJJTjELMAkGA1UECBMCS0ExEjAQBgNVBAcTCUJhbmdhbG9yZTETMBEGA1UEChMKUHVibGljIEFVQTEZMBcGA1UECxMQU3RhZ2luZyBTZXJ2aWNlczEtMCsGA1UEAxMkUm9vdCBQdWJsaWMgQVVBIGZvciBTdGFnaW5nIFNlcnZpY2VzMB4XDTE2MDUyNDE0NDAzMVoXDTIwMDUyNDE0NDAzMVowgYgxCzAJBgNVBAYTAklOMQswCQYDVQQIEwJLQTSMBAGA1UEBxMJQmFuZ2Fsb3JlMRMwEQYDVQQKEwpQdWJsaWMgQVVBMRkwFwYDVQQLExBTdGFnaW5nIFNlcnZpY2VzMSgwJgYDVQQDEx9QdWJsaWMgQVVBIGZvciBTdGFnaW5nIFNlcnZpY2VzMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAo4XxOsjK58Ud+tQd06Mk8Rd0qoyjA/3u+y0YVYEF6RgT8Ge1uVdTkIcVYaHyXuuHUPLLqGW1hPfVtn81UVIMGyrw5+t1c30wpGv3UJ6GCFu0sPGgG5NwkVbIUt2xgT/Or/kGzHjUJJy4Y6URSkZiDLDQQWRXvui5ZwwsYRJ8LhT0pSUwan1raG5Vl01GmlWVqsrCmnObuoYkN85iwG4/ERGshkgFCPak8B/jH3GPZSi1+FJLmCqMI1xxmTvf0kZb7ejm2IZFTo6ecYWJ1vylkzUI553RxVbnHCNZvFe3AyaKMyFlknFR0Fkl5+9Lpxz+VOajbCjicg7jIYCw76/xgQIDAQABoyEwHzAdBgNVHQ4EFgQUJHLir1/Tel8v/6OuIXpLS0JH8jIwDQYJKoZIhvcNAQEFBQADggEBAFE15qMGIlp8+M306FbhDEvo1vzxN2Pfvg/f92NXH59d2XZ/wuHxugL8qfcM5xkqsDeIRVxRdISpwiIWlqTitn6lenF85bvPQ09T/b09dVz/LxwU2Cm6+6H5/HZSoLtCKBOuRzAKQdxczpyfaqv9caFC+LegPQIm2HCwOM0A4KzhYcFhumGeyCbyVZsSQcJE7bYc/IHkR2erup7h5BACOZ/a+hHLPQok/uGvtEsR3roydNcNlR8Ja6Wc4eUf7kisTuZTxwRJI9DPVimbs0VAqhnsnVWAK3X4+6sFUq5WfHS4wTRhrR93JvEV5LlQ6UCXYOQMvTii8l07qxkDiysVsLQ=').up()
 .up() // x509 data
 .up() // key info
.up() // signature
.end({pretty : true});
fs.writeFileSync('authrequest_sign.xml',xml,'utf-8',function(err)
{
    if(err)
    {
        return console.log(err);
    }
    console.log('file saved');
})
console.log(xml);
