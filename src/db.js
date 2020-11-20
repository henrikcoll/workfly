const { createConnection } = require('mongoose')

const db = createConnection(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
  process.exit(1);
});

exports.connected = new Promise((resolve) => db.once('open', resolve));

exports.db = db;
exports.User = require('./models/User')(db)
exports.Task = require('./models/Task')(db)