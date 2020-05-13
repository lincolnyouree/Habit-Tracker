const habits = [];

module.exports = {
    getAll,
    create,
    deleteOne,
    getOne,
    update
}

function getAll() {
    return habits;
}

function create(habit) {
    habits.push(habit);
}

function deleteOne(habitIdx) {
    habits.splice(habitIdx, 1);
}

function getOne(habitIdx) {
    return habits[habitIdx];
}

function update(habitIdx, habit) {
    habits[habitIdx] = habit;
}