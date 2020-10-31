var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url , true).query;
    var title = queryData.id;

    console.log(queryData.id);
    if(_url == '/'){
      title = 'Welcome';
    }
    if(_url == '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);
    fs.readFile(`data/${queryData.id}`,'utf8',function(err, description){

    var template = `
    <!DOCTYPE html>
    <html>
    <head>
    <title>MY Web-${title}</title>
      <meta charset="utf-8">
    </head>

    <body>
    <h1><a href="/?id=Index">WEB</a></h1>
    <ul>
      <li><a href="/?id=HTML">HTML</a></li>
      <li><a href="/?id=CSS">CSS</a></li>
      <li><a href="/?id=JavaScript">JavaScript</a></li>
    </ul>
    <h2>${title}<h2>
    <p>${description}</p>
    <br>

    <br>
    <br>

    <h3>To Me</h3>
    </body>
    </html>
`

  response.end(template);
    })

});
app.listen(3000);
