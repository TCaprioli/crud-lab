class CreateGuests < ActiveRecord::Migration[6.0]
  def change
    create_table :guests do |t|
      t.string :name
      t.string :sex
      t.integer :age
      t.boolean :VIP
      t.timestamps
    end
  end
end
