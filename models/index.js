// TODO: this schema is fine, just gotta rename `project` to `thoughts` (might need to add a section for the responses to `thoughts`, too)

const User = require('./User');
const Project = require('./Project');

User.hasMany(Project, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Project.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Project };