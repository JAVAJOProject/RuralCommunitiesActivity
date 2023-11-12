CREATE TABLE member (
                        u_id   NUMBER(10)      NOT NULL PRIMARY KEY,
                        mem_type_id   NUMBER(1)   DEFAULT 1   NOT NULL,
                        u_name   VARCHAR2(100)      NOT NULL,
                        u_email   VARCHAR2(100)      NOT NULL,
                        u_nick   VARCHAR2(100)      NULL,
                        u_pw   VARCHAR2(100)      NOT NULL,
                        u_tel   VARCHAR2(50)      NOT NULL,
                        u_reg_date   TIMESTAMP   DEFAULT SYSTIMESTAMP   NOT NULL,
                        u_marketing   NUMBER(1)      NOT NULL,
                        u_gender   VARCHAR2(10)      NOT NULL,
                        u_birth   DATE      NOT NULL,
                        u_google_login   VARCHAR2(100)      NULL,
                        u_naver_login   VARCHAR2(100)      NULL,
                        u_kakao_login   VARCHAR2(100)      NULL
);

CREATE TABLE activity_info (
                               a_id   NUMBER(10)      NOT NULL PRIMARY KEY,
                               s_id   NUMBER(10)      NOT NULL,
                               a_img_id   NUMBER(5)      NULL,
                               sigungu_id   NUMBER(10)      NOT NULL,
                               a_theme_id   NUMBER(10)      NOT NULL,
                               a_start_date   TIMESTAMP      NOT NULL,
                               a_end_date   TIMESTAMP      NOT NULL,
                               a_addr   VARCHAR2(50)      NOT NULL,
                               a_name   VARCHAR2(255)      NOT NULL,
                               a_one_liner   VARCHAR2(255)      NOT NULL,
                               a_min_people   NUMBER(20)      NOT NULL,
                               a_max_people   NUMBER(20)      NOT NULL,
                               a_charge   NUMBER(10)      NOT NULL,
                               a_thumbnail_img   VARCHAR2(1000)      NULL,
                               s_site   VARCHAR2(255)      NULL,
                               a_reservation_deadline   TIMESTAMP      NULL
);

CREATE TABLE activity_review (
                                 rev_id   NUMBER(10)      NOT NULL PRIMARY KEY,
                                 u_id   NUMBER(10)      NOT NULL,
                                 a_post_id   NUMBER(10)      NOT NULL,
                                 r_date_created   TIMESTAMP   DEFAULT SYSTIMESTAMP    NOT NULL,
                                 r_content   CLOB      NOT NULL,
                                 r_star_rating   NUMBER(1)      NOT NULL,
                                 r_title  VARCHAR2(1000) NOT NULL
);

CREATE TABLE favorite (
                          f_id  NUMBER(10)      NOT NULL PRIMARY KEY,
                          u_id   NUMBER(10)      NOT NULL,
                          board_id   NUMBER(10)      NOT NULL,
                          post_type_id   NUMBER(2)      NOT NULL
);

CREATE TABLE reservation (
                             reservation_id   NUMBER(10)      NOT NULL PRIMARY KEY,
                             payment_id   NUMBER(10)      NOT NULL,
                             a_id   NUMBER(3)      NOT NULL,
                             u_id   NUMBER(10)      NOT NULL,
                             reservation_headcount   NUMBER(5)      NOT NULL,
                             review_status   NUMBER(10)   DEFAULT 0    NOT NULL,
                             reservation_status   VARCHAR2(20)   DEFAULT '예약대기'     NOT NULL,
                             reservation_date   TIMESTAMP     NOT NULL
);

CREATE TABLE review_status (
                             review_status   NUMBER(10)      NOT NULL PRIMARY KEY,
                             review_status_name VARCHAR2(100)
);
CREATE TABLE reservation_status (
                             reservation_status_id   NUMBER(20)   NOT NULL PRIMARY KEY,
                             reservation_status   VARCHAR2(20)  NOT NULL
);

CREATE TABLE rec_activity_info (
                                   rec_a_post_id   NUMBER(10)      NOT NULL PRIMARY KEY,
                                   sigungu_id   NUMBER(3)      NOT NULL,
                                   rec_a_id   NUMBER(3)       NULL,
                                   rec_a_img_id   NUMBER(5)      NOT NULL,
                                   post_type_id   NUMBER(2)      NOT NULL,
                                   rec_a_keyword_id   NUMBER(3)      NOT NULL,
                                   rec_a_title   VARCHAR2(255)      NOT NULL,
                                   rec_a_content   CLOB      NOT NULL,
                                   rec_a_date_created   TIMESTAMP   DEFAULT SYSTIMESTAMP   NOT NULL,
                                   rec_a_view_count   NUMBER(4)   DEFAULT 0    NOT NULL,
                                   rec_a_like_cnt   NUMBER(4)   DEFAULT 0    NOT NULL,
                                   rec_a_thumbnail_img   VARCHAR2(1000)   NULL
);

CREATE TABLE notice (
                        notice_id   NUMBER(10)      NOT NULL PRIMARY KEY,
                        notice_img_id   NUMBER(5)       NULL,
                        notice_type_id   NUMBER(10)      NOT NULL,
                        notice_title   VARCHAR2(100)      NOT NULL,
                        notice_content   CLOB      NOT NULL,
                        notice_date_created   TIMESTAMP   DEFAULT SYSTIMESTAMP   NOT NULL
);

CREATE TABLE rec_town_info (
                               rec_t_id   NUMBER(10)      NOT NULL PRIMARY KEY,
                               rec_t_img_id   NUMBER(5)      NOT NULL,
                               town_id   NUMBER(3)      NOT NULL,
                               post_type_id   NUMBER(2)      NOT NULL,
                               rec_t_title   VARCHAR2(255)      NOT NULL,
                               rec_t_content   CLOB      NOT NULL,
                               rec_t_date_created   TIMESTAMP   DEFAULT SYSTIMESTAMP   NOT NULL,
                               rec_t_view_cnt   NUMBER(4)   DEFAULT 0    NOT NULL,
                               rec_t_like_cnt   NUMBER(4)   DEFAULT 0    NOT NULL,
                               rec_t_site   VARCHAR2(255)      NULL,
                               rec_t_thumbnail_img   VARCHAR2(1000)      NULL
);

CREATE TABLE faq (
                     faq_id   NUMBER(10)      NOT NULL PRIMARY KEY,
                     faq_type_id   NUMBER(10)      NOT NULL,
                     faq_q   CLOB      NOT NULL,
                     faq_a   CLOB      NULL
);

CREATE TABLE region_sido (
                             sido_id   NUMBER(3)      NOT NULL PRIMARY KEY,
                             sido_name   VARCHAR2(100)      NOT NULL
);

CREATE TABLE rec_activity_keyword (
                                      rec_a_keyword_id   NUMBER(3)      NOT NULL PRIMARY KEY,
                                      rec_a_keyword_name   VARCHAR(100)      NOT NULL
);

CREATE TABLE notice_type (
                             notice_type_id   NUMBER(10)      NOT NULL PRIMARY KEY,
                             notice_type_name   VARCHAR2(100)      NOT NULL
);

CREATE TABLE region_town (
                             town_id   NUMBER(3)      NOT NULL PRIMARY KEY,
                             sigungu_id   NUMBER(3)      NOT NULL,
                             town_name   VARCHAR2(100)      NOT NULL
);

CREATE TABLE inquiry_type (
                              inquiry_type_id   NUMBER(10)      NOT NULL PRIMARY KEY,
                              inquiry_type_name   VARCHAR2(100)      NOT NULL
);

CREATE TABLE region_sigungu (
                                sigungu_id   NUMBER(3)      NOT NULL PRIMARY KEY,
                                sido_id   NUMBER(3)      NOT NULL,
                                sigungu_name   VARCHAR2(100)      NOT NULL
);

CREATE TABLE activity_images (
                                 a_img_id   NUMBER(5)      NOT NULL PRIMARY KEY,
                                 a_img1   VARCHAR2(500)      NOT NULL,
                                 a_img2   VARCHAR2(500)      NULL,
                                 a_img3   VARCHAR2(500)      NULL,
                                 a_img4   VARCHAR2(500)      NULL,
                                 a_img5   VARCHAR2(500)      NULL
);

CREATE TABLE seller (
                        s_id   NUMBER(10)      NOT NULL PRIMARY KEY,
                        account_info_id   VARCHAR2(20)      NOT NULL,
                        mem_type_id   NUMBER(1)   DEFAULT 2   NOT NULL,
                        s_email   VARCHAR2(100)      NOT NULL,
                        s_com_name   VARCHAR2(100)      NOT NULL,
                        s_pw   VARCHAR2(100)      NOT NULL,
                        s_tel   VARCHAR2(50)      NOT NULL,
                        s_reg_date   TIMESTAMP  DEFAULT SYSTIMESTAMP    NOT NULL,
                        s_addr   VARCHAR2(50)      NOT NULL,
                        s_reg_num   VARCHAR2(50)      NOT NULL,
                        s_marketing_consent   NUMBER(1)      NOT NULL,
                        s_approval   NUMBER(1)      NOT NULL,
                        s_rep_name   VARCHAR2(20)      NOT NULL,
                        s_reg_certificate_img CLOB NULL
);

CREATE TABLE post_type (
                           post_type_id   NUMBER(2)      NOT NULL PRIMARY KEY,
                           post_type_name   VARCHAR2(50)      NOT NULL
);

CREATE TABLE admin (
                       admin_id   NUMBER(10)      NOT NULL PRIMARY KEY,
                       mem_type_id   NUMBER(1)   DEFAULT 3   NOT NULL,
                       admin_authority_id   NUMBER(5)   NULL,
                       admin_email   VARCHAR2(100)      NOT NULL,
                       admin_pw   VARCHAR2(100)      NOT NULL,
                       admin_reg_date   TIMESTAMP      NOT NULL,
                       admin_tel   VARCHAR(50)      NOT NULL
);

CREATE TABLE member_type (
                             mem_type_id   NUMBER(1)      NOT NULL PRIMARY KEY,
                             mem_type_name   VARCHAR2(20)      NOT NULL
);

CREATE TABLE activity_post (
                               a_post_id   NUMBER(10)      NOT NULL PRIMARY KEY,
                               a_id   NUMBER(3)      NOT NULL,
                               post_type_id   NUMBER(3)   DEFAULT 1   NOT NULL,
                               a_img_id   NUMBER(5)      NOT NULL,
                               a_post_content   CLOB      NOT NULL,
                               a_view_cnt   NUMBER(10)   DEFAULT 0    NOT NULL,
                               a_favorite_cnt   NUMBER(10)    DEFAULT 0   NOT NULL,
                               a_post_date_created   TIMESTAMP  DEFAULT SYSTIMESTAMP    NOT NULL
);

CREATE TABLE rec_images (
                            rec_a_img_id   NUMBER(5)      NOT NULL PRIMARY KEY,
                            rec_a_img1   VARCHAR2(500)      NOT NULL,
                            rec_a_img2   VARCHAR2(500)      NULL,
                            rec_a_img3   VARCHAR2(500)      NULL,
                            rec_a_img4   VARCHAR2(500)      NULL,
                            rec_a_img5   VARCHAR2(500)      NULL
);

CREATE TABLE rec_town_images (
                                 rec_town_img_id   NUMBER(5)      NOT NULL PRIMARY KEY,
                                 rec_town_img1   VARCHAR2(500)      NOT NULL,
                                 rec_town_img2   VARCHAR2(500)      NULL,
                                 rec_town_img3   VARCHAR2(500)      NULL,
                                 rec_town_img4   VARCHAR2(500)      NULL,
                                 rec_town_img5   VARCHAR2(500)      NULL
);

CREATE TABLE inquiry_status (
                                inquiry_status_id   NUMBER(10)      NOT NULL PRIMARY KEY,
                                inquiry_status   VARCHAR2(100)      NOT NULL
);

CREATE TABLE event (
                       event_id   NUMBER(10)      NOT NULL PRIMARY KEY,
                       s_id   NUMBER(10)      NULL,
                       post_type_id   NUMBER(2)      DEFAULT 4 NOT NULL,
                       event_img_id   NUMBER(5)      NULL,
                       sigungu_id   NUMBER(3)      NULL,
                       event_recruit_type_id   NUMBER(10)      NOT NULL,
                       event_status_id   NUMBER(10)      DEFAULT 1 NOT NULL,
                       event_name   VARCHAR2(200)      NOT NULL,
                       event_content   CLOB      NULL,
                       event_thumbnail_img   VARCHAR2(1000)      NULL,
                       event_date_created TIMESTAMP DEFAULT SYSTIMESTAMP NOT NULL,
                       event_recruit_start_date   TIMESTAMP      NOT NULL,
                       event_recruit_end_date   TIMESTAMP      NULL,
                       event_start_date   TIMESTAMP      NOT NULL,
                       event_end_date   TIMESTAMP      NULL,
                       event_max_people   NUMBER(10)      NULL,
                       event_addr   VARCHAR2(500)       NULL,
                       event_favorite_cnt   NUMBER(10)      DEFAULT 0 NOT NULL ,
                       event_view_cnt   NUMBER(10)      DEFAULT 0 NOT NULL
);

CREATE TABLE event_images (
                              event_img_id   NUMBER(5)      NOT NULL PRIMARY KEY,
                              event_img_1   VARCHAR2(500)      NOT NULL,
                              event_img_2   VARCHAR2(500)      NULL,
                              event_img_3   VARCHAR2(500)      NULL,
                              event_img_4   VARCHAR2(500)      NULL,
                              event_img_5   VARCHAR2(500)      NULL
);

CREATE TABLE member_community (
                                  u_community_post_id   NUMBER(10)      NOT NULL PRIMARY KEY,
                                  u_id   NUMBER(10)      NOT NULL,
                                  post_type_id   NUMBER(5)  DEFAULT 5    NOT NULL,
                                  u_community_img_id   NUMBER(5)      NOT NULL,
                                  u_community_content   CLOB      NOT NULL,
                                  u_community_date_created   TIMESTAMP  DEFAULT SYSTIMESTAMP    NOT NULL,
                                  community_like_cnt   NUMBER(10)   DEFAULT 0    NOT NULL,
                                  community_view_cnt NUMBER(10) DEFAULT 0 NOT NULL,
                                  community_cum_cnt   NUMBER(10)   DEFAULT 0    NOT NULL
);

CREATE TABLE seller_community (
                                  seller_community_post_id   NUMBER(10)      NOT NULL PRIMARY KEY,
                                  s_id   NUMBER(10)      NOT NULL,
                                  post_type_id   NUMBER(2)   DEFAULT 6   NOT NULL,
                                  seller_community_content   CLOB      NOT NULL,
                                  seller_community_date_created   TIMESTAMP   DEFAULT SYSTIMESTAMP   NOT NULL,
                                  community_like_cnt   NUMBER(10)   DEFAULT 0    NOT NULL,
                                  community_view_cnt NUMBER(10)  DEFAULT 0 NOT NULL,
                                  community_cum_cnt   NUMBER(10)   DEFAULT 0    NOT NULL
);

CREATE TABLE payment_info (
                              payment_id   NUMBER(10)      NOT NULL PRIMARY KEY,
                              payment_status_id   NUMBER(10)  DEFAULT 1     NOT NULL,
                              payment_amount   NUMBER(10)      NOT NULL,
                              payment_deadline   TIMESTAMP      NOT NULL
);

CREATE TABLE payment_status (
                                payment_status_id   NUMBER(10)      NOT NULL PRIMARY KEY,
                                payment_status  VARCHAR2(50)      NOT NULL
);

CREATE TABLE behavior_info (
                               b_id   NUMBER(10)      NOT NULL PRIMARY KEY,
                               b_visited_date   TIMESTAMP  DEFAULT SYSTIMESTAMP    NOT NULL
);

CREATE TABLE report_info (
                             board_id   NUMBER(10)      NOT NULL PRIMARY KEY,
                             status_id   NUMBER(10)  DEFAULT 1    NOT NULL,
                             report_cnt   NUMBER(10)   DEFAULT 1    NOT NULL,
                             d_date   TIMESTAMP  DEFAULT SYSTIMESTAMP    NOT NULL
);

CREATE TABLE report_status (
                               status_id   NUMBER(10)      NOT NULL PRIMARY KEY,
                               status   VARCHAR2(100)      NOT NULL
);

CREATE TABLE account_info (
                              account_info_id   NUMBER(10)      NOT NULL PRIMARY KEY,
                              bank_info_id   NUMBER(10)      NOT NULL,
                              account_number   VARCHAR2(100)      NOT NULL,
                              account_holder   VARCHAR2(100)      NOT NULL,
                              account_name   VARCHAR2(100)      NOT NULL
);

CREATE TABLE notice_images (
                               notice_img_id   NUMBER(5)      NOT NULL PRIMARY KEY,
                               notice_img_1   VARCHAR2(500)      NOT NULL,
                               notice_img_2   VARCHAR2(500)      NULL,
                               notice_img_3   VARCHAR2(500)      NULL,
                               notice_img_4   VARCHAR2(500)      NULL,
                               notice_img_5   VARCHAR2(500)      NULL
);

CREATE TABLE community_post_img (
                                    community_img_id   NUMBER(5)      NOT NULL PRIMARY KEY,
                                    community_img_name   VARCHAR2(1000)      NOT NULL
);

CREATE TABLE faq_type (
                          faq_type_id   NUMBER(10)      NOT NULL PRIMARY KEY,
                          faq_type_name   VARCHAR2(100)      NOT NULL
);

CREATE TABLE event_recruitment_type (
                                        event_recruit_type_id   NUMBER(10)      NOT NULL PRIMARY KEY,
                                        event_recruit_type   VARCHAR2(50)      NOT NULL
);

CREATE TABLE activity_theme (
                                a_theme_id   NUMBER(2)      NOT NULL PRIMARY KEY,
                                a_theme_name   VARCHAR2(30)      NOT NULL
);

CREATE TABLE member_list (
                             mem_id   NUMBER(38)      NOT NULL PRIMARY KEY,
                             mem_type_id   NUMBER(1)      NOT NULL,
                             u_id   NUMBER(10)      NULL,
                             s_id   NUMBER(10)      NULL
);

CREATE TABLE board_list (
                            board_id NUMBER(10) NOT NULL PRIMARY KEY,
                            post_type_id NUMBER(2) NOT NULL,
                            a_post_id NUMBER(10) NULL,
                            rec_a_post_id NUMBER(10) NULL,
                            rec_t_id NUMBER(10) NULL,
                            event_id NUMBER(10) NULL,
                            u_community_post_id NUMBER(10) NULL,
                            seller_community_post_id NUMBER(10) NULL
);

CREATE TABLE admin_authority (
                                 admin_authority_id   NUMBER(10)      NOT NULL PRIMARY KEY,
                                 admin_authority_name   VARCHAR2(50)      NOT NULL
);

CREATE TABLE inquiry (
                         inquiry_id   NUMBER(10)      NOT NULL PRIMARY KEY,
                         inquiry_status_id   NUMBER(10)  DEFAULT 1    NOT NULL,
                         inquiry_type_id   NUMBER(10)      NOT NULL,
                         mem_id   NUMBER(38)      NOT NULL,
                         inquiry_title   VARCHAR2(100)      NOT NULL,
                         inquiry_content   CLOB      NOT NULL,
                         inquiry_date_created   TIMESTAMP      NOT NULL,
                         inquiry_a   CLOB      NULL
);
--
--CREATE TABLE event_winner_1 (
--   event_report_id   NUMBER(20)      NOT NULL PRIMARY KEY,
--   u_id   NUMBER(20)      NOT NULL,
--   event_id   NUMBER(10)      NOT NULL,
--   event_progress_status_id   NUMBER(10) NOT NULL,
--   event_story   CLOB      NULL
--);
--CREATE TABLE event_winner_2 (
--   event_report_id   NUMBER(20)      NOT NULL PRIMARY KEY,
--   u_id   NUMBER(20)      NOT NULL,
--   event_id   NUMBER(10)      NOT NULL,
--   event_progress_status_id   NUMBER(10) NOT NULL,
--   event_story   CLOB      NULL
--);
--CREATE TABLE event_winner_3 (
--   event_report_id   NUMBER(20)      NOT NULL PRIMARY KEY,
--   u_id   NUMBER(20)      NOT NULL,
--   event_id   NUMBER(10)      NOT NULL,
--   event_progress_status_id   NUMBER(10) NOT NULL,
--   event_story   CLOB      NULL
--);
--CREATE TABLE event_winner_4 (
--   event_report_id   NUMBER(20)      NOT NULL PRIMARY KEY,
--   u_id   NUMBER(20)      NOT NULL,
--   event_id   NUMBER(10)      NOT NULL,
--   event_progress_status_id   NUMBER(10) NOT NULL,
--   event_story   CLOB      NULL
--);
--CREATE TABLE event_winner_5 (
--   event_report_id   NUMBER(20)      NOT NULL PRIMARY KEY,
--   u_id   NUMBER(20)      NOT NULL,
--   event_id   NUMBER(10)      NOT NULL,
--   event_progress_status_id   NUMBER(10) NOT NULL,
--   event_story   CLOB      NULL
--);
--CREATE TABLE event_winner_6 (
--   event_report_id   NUMBER(20)      NOT NULL PRIMARY KEY,
--   u_id   NUMBER(20)      NOT NULL,
--   event_id   NUMBER(10)      NOT NULL,
--   event_progress_status_id   NUMBER(10) NOT NULL,
--   event_story   CLOB      NULL
--);
--CREATE TABLE event_winner_7 (
--   event_report_id   NUMBER(20)      NOT NULL PRIMARY KEY,
--   u_id   NUMBER(20)      NOT NULL,
--   event_id   NUMBER(10)      NOT NULL,
--   event_progress_status_id   NUMBER(10) NOT NULL,
--   event_story   CLOB      NULL
--);
--CREATE TABLE event_winner_8 (
--   event_report_id   NUMBER(20)      NOT NULL PRIMARY KEY,
--   u_id   NUMBER(20)      NOT NULL,
--   event_id   NUMBER(10)      NOT NULL,
--   event_progress_status_id   NUMBER(10) NOT NULL,
--   event_story   CLOB      NULL
--);
--CREATE TABLE event_winner_9 (
--   event_report_id   NUMBER(20)      NOT NULL PRIMARY KEY,
--   u_id   NUMBER(20)      NOT NULL,
--   event_id   NUMBER(10)      NOT NULL,
--   event_progress_status_id   NUMBER(10) NOT NULL,
--   event_story   CLOB      NULL
--);
--CREATE TABLE event_winner_10 (
--   event_report_id   NUMBER(20)      NOT NULL PRIMARY KEY,
--   u_id   NUMBER(20)      NOT NULL,
--   event_id   NUMBER(10)      NOT NULL,
--   event_progress_status_id   NUMBER(10) NOT NULL,
--   event_story   CLOB      NULL
--);
--CREATE TABLE event_winner_11 (
--   event_report_id   NUMBER(20)      NOT NULL PRIMARY KEY,
--   u_id   NUMBER(20)      NOT NULL,
--   event_id   NUMBER(10)      NOT NULL,
--   event_progress_status_id   NUMBER(10) NOT NULL,
--   event_story   CLOB      NULL
--);
--CREATE TABLE event_winner_12 (
--   event_report_id   NUMBER(20)      NOT NULL PRIMARY KEY,
--   u_id   NUMBER(20)      NOT NULL,
--   event_id   NUMBER(10)      NOT NULL,
--   event_progress_status_id   NUMBER(10) NOT NULL,
--   event_story   CLOB      NULL
--);
CREATE TABLE event_status (
                              event_status_id   NUMBER(10)      NOT NULL PRIMARY KEY,
                              event_status   VARCHAR2(100)   DEFAULT '요청완료'   NOT NULL
);

CREATE TABLE post_likes (
                            l_id   NUMBER(10)      NOT NULL PRIMARY KEY,
                            u_id   NUMBER(10)      NOT NULL,
                            board_id   NUMBER(10)      NOT NULL,
                            post_type_id   NUMBER(2)      NOT NULL
);

--CREATE TABLE activity_customer_1 (
--    a_customer_id   NUMBER(10)      NOT NULL PRIMARY KEY,
--   a_post_id   NUMBER(10)      NOT NULL,
--    u_id NUMBER(10) NOT NULL
--);
--CREATE TABLE activity_customer_2(
--    a_customer_id   NUMBER(10)      NOT NULL PRIMARY KEY,
--   a_post_id   NUMBER(10)      NOT NULL,
--    u_id NUMBER(10) NOT NULL
--);
--CREATE TABLE activity_customer_3 (
--    a_customer_id   NUMBER(10)      NOT NULL PRIMARY KEY,
--   a_post_id   NUMBER(10)      NOT NULL,
--    u_id NUMBER(10) NOT NULL
--);
--CREATE TABLE activity_customer_4 (
--    a_customer_id   NUMBER(10)      NOT NULL PRIMARY KEY,
--   a_post_id   NUMBER(10)      NOT NULL,
--    u_id NUMBER(10) NOT NULL
--);
--CREATE TABLE activity_customer_5 (
--    a_customer_id   NUMBER(10)      NOT NULL PRIMARY KEY,
--   a_post_id   NUMBER(10)      NOT NULL,
--    u_id NUMBER(10) NOT NULL
--);
--CREATE TABLE activity_customer_6 (
--    a_customer_id   NUMBER(10)      NOT NULL PRIMARY KEY,
--   a_post_id   NUMBER(10)      NOT NULL,
--    u_id NUMBER(10) NOT NULL
--);
--CREATE TABLE activity_customer_7 (
--    a_customer_id   NUMBER(10)      NOT NULL PRIMARY KEY,
--   a_post_id   NUMBER(10)      NOT NULL,
--    u_id NUMBER(10) NOT NULL
--);
--CREATE TABLE activity_customer_8 (
--    a_customer_id   NUMBER(10)      NOT NULL PRIMARY KEY,
--   a_post_id   NUMBER(10)      NOT NULL,
--    u_id NUMBER(10) NOT NULL
--);

CREATE TABLE town_report (
                             t_r_id   NUMBER(20)      NOT NULL PRIMARY KEY,
                             t_r_img_id   NUMBER(5)      NULL,
                             mem_id   NUMBER(38)      NOT NULL,
                             town_id   NUMBER(3)      NOT NULL,
                             t_r_title   VARCHAR2(255)      NOT NULL,
                             t_r_content   CLOB      NOT NULL,
                             t_r_date_created   TIMESTAMP   DEFAULT SYSTIMESTAMP   NOT NULL
);

CREATE TABLE town_report_images (
                                    t_r_img_id   NUMBER(5)      NOT NULL PRIMARY KEY,
                                    t_r_img1   VARCHAR2(500)      NOT NULL,
                                    t_r_img2   VARCHAR2(500)      NULL,
                                    t_r_img3   VARCHAR2(500)      NULL,
                                    t_r_img4   VARCHAR2(500)      NULL,
                                    t_r_img5   VARCHAR2(500)      NULL
);
CREATE TABLE event_progress_status (
                                       event_progress_status_id   NUMBER(10) NOT NULL PRIMARY KEY,
                                       event_progress_status   VARCHAR2(50)      NOT NULL
);

CREATE TABLE bank_request_info (
                                   bank_info_id   NUMBER(10)      NOT NULL PRIMARY KEY,
                                   bank_name   VARCHAR2(50)      NOT NULL
);

CREATE TABLE bank_response_info (
                                    bank_info_id   NUMBER(10)      NOT NULL PRIMARY KEY,
                                    bank_name   VARCHAR2(50)      NOT NULL
);