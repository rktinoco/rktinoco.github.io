# PostgreSQL Cheatsheet

Essential SQL patterns and Postgres commands for app development and local DB work.

## Connection & Client
- **Connection URI:** `postgres://user:pass@host:5432/db`
- **psql:** `psql -h host -U user -d db`
- **List / Describe (psql):** `\dt` / `\d table`

## Queries
- **Select:** `SELECT * FROM users LIMIT 10;`
- **Where / Order / Limit:** `WHERE active=true ORDER BY id DESC LIMIT 20`
- **Insert + Returning:** `INSERT INTO t(name) VALUES('x') RETURNING id;`
- **Update / Delete:** `UPDATE users SET active=false WHERE id=1;`

## Joins, Aggregates & Transactions
- **Join:** `SELECT * FROM a JOIN b ON a.id=b.a_id;`
- **Aggregate:** `SELECT status, COUNT(*) FROM orders GROUP BY status;`
- **Transactions:** `BEGIN; ... COMMIT;` / `ROLLBACK;`
- **Upsert:** `INSERT ... ON CONFLICT (id) DO UPDATE SET ...;`

## Schema & Tools
- **Create table:** `CREATE TABLE users (id SERIAL PRIMARY KEY, name TEXT);`
- **Index:** `CREATE INDEX idx_users_email ON users(email);`
- **Backup / Restore:** `pg_dump -Fc -f dump.sql db` / `pg_restore -d db dump.sql`

---
Website: rktinoco.github.com
