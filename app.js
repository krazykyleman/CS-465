const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

require('./app_api/models/db');


const usersRouter = require('./app_server/routes/users');
const travelRouter = require('./app_server/routes/travel')

const hbs = require('hbs');

const app = express();
const cors = require('cors');
const corsOptions = {
  origin: 'http://localhost:4200',
  allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization'],
}

// view engine setup
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'hbs');

hbs.registerPartials(path.join(__dirname, 'app_server', 'views', 'partials'));


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const indexRouter = require('./app_server/routes/index');
const apiRouter = require('./app_api/routes/index');

app.use('/', indexRouter);

app.use('/contact', (req, res) => res.render('contact',{contactSelected: req.path == '/contact'}));
app.use('/rooms', (req, res) => res.render('rooms',{roomsSelected: req.path == '/rooms'}));
app.use('/meals', (req, res) => res.render('meals',{mealsSelected: req.path == '/meals'}));
app.get('/news', (req, res) => res.render('news',{newsSelected: req.path == '/news'}));
app.use('/about', (req, res) => res.render('about',{aboutSelected: req.path == '/about'}));
app.use('/travel', travelRouter);

app.use('/api', cors(corsOptions), apiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
