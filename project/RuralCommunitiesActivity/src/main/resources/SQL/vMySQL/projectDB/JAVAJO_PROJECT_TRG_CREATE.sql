-- 썸네일 등록/수정/삭제
DELIMITER $$
	CREATE TRIGGER trg_activity_thumnail_insert
	AFTER INSERT
	ON activity_images FOR EACH ROW
	BEGIN
		UPDATE activity_info SET a_thumbnail_img = NEW.a_img1 WHERE a_img_id = NEW.a_img_id;
	END $$

	CREATE TRIGGER trg_activity_thumnail_update
	AFTER UPDATE
	ON activity_images FOR EACH ROW
	BEGIN
		UPDATE activity_info SET a_thumbnail_img = NEW.a_img1 WHERE a_img_id = NEW.a_img_id;
	END $$

	CREATE TRIGGER trg_activity_thumnail_delete
	AFTER DELETE
	ON activity_images FOR EACH ROW
	BEGIN
		UPDATE activity_info SET a_thumbnail_img = NULL WHERE a_img_id = OLD.a_img_id;
	END $$
DELIMITER ;
DELIMITER $$
	CREATE TRIGGER trg_rec_activity_thumnail_insert
	AFTER INSERT
	ON rec_images FOR EACH ROW
	BEGIN
		UPDATE rec_activity_info SET rec_a_thumbnail_img = NEW.rec_a_img1 WHERE rec_a_img_id = NEW.rec_a_img_id;
	END $$

	CREATE TRIGGER trg_rec_activity_thumnail_update
	AFTER UPDATE
	ON rec_images FOR EACH ROW
	BEGIN
		UPDATE rec_activity_info SET rec_a_thumbnail_img = NEW.rec_a_img1 WHERE rec_a_img_id = NEW.rec_a_img_id;
	END $$

	CREATE TRIGGER trg_rec_activity_thumnail_delete
	AFTER DELETE
	ON rec_images FOR EACH ROW
	BEGIN
        UPDATE rec_activity_info SET rec_a_thumbnail_img = NULL WHERE rec_a_img_id = OLD.rec_a_img_id;
	END $$
DELIMITER ;
DELIMITER $$
	CREATE TRIGGER trg_rec_town_thumnail_insert
	AFTER INSERT
	ON rec_town_images FOR EACH ROW
	BEGIN
		UPDATE rec_town_info SET rec_t_thumbnail_img = NEW.rec_town_img1 WHERE rec_t_img_id = NEW.rec_town_img_id;
	END $$

	CREATE TRIGGER trg_rec_town_thumnail_update
	AFTER UPDATE
	ON rec_town_images FOR EACH ROW
	BEGIN
		UPDATE rec_town_info SET rec_t_thumbnail_img = NEW.rec_town_img1 WHERE rec_t_img_id = NEW.rec_town_img_id;
	END $$

	CREATE TRIGGER trg_rec_town_thumnail_delete
	AFTER DELETE
	ON rec_town_images FOR EACH ROW
	BEGIN
        UPDATE rec_town_info SET rec_t_thumbnail_img = NULL WHERE rec_t_img_id = OLD.rec_town_img_id;
	END $$
DELIMITER ;
DELIMITER $$
	CREATE TRIGGER trg_event_thumnail_insert
	AFTER INSERT
	ON event_images FOR EACH ROW
	BEGIN
		UPDATE event SET event_thumbnail_img = NEW.event_img_1 WHERE event_img_id = NEW.event_img_id;
	END $$

	CREATE TRIGGER trg_event_thumnail_update
	AFTER UPDATE
	ON event_images FOR EACH ROW
	BEGIN
		UPDATE event SET event_thumbnail_img = NEW.event_img_1 WHERE event_img_id = NEW.event_img_id;
	END $$

	CREATE TRIGGER trg_event_thumnail_delete
	AFTER DELETE
	ON event_images FOR EACH ROW
	BEGIN
        UPDATE event SET event_thumbnail_img = NULL WHERE event_img_id = OLD.event_img_id;
	END $$
DELIMITER ;

-- 전체 게시판 관리 등록/삭제
DELIMITER $$
	CREATE TRIGGER trg_activity_post_insert
	AFTER INSERT
	ON activity_post FOR EACH ROW
	BEGIN
		INSERT INTO board_list(board_id, post_type_id, a_post_id) VALUES (NULL, 1, NEW.a_post_id);
	END $$

	CREATE TRIGGER trg_activity_post_delete
	AFTER DELETE
	ON activity_post FOR EACH ROW
	BEGIN
		DELETE FROM board_list WHERE a_post_id = OLD.a_post_id;
	END $$
DELIMITER ;
DELIMITER $$
	CREATE TRIGGER trg_rec_activity_insert
	AFTER INSERT
	ON rec_activity_info FOR EACH ROW
	BEGIN
		INSERT INTO board_list(board_id, post_type_id, rec_a_post_id) VALUES (NULL, 2, NEW.rec_a_post_id);
	END $$

	CREATE TRIGGER trg_rec_activity_delete
	AFTER DELETE
	ON rec_activity_info FOR EACH ROW
	BEGIN
		DELETE FROM board_list WHERE rec_a_post_id = OLD.rec_a_post_id;
	END $$
DELIMITER ;
DELIMITER $$
	CREATE TRIGGER trg_rec_town_insert
	AFTER INSERT
	ON rec_town_info FOR EACH ROW
	BEGIN
		INSERT INTO board_list(board_id, post_type_id, rec_t_id) VALUES (NULL, 3, NEW.rec_t_id);
	END $$

	CREATE TRIGGER trg_rec_town_delete
	AFTER DELETE
	ON rec_town_info FOR EACH ROW
	BEGIN
		DELETE FROM board_list WHERE rec_t_id = OLD.rec_t_id;
	END $$
DELIMITER ;
DELIMITER $$
	CREATE TRIGGER trg_event_insert
	AFTER INSERT
	ON event FOR EACH ROW
	BEGIN
		INSERT INTO board_list(board_id, post_type_id, event_id) VALUES (NULL, 4, NEW.event_id);
	END $$

	CREATE TRIGGER trg_event_delete
	AFTER DELETE
	ON event FOR EACH ROW
	BEGIN
		DELETE FROM board_list WHERE event_id = OLD.event_id;
	END $$
DELIMITER ;
DELIMITER $$
	CREATE TRIGGER trg_member_community_insert
	AFTER INSERT
	ON member_community FOR EACH ROW
	BEGIN
		INSERT INTO board_list(board_id, post_type_id, u_community_post_id) VALUES (NULL, 5, NEW.u_community_post_id);
	END $$

	CREATE TRIGGER trg_member_community_delete
	AFTER DELETE
	ON member_community FOR EACH ROW
	BEGIN
		DELETE FROM board_list WHERE u_community_post_id = OLD.u_community_post_id;
	END $$
DELIMITER ;
DELIMITER $$
	CREATE TRIGGER trg_seller_community_insert
	AFTER INSERT
	ON seller_community FOR EACH ROW
	BEGIN
		INSERT INTO board_list(board_id, post_type_id, seller_community_post_id) VALUES (NULL, 6, NEW.seller_community_post_id);
	END $$

	CREATE TRIGGER trg_seller_community_delete
	AFTER DELETE
	ON seller_community FOR EACH ROW
	BEGIN
		DELETE FROM board_list WHERE seller_community_post_id = OLD.seller_community_post_id;
	END $$
DELIMITER ;

-- 전체 회원 관리(관리자 제외)
DELIMITER $$
	CREATE TRIGGER trg_member_insert
	AFTER INSERT
	ON member FOR EACH ROW
	BEGIN
		INSERT INTO member_list(mem_id, mem_type_id, u_id) VALUES (NULL, 1, NEW.u_id);
	END $$

	CREATE TRIGGER trg_member_delete
	AFTER DELETE
	ON member FOR EACH ROW
	BEGIN
		DELETE FROM member_list WHERE u_id = OLD.u_id;
	END $$
DELIMITER ;
DELIMITER $$
	CREATE TRIGGER trg_seller_insert
	AFTER INSERT
	ON seller FOR EACH ROW
	BEGIN
		INSERT INTO member_list(mem_id, mem_type_id, s_id) VALUES (NULL, 2, NEW.s_id);
	END $$

	CREATE TRIGGER trg_seller_delete
	AFTER DELETE
	ON seller FOR EACH ROW
	BEGIN
		DELETE FROM member_list WHERE s_id = OLD.s_id;
	END $$
DELIMITER ;

-- 찜하기 카운트 프로시저 및 트리거
DELIMITER $$
CREATE TRIGGER favorite_cnt_Insert
AFTER INSERT
ON favorite FOR EACH ROW
BEGIN
	UPDATE activity_post SET a_favorite_cnt = (SELECT COUNT(*) FROM favorite WHERE board_id = NEW.board_id) WHERE a_post_id = (SELECT a_post_id FROM board_list WHERE board_id = NEW.board_id);
    UPDATE event SET event_favorite_cnt = (SELECT COUNT(*) FROM favorite WHERE board_id = NEW.board_id) WHERE event_id = (SELECT event_id FROM board_list WHERE board_id = NEW.board_id);
END $$
CREATE TRIGGER favorite_cnt_delete
AFTER DELETE
ON favorite FOR EACH ROW
BEGIN
	UPDATE activity_post SET a_favorite_cnt = (SELECT COUNT(*) FROM favorite WHERE board_id = OLD.board_id) WHERE a_post_id = (SELECT a_post_id FROM board_list WHERE board_id = OLD.board_id);
    UPDATE event SET event_favorite_cnt = (SELECT COUNT(*) FROM favorite WHERE board_id = OLD.board_id) WHERE event_id = (SELECT event_id FROM board_list WHERE board_id = OLD.board_id);
END $$
DELIMITER ;
-- DELIMITER $$
-- CREATE PROCEDURE favoriteCnt(IN tbl_nm VARCHAR(100), IN col_nm VARCHAR(100), IN sql_tp VARCHAR(100))
-- BEGIN
-- 	SET @tbl_name := tbl_nm;
--     SET @col_name := col_nm;
--     SET @sql_type := sql_tp;
--     
--     START TRANSACTION;
-- 	SET @sql := CONCAT('UPDATE ', @tbl_name, ' SET a_favorite_cnt = (SELECT COUNT(*) FROM favorite WHERE board_id = ', @sql_type, '.board_id) WHERE ', @col_name, ' = (SELECT ', @col_name, ' FROM board_list WHERE board_id = ', @sql_type, '.board_id)');
--     
--     PREPARE favoriteCnt FROM @sql;
--     EXECUTE favoriteCnt;
--     COMMIT;
-- END $$
-- DELIMITER ;
-- DELIMITER $$
-- CREATE TRIGGER trg_favorite_insert
-- AFTER INSERT
-- ON favorite FOR EACH ROW
-- BEGIN
-- 	DECLARE tbl_name VARCHAR(100);
--     DECLARE col_name VARCHAR(100);
--     DECLARE sql_type VARCHAR(100);
--     
--     SELECT
-- 		(CASE
-- 			WHEN (NEW.post_type_id = 1) THEN 'activity_post'
--             WHEN (NEW.post_type_id = 4) THEN 'event'
-- 		END) INTO tbl_name;
-- 	SELECT
-- 		(CASE
-- 			WHEN (NEW.post_type_id = 1) THEN 'a_post_id'
--             WHEN (NEW.post_type_id = 4) THEN 'event_id'
-- 		END) INTO col_name;
-- 	SET @sql_type := 'NEW';
--     
-- 	CALL favoriteCnt(@tbl_name, @col_name, @sql_type);
-- END $$
-- CREATE TRIGGER trg_favorite_delete
-- AFTER DELETE
-- ON favorite FOR EACH ROW
-- BEGIN
-- 	DECLARE tbl_name VARCHAR(100);
--     DECLARE col_name VARCHAR(100);
--     DECLARE sql_type VARCHAR(100);
--     
--     SELECT
-- 		(CASE
-- 			WHEN (OLD.post_type_id = 1) THEN 'activity_post'
--             WHEN (OLD.post_type_id = 4) THEN 'event'
-- 		END) INTO tbl_name;
-- 	SELECT
-- 		(CASE
-- 			WHEN (OLD.post_type_id = 1) THEN 'a_post_id'
--             WHEN (OLD.post_type_id = 4) THEN 'event_id'
-- 		END) INTO col_name;
-- 	SET @sql_type := 'OLD';
--     
-- 	CALL favoriteCnt(@tbl_name, @col_name, @sql_type);
-- END $$
-- DELIMITER ;

-- 좋아요 카운트 프로시저 및 트리거
DELIMITER $$
CREATE TRIGGER like_cnt_Insert
AFTER INSERT
ON post_likes FOR EACH ROW
BEGIN
	UPDATE member_community SET community_like_cnt = (SELECT COUNT(*) FROM post_likes WHERE board_id = NEW.board_id) WHERE u_community_post_id = (SELECT u_community_post_id FROM board_list WHERE board_id = NEW.board_id);
    UPDATE rec_activity_info SET rec_a_like_cnt = (SELECT COUNT(*) FROM post_like WHERE board_id = NEW.board_id) WHERE rec_a_post_id = (SELECT rec_a_post_id FROM board_list WHERE board_id = NEW.board_id);
    UPDATE rec_town_info SET rec_t_like_cnt = (SELECT COUNT(*) FROM post_like WHERE board_id = NEW.board_id) WHERE rec_t_id = (SELECT rec_t_id FROM board_list WHERE board_id = NEW.board_id);
    UPDATE seller_community SET community_like_cnt = (SELECT COUNT(*) FROM post_likes WHERE board_id = NEW.board_id) WHERE seller_community_post_id = (SELECT seller_community_post_id FROM board_list WHERE board_id = NEW.board_id);
END $$
CREATE TRIGGER like_cnt_delete
AFTER DELETE
ON post_likes FOR EACH ROW
BEGIN
	UPDATE member_community SET community_like_cnt = (SELECT COUNT(*) FROM post_likes WHERE board_id = OLD.board_id) WHERE u_community_post_id = (SELECT u_community_post_id FROM board_list WHERE board_id = OLD.board_id);
    UPDATE rec_activity_info SET rec_a_like_cnt = (SELECT COUNT(*) FROM post_like WHERE board_id = OLD.board_id) WHERE rec_a_post_id = (SELECT rec_a_post_id FROM board_list WHERE board_id = OLD.board_id);
    UPDATE rec_town_info SET rec_t_like_cnt = (SELECT COUNT(*) FROM post_like WHERE board_id = OLD.board_id) WHERE rec_t_id = (SELECT rec_t_id FROM board_list WHERE board_id = OLD.board_id);
    UPDATE seller_community SET community_like_cnt = (SELECT COUNT(*) FROM post_likes WHERE board_id = OLD.board_id) WHERE seller_community_post_id = (SELECT seller_community_post_id FROM board_list WHERE board_id = OLD.board_id);
END $$
DELIMITER ;
-- DELIMITER $$
-- CREATE PROCEDURE likeCnt(IN tbl_nm VARCHAR(100), IN col_nm VARCHAR(100), IN sql_tp VARCHAR(100))
-- BEGIN
-- 	SET @tbl_name := tbl_nm;
--     SET @col_name := col_nm;
--     SET @sql_type := sql_tp;
--     
--     START TRANSACTION;
-- 	SET @sql := CONCAT('UPDATE ', @tbl_name, ' SET community_like_cnt = (SELECT COUNT(*) FROM post_likes WHERE board_id = ', @sql_type, '.board_id) WHERE ', @col_name, ' = (SELECT ', @col_name, ' FROM board_list WHERE board_id = ', @sql_type, '.board_id)');
--     
--     PREPARE likeCnt FROM @sql;
--     EXECUTE likeCnt;
--     COMMIT;
-- END $$
-- DELIMITER ;
-- DELIMITER $$
-- CREATE TRIGGER trg_like_insert
-- AFTER INSERT
-- ON post_likes FOR EACH ROW
-- BEGIN
-- 	DECLARE tbl_name VARCHAR(100);
--     DECLARE col_name VARCHAR(100);
--     DECLARE sql_type VARCHAR(100);
--     
--     SELECT
-- 		(CASE
--             WHEN (NEW.post_type_id = 2) THEN 'rec_activity_info'
--             WHEN (NEW.post_type_id = 3) THEN 'rec_town_info'
--             WHEN (NEW.post_type_id = 5) THEN 'member_community'
--             WHEN (NEW.post_type_id = 6) THEN 'seller_community'
-- 		END) INTO tbl_name;
-- 	SELECT
-- 		(CASE
--             WHEN (NEW.post_type_id = 2) THEN 'rec_a_post_id'
--             WHEN (NEW.post_type_id = 3) THEN 'rec_t_id'
--             WHEN (NEW.post_type_id = 5) THEN 'u_community_post_id'
--             WHEN (NEW.post_type_id = 6) THEN 'seller_community_post_id'
-- 		END) INTO col_name;
-- 	SET @sql_type := 'NEW';
--         
-- 	CALL likeCnt(@tbl_name, @col_name, @sql_type);
-- END $$
-- CREATE TRIGGER trg_like_delete
-- AFTER DELETE
-- ON post_likes FOR EACH ROW
-- BEGIN
-- 	DECLARE tbl_name VARCHAR(100);
--     DECLARE col_name VARCHAR(100);
--     DECLARE sql_type VARCHAR(100);
--     
--     SELECT
-- 		(CASE
--             WHEN (OLD.post_type_id = 2) THEN 'rec_activity_info'
--             WHEN (OLD.post_type_id = 3) THEN 'rec_town_info'
--             WHEN (OLD.post_type_id = 5) THEN 'member_community'
--             WHEN (OLD.post_type_id = 6) THEN 'seller_community'
-- 		END) INTO tbl_name;
-- 	SELECT
-- 		(CASE
--             WHEN (OLD.post_type_id = 2) THEN 'rec_a_post_id'
--             WHEN (OLD.post_type_id = 3) THEN 'rec_t_id'
--             WHEN (OLD.post_type_id = 5) THEN 'u_community_post_id'
--             WHEN (OLD.post_type_id = 6) THEN 'seller_community_post_id'
-- 		END) INTO col_name;
-- 	SET @sql_type := 'OLD';
--         
-- 	CALL likeCnt(@tbl_name, @col_name, @sql_type);
-- END $$
-- DELIMITER ;

-- 체험서비스/이벤트 게시글 추가시 명단 테이블 생성(MySQL은 프로시저만)
/*
DELIMITER $$
	CREATE PROCEDURE activity_customer_create(IN act_info_id INT)
    BEGIN
		SET @info_id := act_info_id;
        SET @sql := CONCAT('CREATE TABLE activity_customer_', @info_id, '(a_customer_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, a_id INT NOT NULL DEFAULT ', @info_id, ', u_id INT NOT NULL)');
        
        PREPARE stmt FROM @sql;
        EXECUTE stmt;
        DEALLOCATE PREPARE stmt;
	END $$
    CREATE PROCEDURE activity_customer_drop(IN act_info_id INT)
    BEGIN
		SET @info_id := act_info_id;
        SET @sql := CONCAT('DROP TABLE activity_customer_', @info_id);
        
        PREPARE stmt FROM @sql;
        EXECUTE stmt;
        DEALLOCATE PREPARE stmt;
	END $$
DELIMITER ;
DELIMITER $$
	CREATE PROCEDURE event_winner_create(IN e_id INT)
    BEGIN
		SET @event_id := e_id;
        SET @sql := CONCAT('CREATE TABLE event_winner_', @event_id, '(event_report_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, u_id INT NOT NULL, event_id INT NOT NULL DEFAULT ', @event_id, ', event_progress_status_id INT NOT NULL, event_story TEXT NULL)');
        
        PREPARE stmt FROM @sql;
        EXECUTE stmt;
        DEALLOCATE PREPARE stmt;
	END $$
    CREATE PROCEDURE event_winner_drop(IN e_id INT)
    BEGIN
		SET @event_id := e_id;
        SET @sql := CONCAT('DROP TABLE event_winner_', @event_id);
        
        PREPARE stmt FROM @sql;
        EXECUTE stmt;
        DEALLOCATE PREPARE stmt;
	END $$
DELIMITER ;
*/

-- 신고수 동기화 트리거
DELIMITER $$
	CREATE TRIGGER trg_community_cum_insert
	AFTER INSERT
	ON report_info FOR EACH ROW
	BEGIN
		DECLARE u_community_id INT;
        DECLARE s_community_id INT;
        
        SELECT u_community_post_id INTO u_community_id FROM board_list WHERE board_id = NEW.board_id;
        SELECT seller_community_post_id INTO s_community_id FROM board_list WHERE board_id = NEW.board_id;
    
		UPDATE member_community SET community_cum_cnt = NEW.report_cnt WHERE u_community_post_id = IFNULL(u_community_id, 0);
        UPDATE seller_community SET community_cum_cnt = NEW.report_cnt WHERE seller_community_post_id = IFNULL(s_community_id, 0);
	END $$

	CREATE TRIGGER trg_community_cum_update
	AFTER UPDATE
	ON report_info FOR EACH ROW
	BEGIN
		DECLARE u_community_id INT;
        DECLARE s_community_id INT;
        
        SELECT u_community_post_id INTO u_community_id FROM board_list WHERE board_id = NEW.board_id;
        SELECT seller_community_post_id INTO s_community_id FROM board_list WHERE board_id = NEW.board_id;
        
		UPDATE member_community SET community_cum_cnt = NEW.report_cnt WHERE u_community_post_id = IFNULL(u_community_id, 0);
        UPDATE seller_community SET community_cum_cnt = NEW.report_cnt WHERE seller_community_post_id = IFNULL(s_community_id, 0);
	END $$

	CREATE TRIGGER trg_community_cum_delete
	AFTER DELETE
	ON report_info FOR EACH ROW
	BEGIN
		DECLARE u_community_id INT;
        DECLARE s_community_id INT;
        
        SELECT u_community_post_id INTO u_community_id FROM board_list WHERE board_id = OLD.board_id;
        SELECT seller_community_post_id INTO s_community_id FROM board_list WHERE board_id = OLD.board_id;
        
		UPDATE member_community SET community_cum_cnt = 0 WHERE u_community_post_id = IFNULL(u_community_id, 0);
        UPDATE seller_community SET community_cum_cnt = 0 WHERE seller_community_post_id = IFNULL(s_community_id, 0);
	END $$
DELIMITER ;