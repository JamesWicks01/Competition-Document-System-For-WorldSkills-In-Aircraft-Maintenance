CREATE TABLE IF NOT EXISTS `tool_calibration_records` (
    calibration_id INT AUTO_INCREMENT PRIMARY KEY,
    description TEXT NOT NULL,
    part_number VARCHAR(255) NOT NULL,
    serial_number VARCHAR(255) NOT NULL,
    calibration_date DATE NOT NULL,
    calibration_due_date DATE NOT NULL
);

CREATE TABLE IF NOT EXISTS `users` (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    user_role ENUM('Competitor','Expert','Admin') NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO `users` (name, username, password, user_role) VALUES ('user_competitor', 'user_competitor','password123','Competitor');
INSERT INTO `users` (name, username, password, user_role) VALUES ('user_expert', 'user_expert','password123','Expert');
INSERT INTO `users` (name, username, password, user_role) VALUES ('user_admin', 'user_admin','password123','Admin');


CREATE TABLE IF NOT EXISTS `document_binders` (
    binder_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    binder_status ENUM('Submitted','In Progress') NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE IF NOT EXISTS `aircraft-technical-logs` (
    atl_id INT AUTO_INCREMENT PRIMARY KEY,
    binder_id INT NOT NULL,
    registration VARCHAR(255),
    captain VARCHAR(255),
    captain_signature VARCHAR(255),
    page_sequence VARCHAR(255),
    leg1_date DATE,
    leg1_timeup TIME,
    leg1_timedown TIME,
    leg1_airtime TIME,
    leg1_from VARCHAR(255),
    leg1_to VARCHAR(255),
    leg2_date DATE,
    leg2_timeup TIME,
    leg2_timedown TIME,
    leg2_airtime TIME,
    leg2_from VARCHAR(255),
    leg2_to VARCHAR(255),
    total_bftime TIME,
    total_airtime TIME,
    total_time TIME,
    defects TEXT,
    reported_by VARCHAR(255),
    reported_date DATE,
    work_order_summary_number VARCHAR(255),
    resolutions TEXT,
    resolved_by VARCHAR(255),
    resolved_date DATE,
    part_number VARCHAR(255),
    serial_number_on VARCHAR(255),
    serial_number_off VARCHAR(255),
    batch_number VARCHAR(255),
    deferral_number VARCHAR(255),
    mel VARCHAR(255),
    category VARCHAR(255),
    function_check BOOLEAN,
    leak_check BOOLEAN,
    independent_check BOOLEAN,
    other_check BOOLEAN,
    independent_checkby VARCHAR(255),
    independent_checkdate DATE,
    release_by VARCHAR(255),
    release_date DATE,
    FOREIGN KEY (binder_id) REFERENCES document_binders(binder_id)
);



