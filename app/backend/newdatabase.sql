CREATE TABLE IF NOT EXISTS `tool_calibration_records` (
    id INT AUTO_INCREMENT PRIMARY KEY,
    description TEXT NOT NULL,
    part_number VARCHAR(255) NOT NULL,
    serial_number VARCHAR(255) NOT NULL,
    calibration_date DATE NOT NULL,
    calibration_due_date DATE NOT NULL
);

CREATE TABLE IF NOT EXISTS `users` (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL,
    user_role ENUM('COMPETITOR','EXPERT','ADMIN') NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);



