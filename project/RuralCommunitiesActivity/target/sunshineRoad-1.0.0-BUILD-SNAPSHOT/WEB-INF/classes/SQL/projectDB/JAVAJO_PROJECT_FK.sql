ALTER TABLE report_info ADD CONSTRAINT FK_board_list_TO_report_info_1 FOREIGN KEY (
	board_id
)
REFERENCES board_list (
	board_id
);

ALTER TABLE activity_customer ADD CONSTRAINT FK_reservation_TO_activity_customer_1 FOREIGN KEY (
	reservation_id
)
REFERENCES reservation (
	reservation_id
);
