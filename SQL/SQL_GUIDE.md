# SQL/MySQL Setup Guide in VS Code using Docker

This guide explains how to set up and run a **MySQL database** inside a **Docker container**, connect it with **VS Code SQLTools**, and execute SQL queries — all in an isolated, clean environment.

---

## 🧩️ Prerequisites

Before starting, ensure the following are installed:

* **Docker Desktop** (any stable version)
* **VS Code**
* **SQLTools Extension**
  → `SQLTools`
  → `SQLTools MySQL/MariaDB/TiDB Driver`

---

## ⚙️ Step 1: Create a Working Directory

Open your **terminal** and run:

```bash
mkdir ~/sql/my-sql-name
cd ~/sql/my-sql-name
```

This will create a folder named `my-sql-name` under your `~/sql` directory.
You’ll store your Docker configuration and `.sql` files here.

---

## 🧳️ Step 2: Create a Docker Compose File

Inside the `my-sql-name` folder, create a file named:

```
docker-compose.yml
```

### Option A — Temporary Container (No Data Persistence)

If you just want a **temporary MySQL** setup (data will be deleted after container removal):

```yaml
services:
  mysql:
    image: mysql:latest
    container_name: sql_practice
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: root123
      MYSQL_DATABASE: study
    ports:
      - "3306:3306"
```

### Option B — Persistent MySQL (Data Saved on Disk)

If you want to **keep your database data** even after stopping/removing the container:

```yaml
services:
  mysql:
    image: mysql:latest
    container_name: sql_practice
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: root123
      MYSQL_DATABASE: study
    ports:
      - "3306:3306"
    volumes:
      - ./mysql_data:/var/lib/mysql
```

> ✅ The volume maps your local folder `mysql_data` to MySQL’s internal storage directory `/var/lib/mysql`.

---

## 🚀 Step 3: Run the MySQL Container

Run the container in the background (detached mode):

```bash
docker compose up -d
```

Check if it’s running:

```bash
docker ps
```

You should see an output similar to:

```
CONTAINER ID   IMAGE          STATUS         PORTS
abcd1234efgh   mysql:latest   Up 10 seconds  0.0.0.0:3306->3306/tcp
```

---

## 🧠 Step 4: Connect MySQL with VS Code

### 1. Install Required Extensions

* **SQLTools**
* **SQLTools MySQL/MariaDB/TiDB Driver**

### 2. Open SQLTools Connection Manager

Press **Cmd + Shift + P (Mac)** or **Ctrl + Shift + P (Windows)**
→ Search for `SQLTools: New Connection`
→ Select **MySQL/MariaDB**

### 3. Fill in Connection Details

| Field             | Value                |
| ----------------- | -------------------- |
| **Name**          | Local MySQL (Docker) |
| **Server / Host** | 127.0.0.1            |
| **Port**          | 3306                 |
| **Database**      | study                |
| **Username**      | root                 |
| **Password**      | root123              |

> ✅ Click **Test Connection** → Should show “Connection Success!”
> 💾 Then click **Save Connection**

---

## 🧱 Step 5: Create and Run SQL Files

Create a new file in VS Code:

```
create_database.sql
```

Paste the following code:

```sql
CREATE DATABASE IF NOT EXISTS university;

USE university;

CREATE TABLE students (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50),
  department VARCHAR(50),
  gpa DECIMAL(3,2)
);

INSERT INTO students (name, department, gpa)
VALUES
('Arafat', 'CSE', 3.85),
('Nabila', 'EEE', 3.70),
('Rafiul', 'BBA', 3.92);

SELECT * FROM students;
```

---

## ▶️ Step 6: Run SQL Queries from VS Code

1. Keep your `.sql` file open.
2. Press **Cmd + E → Cmd + E (Mac)** or **Ctrl + E → Ctrl + E (Windows)**
3. A **result grid** will appear showing the output of your query.

> 💡 Tip: You can also right-click inside the SQL editor and choose **Run Selected Query**.

---

## 👀 Step 7: Preview Tables Without Running Queries

1. Open the **SQLTools Sidebar** in VS Code.
2. Expand your connection → `Local MySQL` → `university` → **Tables**
3. Right-click on the `students` table → **Show Table Records**
4. The data grid will open at the bottom of the screen.

---

## 🧹 Step 8: Stop or Remove the Container

To **stop and remove** the MySQL container, run:

```bash
docker compose down
```

To **restart** it later:

```bash
docker compose up -d
```

---

## ✅ Final Outcome

By completing this setup, you will be able to:

* Run **MySQL** in an **isolated Docker environment**
* Manage connections easily through **VS Code SQLTools**
* Write, run, and visualize SQL queries directly inside VS Code
* Optionally **persist your database data** with Docker volumes

---

## ! Troubleshooting Tips

| Issue                          | Possible Fix                                               |
| ------------------------------ | ---------------------------------------------------------- |
| Connection refused             | Ensure container is running → `docker ps`                  |
| Port conflict                  | Change port mapping to `3307:3306` in `docker-compose.yml` |
| Password authentication failed | Recheck credentials in SQLTools config                     |
| No result shown                | Ensure correct database is selected (`USE university;`)    |

---

## 💡 Optional: Stop Container Automatically

If you only use MySQL temporarily for study, you can clean up everything with one command:

```bash
docker system prune -a
```

> ⚠️ **Warning:** This deletes *all* stopped containers and images. Use carefully.

---

### 📘 Summary

You’ve learned how to:

* Set up MySQL using **Docker Compose**
* Connect it to **VS Code SQLTools**
* Run and visualize SQL queries
* Use **volumes** for persistent data storage
