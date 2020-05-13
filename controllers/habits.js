const Habit = require('../config/data');

module.exports = {
    create,
    index,
    delete: deleteOne,
    show,
    update
}

function create(req, res) {
    req.body.done = false;
    Habit.create(req.body);
    res.redirect('/')
}

function index(req, res) {
    res.render('index', {habits: Habit.getAll()});
}

function deleteOne(req, res) {
    Habit.deleteOne(req.params.id);
    res.redirect('/');
}

function show(req, res) {
    res.render('show', {habit: Habit.getOne(req.params.id), idx: req.params.id})
}

function update(req, res) {
    Habit.update(req.params.id, req.body);
    res.redirect('/');
}