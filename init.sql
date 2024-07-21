-- Create database if not exists
DO $$
BEGIN
    IF NOT EXISTS (SELECT FROM pg_database WHERE datname = 'myapp') THEN
        EXECUTE 'CREATE DATABASE myapp';
    END IF;
END
$$;

-- Connect to the new database
\c myapp

-- Create user if not exists
DO $$
BEGIN
    IF NOT EXISTS (SELECT FROM pg_catalog.pg_roles WHERE rolname = 'myuser') THEN
        CREATE ROLE myuser WITH LOGIN PASSWORD 'mypassword';
    END IF;
END
$$;

-- Grant privileges
GRANT ALL PRIVILEGES ON DATABASE myapp TO myuser;



-- Ensure the messages table exists
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'messages') THEN
        CREATE TABLE messages (
            id SERIAL PRIMARY KEY,
            content VARCHAR(255)
        );
        INSERT INTO messages (content) VALUES ('Hello World from postgres');
    END IF;
END
$$;

-- Set owner of existing tables to new user
ALTER TABLE messages OWNER TO myuser;

