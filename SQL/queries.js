
module.exports = { 
    selectUsers: "SELECT * FROM users",
    insertUsers: `INSERT INTO users (first_name, last_name, email, password, location,
          dept, is_admin, register_date) values ('Ragnar', 'lothbrok', 'valhala@gmail.com',
          'ivar&bejorn&ubbu','northvenalnd', 'warrior', 1, now());`,
}
