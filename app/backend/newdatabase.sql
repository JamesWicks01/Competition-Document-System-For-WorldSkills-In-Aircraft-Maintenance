CREATE DATABASE IF NOT EXISTS `worldskills-aircraft-maintenance`;

USE `worldskills-aircraft-maintenance`;

CREATE TABLE IF NOT EXISTS `tool_calibration_records` (
    calibration_id INT AUTO_INCREMENT PRIMARY KEY,
    description TEXT NOT NULL,
    part_number VARCHAR(255) NOT NULL,
    serial_number VARCHAR(255) NOT NULL,
    calibration_date DATE NOT NULL,
    calibration_due_date DATE NOT NULL
);

CREATE TABLE IF NOT EXISTS `parts_consumable_requests` (
    request_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    aca_number VARCHAR(255),
    work_summary_order_id VARCHAR(255),
    task_card_id VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS `part_requests` (
    part_reuqest_id INT AUTO_INCREMENT PRIMARY KEY,
    request_id INT NOT NULL,
    item_number VARCHAR(255),
    part_number VARCHAR(255),
    description TEXT,
    quantity VARCHAR(255),
    FOREIGN KEY (request_id) REFERENCES parts_consumable_requests(request_id)
);

CREATE TABLE IF NOT EXISTS `consumable_requests` (
    consumable_request_id INT AUTO_INCREMENT PRIMARY KEY,
    request_id INT NOT NULL,
    item_number VARCHAR(255),
    identification_number VARCHAR(255),
    description TEXT,
    quantity VARCHAR(255),
    FOREIGN KEY (request_id) REFERENCES parts_consumable_requests(request_id)
);

CREATE TABLE IF NOT EXISTS `users` (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    user_fname VARCHAR(255) NOT NULL,
    user_lname VARCHAR(255) NOT NULL,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    user_role ENUM('Competitor','Expert','Admin') NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    password_reset BOOLEAN
);

INSERT INTO `users` (user_fname, user_lname, username, password, user_role, password_reset) 
VALUES 
    ('User', 'Competitor', 'user_competitor', 'password123', 'Competitor', FALSE),
    ('User', 'Expert', 'user_expert', 'password123', 'Expert', FALSE),
    ('User', 'Admin', 'user_admin', 'password123', 'Admin', FALSE);


CREATE TABLE IF NOT EXISTS `document_binders` (
    binder_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    binder_status ENUM('Submitted','In Progress') NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE IF NOT EXISTS `documents` (
    document_id INT AUTO_INCREMENT PRIMARY KEY,
    binder_id INT NOT NULL,
    document_name VARCHAR(255),
    document_type VARCHAR(255),
    FOREIGN KEY (binder_id) REFERENCES document_binders(binder_id)
);

CREATE TABLE IF NOT EXISTS `aircraft_technical_logs` (
    atl_id INT AUTO_INCREMENT PRIMARY KEY,
    document_id INT NOT NULL,
    last_updated TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
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
    category ENUM('N/A','A','B','C','D','P') NOT NULL,
    function_check BOOLEAN,
    leak_check BOOLEAN,
    independent_check BOOLEAN,
    other_check BOOLEAN,
    independent_checkby VARCHAR(255),
    independent_checkdate DATE,
    release_by VARCHAR(255),
    release_date DATE,
    FOREIGN KEY (document_id) REFERENCES documents(document_id)
);

CREATE TABLE IF NOT EXISTS `end_of_work_shift_reports` (
    shift_report_id INT AUTO_INCREMENT PRIMARY KEY,
    document_id INT NOT NULL,
    last_updated TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    aircraft VARCHAR(255),
    date DATE,
    prepared_by VARCHAR(255),
    steps_accomplished TEXT,
    remaining_steps TEXT,
    difficulties TEXT,
    no_difficulties BOOLEAN,
    signature_and_aca VARCHAR(255),
    FOREIGN KEY (document_id) REFERENCES documents(document_id)
);

CREATE TABLE IF NOT EXISTS `task_cards` (
    tc_id INT AUTO_INCREMENT PRIMARY KEY,
    document_id INT NOT NULL,
    last_updated TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    tc_number VARCHAR(255),
    ata_chapter VARCHAR(255),
    title VARCHAR(255),
    aircraft_type VARCHAR(255),
    registration VARCHAR(255),
    serial_number VARCHAR(255),
    work_order_number VARCHAR(255),
    total_airframe_time VARCHAR(255),
    airframe_cycles VARCHAR(255),
    originated_by VARCHAR(255),
    date_opened DATE,
    defect_description TEXT,
    deferred_previously BOOLEAN,
    page_sequence_number VARCHAR(255),
    resolution_description TEXT,
    attached_supporting_docs VARCHAR(255),
    defect_deferred BOOLEAN,
    defer_category_type_mel BOOLEAN,
    defer_category_type_non_mel BOOLEAN,
    mel_id VARCHAR(255),
    mel_category ENUM('N/A','A','B','C','D') NOT NULL,
    mel_due_date DATE,
    mel_due_time TIME,
    function_check BOOLEAN,
    fc_systems_affected VARCHAR(255),
    fc_detailed_on_tc VARCHAR(255),
    leak_check BOOLEAN,
    lc_systems_affected VARCHAR(255),
    lc_detailed_on_tc VARCHAR(255),
    other_check BOOLEAN,
    oc_systems_affected VARCHAR(255),
    oc_detailed_on_tc VARCHAR(255),
    ic_required BOOLEAN,
    post_maintenance_inspection VARCHAR(255),
    independent_check_by VARCHAR(255),
    tc_certified_by VARCHAR(255),
    tc_certified_date DATE,
    tc_certified_time TIME,
    subject_to_test_flight BOOLEAN,
    checks_during_test_flight VARCHAR(255),
    FOREIGN KEY (document_id) REFERENCES documents(document_id)
);

CREATE TABLE IF NOT EXISTS `engine_reports` (
    er_id INT AUTO_INCREMENT PRIMARY KEY,
    document_id INT NOT NULL,
    last_updated TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    engine_type VARCHAR(255),
    serial_number VARCHAR(255),
    engine_running_hours VARCHAR(255),
    work_order_number VARCHAR(255),
    task_card_id VARCHAR(255),
    date_submitted DATE,
    damage_type VARCHAR(255),
    damage_dimension_length VARCHAR(255),
    damage_dimension_width VARCHAR(255),
    damage_dimension_depth VARCHAR(255),
    damaged_item VARCHAR(255),
    damaged_part_number VARCHAR(255),
    damaged_serial_number VARCHAR(255),
    damage_description TEXT,
    damage_drawing TEXT,
    prepared_by VARCHAR(255),
    reviewed_by VARCHAR(255),
    FOREIGN KEY (document_id) REFERENCES documents(document_id)
);

CREATE TABLE IF NOT EXISTS `structural_damage_reports` (
    sdr_id INT AUTO_INCREMENT PRIMARY KEY,
    document_id INT NOT NULL,
    last_updated TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    aircraft_type VARCHAR(255),
    registration VARCHAR(255),
    serial_number VARCHAR(255),
    date_submitted DATE,
    total_airframe_time VARCHAR(255),
    airframe_cycles VARCHAR(255),
    work_order_number VARCHAR(255),
    task_card_id VARCHAR(255),
    damage_type ENUM('Crack','Dent','Puncture','Debond/Void','Corrosion','Rupture','Buckle','Scratch/Nick/Gouge','Other'),
    damage_type_other VARCHAR(255),
    damage_position_station VARCHAR(255),
    damage_position_waterline VARCHAR(255),
    damage_position_buttockline VARCHAR(255),
    damage_position_buttockline_lh BOOLEAN,
    damage_position_buttockline_rh BOOLEAN,
    damage_dimension_length VARCHAR(255),
    damage_dimension_width VARCHAR(255),
    damage_dimension_depth VARCHAR(255),
    damaged_part_number VARCHAR(255),
    damaged_serial_number VARCHAR(255),
    damaged_tsn VARCHAR(255),
    damaged_description TEXT,
    mechanism TEXT,
    damage_drawing TEXT,
    prepared_by VARCHAR(255),
    reviewed_by VARCHAR(255),
    FOREIGN KEY (document_id) REFERENCES documents(document_id)
);




