-- 테이블 전체 생성
CREATE TABLE member (
 u_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
 mem_type_id INT DEFAULT 1 NOT NULL,
 u_name VARCHAR(100) NOT NULL,
 u_email VARCHAR(100) NOT NULL,
 u_nick VARCHAR(100) NULL,
 u_pw VARCHAR(100) NOT NULL,
 u_tel VARCHAR(50) NOT NULL,
 u_reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
 u_marketing INT NOT NULL,
 u_gender VARCHAR(10) NOT NULL,
 u_birth DATE NOT NULL,
 u_google_login VARCHAR(100) NULL,
 u_naver_login VARCHAR(100) NULL,
 u_kakao_login VARCHAR(100) NULL
);

CREATE TABLE activity_info (
 a_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
 s_id INT NOT NULL,
 a_img_id INT NULL,
 sigungu_id INT NOT NULL,
 a_theme_id INT NOT NULL,
 a_start_date TIMESTAMP NOT NULL,
 a_end_date TIMESTAMP NOT NULL,
 a_addr VARCHAR(50) NOT NULL,
 a_name VARCHAR(255) NOT NULL,
 a_one_liner VARCHAR(255) NOT NULL,
 a_min_people INT NOT NULL,
 a_max_people INT NOT NULL,
 a_charge INT NOT NULL,
 a_thumbnail_img VARCHAR(1000) NULL,
 s_site VARCHAR(255) NULL,
 a_reservation_deadline TIMESTAMP NULL
);

CREATE TABLE activity_review (
 rev_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
 u_id INT NOT NULL,
 a_post_id INT NOT NULL,
 r_date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
 r_content TEXT NOT NULL,
 r_star_rating INT NOT NULL,
 r_title VARCHAR(1000) NOT NULL
);

CREATE TABLE favorite (
 f_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
 u_id INT NOT NULL,
 board_id INT NOT NULL,
 post_type_id INT NOT NULL
);

CREATE TABLE reservation (
 reservation_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
 payment_id INT NOT NULL,
 a_id INT NOT NULL,
 u_id INT NOT NULL,
 reservation_headcount INT NOT NULL,
 review_status INT DEFAULT 0 NOT NULL,
 reservation_status VARCHAR(20) DEFAULT '예약대기' NOT NULL,
 reservation_date TIMESTAMP NOT NULL
);

CREATE TABLE review_status (
 review_status INT NOT NULL PRIMARY KEY,
 review_status_name VARCHAR(100)
);

CREATE TABLE reservation_status (
                             reservation_status_id   INT   NOT NULL  PRIMARY KEY AUTO_INCREMENT,
                             reservation_status   VARCHAR(20)  NOT NULL
);

CREATE TABLE rec_activity_info (
 rec_a_post_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
 sigungu_id INT NOT NULL,
 rec_a_id INT NULL,
 rec_a_img_id INT NOT NULL,
 post_type_id INT NOT NULL,
 rec_a_keyword_id INT NOT NULL,
 rec_a_title VARCHAR(255) NOT NULL,
 rec_a_content TEXT NOT NULL,
 rec_a_date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
 rec_a_view_cnt INT DEFAULT 0 NOT NULL,
 rec_a_like_cnt INT DEFAULT 0 NOT NULL,
 rec_a_thumbnail_img VARCHAR(1000) NULL
);

CREATE TABLE notice (
 notice_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
 notice_img_id INT NULL,
 notice_type_id INT NOT NULL,
 notice_title VARCHAR(100) NOT NULL,
 notice_content TEXT NOT NULL,
 notice_date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
);

CREATE TABLE rec_town_info (
 rec_t_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
 rec_t_img_id INT NOT NULL,
 town_id INT NOT NULL,
 post_type_id INT NOT NULL,
 rec_t_title VARCHAR(255) NOT NULL,
 rec_t_content TEXT NOT NULL,
 rec_t_date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
 rec_t_view_cnt INT DEFAULT 0 NOT NULL,
 rec_t_like_cnt INT DEFAULT 0 NOT NULL,
 rec_t_site VARCHAR(255) NULL,
 rec_t_thumbnail_img VARCHAR(1000) NULL
);

CREATE TABLE faq (
 faq_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
 faq_type_id INT NOT NULL,
 faq_q TEXT NOT NULL,
 faq_a TEXT NULL
);

CREATE TABLE region_sido (
 sido_id INT NOT NULL PRIMARY  KEY AUTO_INCREMENT,
 sido_name VARCHAR(100) NOT NULL
);

CREATE TABLE rec_activity_keyword (
 rec_a_keyword_id INT NOT NULL PRIMARY  KEY AUTO_INCREMENT,
 rec_a_keyword_name VARCHAR(100) NOT NULL
);

CREATE TABLE notice_type (
 notice_type_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
 notice_type_name VARCHAR(100) NOT NULL
);

CREATE TABLE region_town (
 town_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
 sigungu_id INT NOT NULL,
 town_name VARCHAR(100) NOT NULL
);

CREATE TABLE inquiry_type (
 inquiry_type_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
 inquiry_type_name VARCHAR(100) NOT NULL
);

CREATE TABLE region_sigungu (
 sigungu_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
 sido_id INT NOT NULL,
 sigungu_name VARCHAR(100) NOT NULL
);

CREATE TABLE activity_images (
 a_img_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
 a_img1 VARCHAR(500) NOT NULL,
 a_img2 VARCHAR(500) NULL,
 a_img3 VARCHAR(500) NULL,
 a_img4 VARCHAR(500) NULL,
 a_img5 VARCHAR(500) NULL
);

CREATE TABLE seller (
 s_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
 account_info_id VARCHAR(20) NOT NULL,
 mem_type_id INT DEFAULT 2 NOT NULL,
 s_email VARCHAR(100) NOT NULL,
 s_com_name VARCHAR(100) NOT NULL,
 s_pw VARCHAR(100) NOT NULL,
 s_tel VARCHAR(50) NOT NULL,
 s_reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
 s_addr VARCHAR(50) NOT NULL,
 s_reg_num VARCHAR(50) NOT NULL,
 s_marketing_consent INT NOT NULL,
 s_approval INT NOT NULL,
 s_rep_name VARCHAR(20) NOT NULL,
 s_reg_certificate_img TEXT NULL
);

CREATE TABLE post_type (
 post_type_id INT NOT NULL PRIMARY  KEY AUTO_INCREMENT,
 post_type_name VARCHAR(50) NOT NULL
);

CREATE TABLE admin (
 admin_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
 mem_type_id INT DEFAULT 3 NOT NULL,
 admin_authority_id INT NULL,
 admin_email VARCHAR(100) NOT NULL,
 admin_pw VARCHAR(100) NOT NULL,
 admin_reg_date TIMESTAMP NOT NULL,
 admin_tel VARCHAR(50) NOT NULL
);

CREATE TABLE member_type (
 mem_type_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
 mem_type_name VARCHAR(20) NOT NULL
);

CREATE TABLE activity_post (
 a_post_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
 a_id INT NOT NULL,
 post_type_id INT DEFAULT 1 NOT NULL,
 a_img_id INT NOT NULL,
 a_post_content TEXT NOT NULL,
 a_view_cnt INT DEFAULT 0 NOT NULL,
 a_favorite_cnt INT DEFAULT 0 NOT NULL,
 a_post_date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
);

CREATE TABLE rec_images (
 rec_a_img_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
 rec_a_img1 VARCHAR(500) NOT NULL,
 rec_a_img2 VARCHAR(500) NULL,
 rec_a_img3 VARCHAR(500) NULL,
 rec_a_img4 VARCHAR(500) NULL,
 rec_a_img5 VARCHAR(500) NULL
);

CREATE TABLE rec_town_images (
 rec_town_img_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
 rec_town_img1 VARCHAR(500) NOT NULL,
 rec_town_img2 VARCHAR(500) NULL,
 rec_town_img3 VARCHAR(500) NULL,
 rec_town_img4 VARCHAR(500) NULL,
 rec_town_img5 VARCHAR(500) NULL
);

CREATE TABLE inquiry_status (
 inquiry_status_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
 inquiry_status VARCHAR(100) NOT NULL
);

CREATE TABLE event (
 event_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
 s_id INT NULL,
 post_type_id INT NOT NULL DEFAULT 4,
 event_img_id INT NULL,
 sigungu_id INT NULL,
 event_recruit_type_id INT NOT NULL,
 event_status_id INT NOT NULL DEFAULT 1,
 event_name VARCHAR(200) NOT NULL,
 event_content TEXT NULL,
 event_thumbnail_img VARCHAR(1000) NULL,
 event_date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
 event_recruit_start_date TIMESTAMP NOT NULL,
 event_recruit_end_date TIMESTAMP NULL,
 event_start_date TIMESTAMP NOT NULL,
 event_end_date TIMESTAMP NULL,
 event_max_people INT NULL,
 event_addr VARCHAR(500) NULL,
 event_favorite_cnt INT DEFAULT 0 NOT NULL DEFAULT 0,
 event_view_cnt INT DEFAULT 0 NOT NULL DEFAULT 0
);

CREATE TABLE event_images (
 event_img_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
 event_img_1 VARCHAR(500) NOT NULL,
 event_img_2 VARCHAR(500) NULL,
 event_img_3 VARCHAR(500) NULL,
 event_img_4 VARCHAR(500) NULL,
 event_img_5 VARCHAR(500) NULL
);

CREATE TABLE member_community (
 u_community_post_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
 u_id INT NOT NULL,
 post_type_id INT DEFAULT 5 NOT NULL,
 u_community_img_id INT NOT NULL,
 u_community_content TEXT NOT NULL,
 u_community_date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
 community_like_cnt INT DEFAULT 0 NOT NULL,
 community_view_cnt INT DEFAULT 0 NOT NULL,
 community_cum_cnt INT DEFAULT 0 NOT NULL
);

CREATE TABLE seller_community (
 seller_community_post_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
 s_id INT NOT NULL,
 post_type_id INT DEFAULT 6 NOT NULL,
 seller_community_content TEXT NOT NULL,
 seller_community_date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
 community_like_cnt INT DEFAULT 0 NOT NULL,
 community_view_cnt INT DEFAULT 0 NOT NULL,
 community_cum_cnt INT DEFAULT 0 NOT NULL
);

CREATE TABLE payment_info (
 payment_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
 payment_status_id INT DEFAULT 1 NOT NULL,
 payment_amount INT NOT NULL,
 payment_deadline TIMESTAMP NOT NULL
);

CREATE TABLE payment_status (
 payment_status_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
 payment_status VARCHAR(50) NOT NULL
);

CREATE TABLE behavior_info (
 b_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
 b_visited_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
);

CREATE TABLE report_info (
 board_id INT NOT NULL PRIMARY KEY,
 status_id INT DEFAULT 1 NOT NULL,
 report_cnt INT DEFAULT 1 NOT NULL,
 d_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
);

CREATE TABLE report_status (
 status_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
 status VARCHAR(100) NOT NULL
);

CREATE TABLE account_info (
 account_info_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
 bank_info_id INT NOT NULL,
 account_number VARCHAR(100) NOT NULL,
 account_holder VARCHAR(100) NOT NULL,
 account_name VARCHAR(100) NOT NULL
);

CREATE TABLE notice_images (
 notice_img_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
 notice_img_1 VARCHAR(500) NOT NULL,
 notice_img_2 VARCHAR(500) NULL,
 notice_img_3 VARCHAR(500) NULL,
 notice_img_4 VARCHAR(500) NULL,
 notice_img_5 VARCHAR(500) NULL
);

CREATE TABLE community_post_img (
 community_img_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
 community_img_name VARCHAR(1000) NOT NULL
);

CREATE TABLE faq_type (
 faq_type_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
 faq_type_name VARCHAR(100) NOT NULL
);

CREATE TABLE event_recruitment_type (
 event_recruit_type_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
 event_recruit_type VARCHAR(50) NOT NULL
);

CREATE TABLE activity_theme (
 a_theme_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
 a_theme_name VARCHAR(30) NOT NULL
);

CREATE TABLE member_list (
 mem_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
 mem_type_id INT NOT NULL,
 u_id INT NULL,
 s_id INT NULL
);

CREATE TABLE board_list (
 board_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
 post_type_id INT NOT NULL,
 a_post_id INT NULL,
 rec_a_post_id INT NULL,
 rec_t_id INT NULL,
 event_id INT NULL,
 u_community_post_id INT NULL,
 seller_community_post_id INT NULL
);

CREATE TABLE admin_authority (
 admin_authority_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
 admin_authority_name VARCHAR(50) NOT NULL
);

CREATE TABLE inquiry (
 inquiry_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
 inquiry_status_id INT DEFAULT 1 NOT NULL,
 inquiry_type_id INT NOT NULL,
 mem_id INT NOT NULL,
 inquiry_title VARCHAR(100) NOT NULL,
 inquiry_content TEXT NOT NULL,
 inquiry_date_created TIMESTAMP NOT NULL,
 inquiry_a TEXT NULL
);

-- CREATE TABLE event_winner_1 (
--  event_report_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
--  u_id INT NOT NULL,
--  event_id INT NOT NULL,
--  event_progress_status_id INT NOT NULL,
--  event_story TEXT NULL
-- );
-- CREATE TABLE event_winner_2 (
--  event_report_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
--  u_id INT NOT NULL,
--  event_id INT NOT NULL,
--  event_progress_status_id INT NOT NULL,
--  event_story TEXT NULL
-- );
-- CREATE TABLE event_winner_3 (
--  event_report_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
--  u_id INT NOT NULL,
--  event_id INT NOT NULL,
--  event_progress_status_id INT NOT NULL,
--  event_story TEXT NULL
-- );
-- CREATE TABLE event_winner_4 (
--  event_report_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
--  u_id INT NOT NULL,
--  event_id INT NOT NULL,
--  event_progress_status_id INT NOT NULL,
--  event_story TEXT NULL
-- );
-- CREATE TABLE event_winner_5 (
--  event_report_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
--  u_id INT NOT NULL,
--  event_id INT NOT NULL,
--  event_progress_status_id INT NOT NULL,
--  event_story TEXT NULL
-- );
-- CREATE TABLE event_winner_6 (
--  event_report_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
--  u_id INT NOT NULL,
--  event_id INT NOT NULL,
--  event_progress_status_id INT NOT NULL,
--  event_story TEXT NULL
-- );
-- CREATE TABLE event_winner_7 (
--  event_report_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
--  u_id INT NOT NULL,
--  event_id INT NOT NULL,
--  event_progress_status_id INT NOT NULL,
--  event_story TEXT NULL
-- );
-- CREATE TABLE event_winner_8 (
--  event_report_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
--  u_id INT NOT NULL,
--  event_id INT NOT NULL,
--  event_progress_status_id INT NOT NULL,
--  event_story TEXT NULL
-- );
-- CREATE TABLE event_winner_9 (
--  event_report_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
--  u_id INT NOT NULL,
--  event_id INT NOT NULL,
--  event_progress_status_id INT NOT NULL,
--  event_story TEXT NULL
-- );
-- CREATE TABLE event_winner_10 (
--  event_report_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
--  u_id INT NOT NULL,
--  event_id INT NOT NULL,
--  event_progress_status_id INT NOT NULL,
--  event_story TEXT NULL
-- );
-- CREATE TABLE event_winner_11 (
--  event_report_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
--  u_id INT NOT NULL,
--  event_id INT NOT NULL,
--  event_progress_status_id INT NOT NULL,
--  event_story TEXT NULL
-- );
-- CREATE TABLE event_winner_12 (
--  event_report_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
--  u_id INT NOT NULL,
--  event_id INT NOT NULL,
--  event_progress_status_id INT NOT NULL,
--  event_story TEXT NULL
-- );
CREATE TABLE event_status (
 event_status_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
 event_status VARCHAR(100) DEFAULT '요청완료' NOT NULL
);

CREATE TABLE post_likes (
 l_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
 u_id INT NOT NULL,
 board_id INT NOT NULL,
 post_type_id INT NOT NULL
);

-- CREATE TABLE activity_customer_1 (
--  a_customer_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
--  a_post_id INT NOT NULL,
--  u_id INT NOT NULL
-- );
-- CREATE TABLE activity_customer_2(
--  a_customer_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
--  a_post_id INT NOT NULL,
--  u_id INT NOT NULL
-- );
-- CREATE TABLE activity_customer_3 (
--  a_customer_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
--  a_post_id INT NOT NULL,
--  u_id INT NOT NULL
-- );
-- CREATE TABLE activity_customer_4 (
--  a_customer_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
--  a_post_id INT NOT NULL,
--  u_id INT NOT NULL
-- );
-- CREATE TABLE activity_customer_5 (
--  a_customer_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
--  a_post_id INT NOT NULL,
--  u_id INT NOT NULL
-- );
-- CREATE TABLE activity_customer_6 (
--  a_customer_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
--  a_post_id INT NOT NULL,
--  u_id INT NOT NULL
-- );
-- CREATE TABLE activity_customer_7 (
--  a_customer_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
--  a_post_id INT NOT NULL,
--  u_id INT NOT NULL
-- );
-- CREATE TABLE activity_customer_8 (
--  a_customer_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
--  a_post_id INT NOT NULL,
--  u_id INT NOT NULL
-- );

CREATE TABLE town_report (
 t_r_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
 t_r_img_id INT NULL,
 mem_id INT NOT NULL,
 town_id INT NOT NULL,
 t_r_title VARCHAR(255) NOT NULL,
 t_r_content TEXT NOT NULL,
 t_r_date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
);

CREATE TABLE town_report_images (
 t_r_img_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
 t_r_img1 VARCHAR(500) NOT NULL,
 t_r_img2 VARCHAR(500) NULL,
 t_r_img3 VARCHAR(500) NULL,
 t_r_img4 VARCHAR(500) NULL,
 t_r_img5 VARCHAR(500) NULL
);

CREATE TABLE event_progress_status (
 event_progress_status_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
 event_progress_status VARCHAR(50) NOT NULL
);

CREATE TABLE bank_request_info (
 bank_info_id INT NOT NULL PRIMARY KEY,
 bank_name VARCHAR(50) NOT NULL
);

CREATE TABLE bank_response_info (
 bank_info_id INT NOT NULL PRIMARY KEY,
 bank_name VARCHAR(50) NOT NULL
);