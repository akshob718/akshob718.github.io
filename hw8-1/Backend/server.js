var express = require('express');
const path = require('path');
const cors = require('cors');
var posts = require('./routes/posts');

var app = express();
app.use(cors());


app.use(express.static(path.join(__dirname, 'dist/frontend')));

app.use('/apis571', posts);

app.use('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/frontend/index.html'));
})

app.use(function(req, res, next) {
    next(createError(404));
});

app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});


app.listen(8080, function() {
    console.log("Backend Application listening at http://localhost:8080")
})

module.exports = app;