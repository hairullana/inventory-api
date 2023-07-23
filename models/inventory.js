import db from "../utils/db.js";

class Inventory {
    static async create (request) {
        let sql = 'INSERT INTO inventories (name, category, stock, created_at, updated_at) VALUES (?, ?, ?, NOW(), NOW())';
        let value = [request.name, request.category, request.stock];

        return db.query(sql, value)
            .then((result) => {
                return this.get(result[0].insertId);
            }).catch((error) => {
                throw error;
            });
    }

    static get (id = null) {
        let sql = null;
        if (id === null) sql = "SELECT * FROM inventories";
        else sql = `SELECT * FROM inventories WHERE id = ${id} LIMIT 1`;
        
        return db.query(sql);
    }

    static update (request, id) {
        let sql = "UPDATE inventories SET name = ?, category = ? WHERE id = ?";
        let value = [request.name, request.category, id];

        return db.query(sql, value)
            .then((result) => {
                return this.get(id);
            }).catch((error) => {
                throw error;
            });
    }

    static addStock (request, id) {
        let sql = "UPDATE inventories SET stock = stock + ? WHERE id = ?";
        let value = [request.stock, id];

        return db.query(sql, value);
    }

    static destroy (id) {
        let sql = "DELETE FROM inventories WHERE id = ?";
        let value = [id];

        return db.query(sql, value);
    }
}

export default Inventory;