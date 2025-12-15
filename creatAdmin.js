require('dotenv').config();
require('./config/database');
const bcrypt = require('bcrypt');
const User = require('./models/user');

async function createAdmin() {
  const username = 'admin';
  const plainPassword = 'admin123'; 
  const role = 'admin';

  const existingAdmin = await User.findOne({ username });
  if (existingAdmin) {
    console.log('Admin already exists!');
    process.exit();
  }

  const hashedPassword = bcrypt.hashSync(plainPassword, 10);

  const adminUser = await User.create({
    username,
    password: hashedPassword,
    role,
  });

  console.log('Admin created successfully:', adminUser);
  process.exit();
}

createAdmin();
