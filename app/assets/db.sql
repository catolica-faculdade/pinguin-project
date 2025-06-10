DROP DATABASE IF EXISTS pinguin;
CREATE DATABASE pinguin
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;
	
USE pinguin;

CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    username VARCHAR(100) NOT NULL UNIQUE,
    full_name VARCHAR(250) NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    icon_path VARCHAR(255) NULL,     
    streak INT NULL DEFAULT 0,      
    biography VARCHAR(255) NULL,     
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    last_login TIMESTAMP NULL
);

CREATE TABLE user_relationships (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    follower_id INT NOT NULL,        -- Usuário que está seguindo
    following_id INT NOT NULL,       -- Usuário que está sendo seguido
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    FOREIGN KEY (follower_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (following_id) REFERENCES users(id) ON DELETE CASCADE,
    UNIQUE KEY unique_relationship (follower_id, following_id) 
);

CREATE TABLE posts (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    text_content VARCHAR(300) NOT NULL,
    image_path VARCHAR(255) NULL,   
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    id_user INT NOT NULL,
    FOREIGN KEY (id_user) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE post_likes (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    id_user INT NOT NULL,
    id_post INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    FOREIGN KEY (id_user) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (id_post) REFERENCES posts(id) ON DELETE CASCADE,
    UNIQUE KEY unique_post_like (id_user, id_post) -- Um usuário pode dar like em um post apenas uma vez
);

CREATE TABLE comments (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    text_content VARCHAR(150) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    id_user INT NOT NULL,
    id_post INT NOT NULL,
    FOREIGN KEY (id_user) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (id_post) REFERENCES posts(id) ON DELETE CASCADE
);

CREATE TABLE comment_likes (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    id_user INT NOT NULL,
    id_comment INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    FOREIGN KEY (id_user) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (id_comment) REFERENCES comments(id) ON DELETE CASCADE,
    UNIQUE KEY unique_comment_like (id_user, id_comment) -- Um usuário pode dar like em um comentário apenas uma vez
);

CREATE TABLE notifications (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    id_user INT NOT NULL,            -- Usuário que recebe a notificação
    notification_type ENUM('follow', 'like_post', 'comment_post', 'like_comment') NOT NULL,
    id_triggered_by INT NOT NULL,    -- Usuário que causou a notificação
    id_reference INT NULL,           -- ID do post ou comentário relacionado (se aplicável)
    is_read BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    FOREIGN KEY (id_user) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (id_triggered_by) REFERENCES users(id) ON DELETE CASCADE
);