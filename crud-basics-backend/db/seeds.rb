# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Guest.destroy_all
guests = Guest.create([{name: 'Rob', age: 28, sex: 'M', VIP: false},{name: 'Chris', age: 23, sex: 'M', VIP: false},{name: 'Ashley', age: 21, sex: 'F', VIP: true},{name: 'Derek', age: 30, sex: 'M', VIP: true},{name: 'Claudette', age: 28, sex: 'F', VIP: true},{name: 'Samantha', age: 24, sex: 'F', VIP: false}])