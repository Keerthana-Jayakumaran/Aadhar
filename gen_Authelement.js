var builder = require('xmlbuilder');
var fs = require('fs');
var xml = builder.create('Auth',{version:'1.0',encoding :'utf-8'})
.att({ 'xmlns': 'http://www.uidai.gov.in/authentication/uid-auth-request/1.0','ver':'1.6','tid':'public','ac':'public','sa':'public','lk':'MKg8njN6O+QRUmYF+TrbBUCqlrCnbN/Ns6hYbnnaOk99e5UGNhhE/xQ=','uid':'999999990019','txn':'GEO.11051880'})
.ele('Skey',{'ci':'20200916'},'Nc6DrZKFk1oQXxfgnFUl0mmtYYIPl0RGaFd2oINkpChU1++xdddMx6Dlbz6mEYs3IyzChGjRXN5/al9r0runFX8LspTfMchwpxaaDIOyIUguBoYmPUqJDqTQcwey6NtcTJWFSgOvBg+omUkdbK/9GOQ5KWWrN+E0A9JN0IPU4IJqJZmsA6ETZlVoZteYtoMIUcv53qmxNPOEmJ3s4BC3ppHRRWRFMUp/eW7DFJ33W+uInZB6yekKE0dz8fYeo03w2JUT1wlafL7aseb04nv5tNEbllHWafmbMpbv2pXKr+WPgytjrygt1LagGqF4a5Mr/UTNwsy4m/YwlkWN0QcYVw==').up()
.ele('Uses',{'otp':'n','pin':'n','bio':'n','pa':'n','pfa':'n','pi':'y'}).up()
.ele('Data',{'type':'X'},'YOn05vg5qMwElULpEmdiH0j6rM1XWcbQN0n+CFNQeazouCgjyPBH/a2SwbFgq/fFCYUm+the8gQyYC36VO49NLcNcD7WdMhweoiDYgJoCX/t87Kbq/ABoAetfX7OLAck/mHrTmw8tsfJgo4xGSzKZKr+pVn1O8dDHJjwgptySr7vp2Ntj6ogu6B905rsyTWw73iMgoILDHf5soM3Pvde+/XW5rJD9AIPQGhHnKirwkiAgNIhtWU6ttYg4t6gHHbZ0gVBwgjRzM3sDWKzK0EnmA==').up()
.ele('Hmac','xy+JPoVN9dsWVm4YPZFwhVBKcUzzCTVvAxikT6BT5EcPgzX2JkLFDls+kLoNMpWe').up()
.end({pretty : true});
fs.writeFileSync('gen_Authelement.xml',xml,'utf-8',function(err)
{
    if(err)
    {
        return console.log(err);
    }
    console.log('file saved');
})
console.log(xml);
