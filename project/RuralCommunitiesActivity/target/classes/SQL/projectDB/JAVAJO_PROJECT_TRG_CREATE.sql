-- SYSTEM 계정에서

--GRANT CREATE TRIGGER TO JAVAJO;
--GRANT CREATE ANY TRIGGER TO JAVAJO;
--GRANT ALTER ANY TRIGGER TO JAVAJO;
--GRANT CREATE ANY TABLE TO JAVAJO;
--GRANT CREATE SEQUENCE TO JAVAJO;
--GRANT CREATE PROCEDURE TO JAVAJO;

-- 프로시저 생성 후      
--GRANT EXECUTE ON JAVAJO.activity_customer_create TO JAVAJO;
--GRANT EXECUTE ON JAVAJO.activity_customer_drop TO JAVAJO;
--GRANT EXECUTE ON JAVAJO.event_winner_create TO JAVAJO;
--GRANT EXECUTE ON JAVAJO.event_winner_drop TO JAVAJO;

--마이바티스에서 프로시저 호출 방법
--<select id="아이디이름" statementType="CALLABLE" parameterType="int">
--{call activity_customer_create(#{aPostId})}
--</select>
--<select id="아이디이름" statementType="CALLABLE" parameterType="int">
--{call activity_customer_drop(#{aPostId})}
--</select>
--<select id="아이디이름" statementType="CALLABLE" parameterType="int">
--{call event_winner_create(#{aPostId})}
--</select>
--<select id="아이디이름" statementType="CALLABLE" parameterType="int">
--{call event_winner_drop(#{aPostId})}
--</select>

-- JAVAJO 계정에서    

-- 썸네일 등록/수정/삭제  
CREATE OR REPLACE TRIGGER trg_act_thumnail_insert
AFTER
INSERT ON activity_images
FOR EACH ROW
BEGIN
	IF INSERTING THEN
		UPDATE activity_info SET a_thumbnail_img = :NEW.a_img1 WHERE a_img_id = :NEW.a_img_id;
    END IF;
END;
/
CREATE OR REPLACE TRIGGER trg_act_thumnail_update
AFTER
UPDATE ON activity_images
FOR EACH ROW
BEGIN
	IF UPDATING THEN
		UPDATE activity_info SET a_thumbnail_img = :NEW.a_img1 WHERE a_img_id = :NEW.a_img_id;
    END IF;
END;
/
CREATE OR REPLACE TRIGGER trg_act_thumnail_delete
AFTER
DELETE ON activity_images
FOR EACH ROW
BEGIN
	IF DELETING THEN
		UPDATE activity_info SET a_thumbnail_img = NULL WHERE a_img_id = :OLD.a_img_id;
    END IF;
END;
/
CREATE OR REPLACE TRIGGER trg_rec_act_thumnail_insert
AFTER
INSERT ON rec_images
FOR EACH ROW
BEGIN
	IF INSERTING THEN
        UPDATE rec_activity_info SET rec_a_thumbnail_img = :NEW.rec_a_img1 WHERE rec_a_img_id = :NEW.rec_a_img_id;
    END IF;
END;
/
CREATE OR REPLACE TRIGGER trg_rec_act_thumnail_update
AFTER
UPDATE ON rec_images
FOR EACH ROW
BEGIN
	IF UPDATING THEN
		UPDATE rec_activity_info SET rec_a_thumbnail_img = :NEW.rec_a_img1 WHERE rec_a_img_id = :NEW.rec_a_img_id;
    END IF;
END;
/
CREATE OR REPLACE TRIGGER trg_rec_act_thumnail_delete
AFTER
DELETE ON rec_images
FOR EACH ROW
BEGIN
	IF DELETING THEN
		UPDATE rec_activity_info SET rec_a_thumbnail_img = NULL WHERE rec_a_img_id = :OLD.rec_a_img_id;
    END IF;
END;
/
CREATE OR REPLACE TRIGGER trg_rec_town_thumnail_insert
AFTER
INSERT ON rec_town_images
FOR EACH ROW
BEGIN
	IF INSERTING THEN
        UPDATE rec_town_info SET rec_t_thumbnail_img = :NEW.rec_town_img1 WHERE rec_t_img_id = :NEW.rec_town_img_id;
    END IF;
END;
/
CREATE OR REPLACE TRIGGER trg_rec_town_thumnail_update
AFTER
UPDATE ON rec_town_images
FOR EACH ROW
BEGIN
	IF UPDATING THEN
		UPDATE rec_town_info SET rec_t_thumbnail_img = :NEW.rec_town_img1 WHERE rec_t_img_id = :NEW.rec_town_img_id;
    END IF;
END;
/
CREATE OR REPLACE TRIGGER trg_rec_town_thumnail_delete
AFTER
DELETE ON rec_town_images
FOR EACH ROW
BEGIN
	IF DELETING THEN
		UPDATE rec_town_info SET rec_t_thumbnail_img = NULL WHERE rec_t_img_id = :OLD.rec_town_img_id;
    END IF;
END;
/
CREATE OR REPLACE TRIGGER trg_event_thumnail_insert
AFTER
INSERT ON event_images
FOR EACH ROW
BEGIN
	IF INSERTING THEN
		UPDATE event SET event_thumbnail_img = :NEW.event_img_1 WHERE event_img_id = :NEW.event_img_id;
    END IF;
END;
/
CREATE OR REPLACE TRIGGER trg_event_thumnail_update
AFTER
UPDATE ON event_images
FOR EACH ROW
BEGIN
	IF UPDATING THEN
		UPDATE event SET event_thumbnail_img = :NEW.event_img_1 WHERE event_img_id = :NEW.event_img_id;
    END IF;
END;
/
CREATE OR REPLACE TRIGGER trg_event_thumnail_delete
AFTER
DELETE ON event_images
FOR EACH ROW
BEGIN
	IF DELETING THEN
		UPDATE event SET event_thumbnail_img = NULL WHERE event_img_id = :OLD.event_img_id;
    END IF;
END;
/

--전체 게시판 관리 등록/삭제
CREATE OR REPLACE TRIGGER trg_activity_post_insert
AFTER
INSERT ON activity_post
FOR EACH ROW
BEGIN
	IF INSERTING THEN
		INSERT INTO board_list(board_id, post_type_id, a_post_id) VALUES (board_list_seq.NEXTVAL, 1, :NEW.a_post_id);
    END IF;
END;
/
CREATE OR REPLACE TRIGGER trg_activity_post_delete
AFTER
DELETE ON activity_post
FOR EACH ROW
BEGIN
	IF DELETING THEN
		DELETE FROM board_list WHERE a_post_id = :OLD.a_post_id;
    END IF;
END;
/
CREATE OR REPLACE TRIGGER trg_rec_activity_insert
AFTER
INSERT ON rec_activity_info
FOR EACH ROW
BEGIN
	IF INSERTING THEN
		INSERT INTO board_list(board_id, post_type_id, rec_a_post_id) VALUES (board_list_seq.NEXTVAL, 2, :NEW.rec_a_post_id);
    END IF;
END;
/
CREATE OR REPLACE TRIGGER trg_rec_activity_delete
AFTER
DELETE ON rec_activity_info
FOR EACH ROW
BEGIN
	IF DELETING THEN
		DELETE FROM board_list WHERE rec_a_post_id = :OLD.rec_a_post_id;
    END IF;
END;
/
CREATE OR REPLACE TRIGGER trg_rec_town_insert
AFTER
INSERT ON rec_town_info
FOR EACH ROW
BEGIN
	IF INSERTING THEN
		INSERT INTO board_list(board_id, post_type_id, rec_t_id) VALUES (board_list_seq.NEXTVAL, 3, :NEW.rec_t_id);
    END IF;
END;
/
CREATE OR REPLACE TRIGGER trg_rec_town_delete
AFTER
DELETE ON rec_town_info
FOR EACH ROW
BEGIN
	IF DELETING THEN
		DELETE FROM board_list WHERE rec_t_id = :OLD.rec_t_id;
    END IF;
END;
/
CREATE OR REPLACE TRIGGER trg_event_insert
AFTER
INSERT ON event
FOR EACH ROW
BEGIN
	IF INSERTING THEN
		INSERT INTO board_list(board_id, post_type_id, event_id) VALUES (board_list_seq.NEXTVAL, 4, :NEW.event_id);
    END IF;
END;
/
CREATE OR REPLACE TRIGGER trg_event_delete
AFTER
DELETE ON event
FOR EACH ROW
BEGIN
	IF DELETING THEN
		DELETE FROM board_list WHERE event_id = :OLD.event_id;
    END IF;
END;
/
CREATE OR REPLACE TRIGGER trg_member_community_insert
AFTER
INSERT ON member_community
FOR EACH ROW
BEGIN
	IF INSERTING THEN
		INSERT INTO board_list(board_id, post_type_id, u_community_post_id) VALUES (board_list_seq.NEXTVAL, 5, :NEW.u_community_post_id);
    END IF;
END;
/
CREATE OR REPLACE TRIGGER trg_member_community_delete
AFTER
DELETE ON member_community
FOR EACH ROW
BEGIN
	IF DELETING THEN
		DELETE FROM board_list WHERE u_community_post_id = :OLD.u_community_post_id;
    END IF;
END;
/
CREATE OR REPLACE TRIGGER trg_seller_community_insert
AFTER
INSERT ON seller_community
FOR EACH ROW
BEGIN
	IF INSERTING THEN
		INSERT INTO board_list(board_id, post_type_id, seller_community_post_id) VALUES (board_list_seq.NEXTVAL, 6, :NEW.seller_community_post_id);
    END IF;
END;
/
CREATE OR REPLACE TRIGGER trg_seller_community_delete
AFTER
DELETE ON seller_community
FOR EACH ROW
BEGIN
	IF DELETING THEN
		DELETE FROM board_list WHERE seller_community_post_id = :OLD.seller_community_post_id;
    END IF;
END;
/

-- 전체 회원 관리(관리자 제외)
CREATE OR REPLACE TRIGGER trg_member_insert
AFTER
INSERT ON member
FOR EACH ROW
BEGIN
	IF INSERTING THEN
		INSERT INTO member_list(mem_id, mem_type_id, u_id) VALUES (member_list_seq.NEXTVAL, 1, :NEW.u_id);
    END IF;
END;
/
CREATE OR REPLACE TRIGGER trg_member_delete
AFTER
DELETE ON member
FOR EACH ROW
BEGIN
	IF DELETING THEN
		DELETE FROM member_list WHERE u_id = :OLD.u_id;
    END IF;
END;
/
CREATE OR REPLACE TRIGGER trg_seller_insert
AFTER
INSERT ON seller
FOR EACH ROW
BEGIN
	IF INSERTING THEN
		INSERT INTO member_list(mem_id, mem_type_id, s_id) VALUES (member_list_seq.NEXTVAL, 2, :NEW.s_id);
    END IF;
END;
/
CREATE OR REPLACE TRIGGER trg_seller_delete
AFTER
DELETE ON seller
FOR EACH ROW
BEGIN
	IF DELETING THEN
		DELETE FROM member_list WHERE s_id = :OLD.s_id;
    END IF;
END;
/

-- 찜하기 카운트 프로시저 및 트리거
CREATE OR REPLACE TRIGGER favorite_cnt_Insert
AFTER
INSERT ON favorite
FOR EACH ROW
DECLARE
    p_id1 NUMBER;
    p_id2 NUMBER;
    p_cnt1 NUMBER;
    p_cnt2 NUMBER;
BEGIN
    BEGIN
        SELECT a_post_id INTO p_id1 FROM board_list WHERE board_id = :NEW.board_id;
    EXCEPTION
        WHEN NO_DATA_FOUND THEN p_id1 := 0;
    END;
    BEGIN
        SELECT event_id INTO p_id2 FROM board_list WHERE board_id = :NEW.board_id;
    EXCEPTION
        WHEN NO_DATA_FOUND THEN p_id2 := 0;
    END;
    
    BEGIN
        SELECT NVL(a_favorite_cnt, 0) INTO p_cnt1 FROM activity_post WHERE a_post_id = p_id1;
    EXCEPTION
        WHEN NO_DATA_FOUND THEN p_cnt1 := 0;
    END;
    BEGIN
        SELECT NVL(event_favorite_cnt, 0) INTO p_cnt2 FROM event WHERE event_id = p_id2;
    EXCEPTION
        WHEN NO_DATA_FOUND THEN p_cnt2 := 0;
    END;
    
	IF INSERTING THEN
		UPDATE activity_post SET a_favorite_cnt = (p_cnt1 + 1) WHERE a_post_id = p_id1;
		UPDATE event SET event_favorite_cnt = (p_cnt2 + 1) WHERE event_id = p_id2;
	END IF;
END;
/

CREATE OR REPLACE TRIGGER favorite_cnt_delete
AFTER
DELETE ON favorite
FOR EACH ROW
DECLARE
    p_id1 NUMBER;
    p_id2 NUMBER;
    p_cnt1 NUMBER;
    p_cnt2 NUMBER;
BEGIN
    BEGIN
        SELECT a_post_id INTO p_id1 FROM board_list WHERE board_id = :OLD.board_id;
    EXCEPTION
        WHEN NO_DATA_FOUND THEN p_id1 := 0;
    END;
    BEGIN
        SELECT event_id INTO p_id2 FROM board_list WHERE board_id = :OLD.board_id;
    EXCEPTION
        WHEN NO_DATA_FOUND THEN p_id2 := 0;
    END;
    
    BEGIN
        SELECT a_favorite_cnt INTO p_cnt1 FROM activity_post WHERE a_post_id = p_id1;
    EXCEPTION
        WHEN NO_DATA_FOUND THEN p_cnt1 := 0;
    END;
    BEGIN
        SELECT event_favorite_cnt INTO p_cnt2 FROM event WHERE event_id = p_id2;
    EXCEPTION
        WHEN NO_DATA_FOUND THEN p_cnt2 := 0;
    END;
    
	IF DELETING THEN
		UPDATE activity_post SET a_favorite_cnt = (p_cnt1 - 1) WHERE a_post_id = p_id1;
		UPDATE event SET event_favorite_cnt = (p_cnt2 - 1) WHERE event_id = p_id2;
	END IF;
END;
/

--    ?  ?  ?    ν       ?    
CREATE OR REPLACE TRIGGER like_cnt_Insert
AFTER
INSERT ON post_likes
FOR EACH ROW
DECLARE
    l_id1 NUMBER;
    l_id2 NUMBER;
    l_id3 NUMBER;
    l_id4 NUMBER;
    l_cnt1 NUMBER;
    l_cnt2 NUMBER;
    l_cnt3 NUMBER;
    l_cnt4 NUMBER;
BEGIN
    BEGIN
        SELECT u_community_post_id INTO l_id1 FROM board_list WHERE board_id = :NEW.board_id;
    EXCEPTION
        WHEN NO_DATA_FOUND THEN l_id1 := 0;
    END;
    BEGIN
        SELECT rec_a_post_id INTO l_id2 FROM board_list WHERE board_id = :NEW.board_id;
    EXCEPTION
        WHEN NO_DATA_FOUND THEN l_id2 := 0;
    END;
    BEGIN
        SELECT rec_t_id INTO l_id3 FROM board_list WHERE board_id = :NEW.board_id;
    EXCEPTION
        WHEN NO_DATA_FOUND THEN l_id3 := 0;
    END;
    BEGIN
        SELECT seller_community_post_id INTO l_id4 FROM board_list WHERE board_id = :NEW.board_id;
    EXCEPTION
        WHEN NO_DATA_FOUND THEN l_id4 := 0;
    END;
    
    BEGIN
        SELECT community_like_cnt INTO l_cnt1 FROM member_community WHERE u_community_post_id = l_id1;
    EXCEPTION
        WHEN NO_DATA_FOUND THEN l_cnt1 := 0;
    END;
    BEGIN
        SELECT NVL(rec_a_like_cnt, 0) INTO l_cnt2 FROM rec_activity_info WHERE rec_a_post_id = l_id2;
    EXCEPTION
        WHEN NO_DATA_FOUND THEN l_cnt2 := 0;
    END;
    BEGIN
        SELECT NVL(rec_t_like_cnt, 0) INTO l_cnt3 FROM rec_town_info WHERE rec_t_id = l_id3;
    EXCEPTION
        WHEN NO_DATA_FOUND THEN l_cnt3 := 0;
    END;
    BEGIN
        SELECT community_like_cnt INTO l_cnt4 FROM member_community WHERE u_community_post_id = l_id4;
    EXCEPTION
        WHEN NO_DATA_FOUND THEN l_cnt2 := 0;
    END;
    
	IF INSERTING THEN
		UPDATE member_community SET community_like_cnt = (l_cnt1 + 1) WHERE u_community_post_id = l_id1;
		UPDATE rec_activity_info SET rec_a_like_cnt = (l_cnt2 + 1) WHERE rec_a_post_id = l_id2;
		UPDATE rec_town_info SET rec_t_like_cnt = (l_cnt3 + 1) WHERE rec_t_id = l_id3;
		UPDATE seller_community SET community_like_cnt = (l_cnt4 + 1) WHERE seller_community_post_id = l_id4;
	END IF;
END;
/
CREATE OR REPLACE TRIGGER like_cnt_delete
AFTER
DELETE ON post_likes
FOR EACH ROW
DECLARE
    l_id1 NUMBER;
    l_id2 NUMBER;
    l_id3 NUMBER;
    l_id4 NUMBER;
    l_cnt1 NUMBER;
    l_cnt2 NUMBER;
    l_cnt3 NUMBER;
    l_cnt4 NUMBER;
BEGIN
    BEGIN
        SELECT u_community_post_id INTO l_id1 FROM board_list WHERE board_id = :OLD.board_id;
    EXCEPTION
        WHEN NO_DATA_FOUND THEN l_id1 := 0;
    END;
    BEGIN
        SELECT rec_a_post_id INTO l_id2 FROM board_list WHERE board_id = :OLD.board_id;
    EXCEPTION
        WHEN NO_DATA_FOUND THEN l_id2 := 0;
    END;
    BEGIN
        SELECT rec_t_id INTO l_id3 FROM board_list WHERE board_id = :OLD.board_id;
    EXCEPTION
        WHEN NO_DATA_FOUND THEN l_id3 := 0;
    END;
    BEGIN
        SELECT seller_community_post_id INTO l_id4 FROM board_list WHERE board_id = :OLD.board_id;
    EXCEPTION
        WHEN NO_DATA_FOUND THEN l_id4 := 0;
    END;
    
    BEGIN
        SELECT community_like_cnt INTO l_cnt1 FROM member_community WHERE u_community_post_id = l_id1;
    EXCEPTION
        WHEN NO_DATA_FOUND THEN l_cnt1 := 0;
    END;
    BEGIN
        SELECT rec_a_like_cnt INTO l_cnt2 FROM rec_activity_info WHERE rec_a_post_id = l_id2;
    EXCEPTION
        WHEN NO_DATA_FOUND THEN l_cnt2 := 0;
    END;
    BEGIN
        SELECT rec_t_like_cnt INTO l_cnt3 FROM rec_town_info WHERE rec_t_id = l_id3;
    EXCEPTION
        WHEN NO_DATA_FOUND THEN l_cnt3 := 0;
    END;
    BEGIN
        SELECT community_like_cnt INTO l_cnt4 FROM member_community WHERE u_community_post_id = l_id4;
    EXCEPTION
        WHEN NO_DATA_FOUND THEN l_cnt4 := 0;
    END;
    
	IF DELETING THEN
		UPDATE member_community SET community_like_cnt = (l_cnt1 - 1) WHERE u_community_post_id = l_id1;
		UPDATE rec_activity_info SET rec_a_like_cnt = (l_cnt1 - 1) WHERE rec_a_post_id = l_id2;
		UPDATE rec_town_info SET rec_t_like_cnt = (l_cnt1 - 1) WHERE rec_t_id = l_id3;
		UPDATE seller_community SET community_like_cnt = (l_cnt4 - 1) WHERE seller_community_post_id = l_id4;
	END IF;
END;
/


--  신고수 동기화 트리거
CREATE OR REPLACE TRIGGER trg_community_cum_insert
AFTER
INSERT ON report_info
FOR EACH ROW
DECLARE
    u_community_id NUMBER;
    s_community_id NUMBER;
BEGIN
    BEGIN
        SELECT u_community_post_id INTO u_community_id FROM board_list WHERE board_id = :NEW.board_id;
    EXCEPTION
        WHEN NO_DATA_FOUND THEN u_community_id := 0;
    END;
    BEGIN
        SELECT seller_community_post_id INTO s_community_id FROM board_list WHERE board_id = :NEW.board_id;
    EXCEPTION
        WHEN NO_DATA_FOUND THEN s_community_id := 0;
    END;
	IF INSERTING THEN
UPDATE member_community SET community_cum_cnt = :NEW.report_cnt WHERE u_community_post_id = u_community_id;
UPDATE seller_community SET community_cum_cnt = :NEW.report_cnt WHERE seller_community_post_id = s_community_id;
	END IF;
END;
/

CREATE OR REPLACE TRIGGER trg_community_cum_update
AFTER
UPDATE ON report_info
FOR EACH ROW
DECLARE
    u_community_id NUMBER;
    s_community_id NUMBER;
BEGIN
    BEGIN
        SELECT u_community_post_id INTO u_community_id FROM board_list WHERE board_id = :NEW.board_id;
    EXCEPTION
        WHEN NO_DATA_FOUND THEN u_community_id := 0;
    END;
    BEGIN
        SELECT seller_community_post_id INTO s_community_id FROM board_list WHERE board_id = :NEW.board_id;
    EXCEPTION
        WHEN NO_DATA_FOUND THEN s_community_id := 0;
    END;
	IF UPDATING THEN
UPDATE member_community SET community_cum_cnt = :NEW.report_cnt WHERE u_community_post_id = u_community_id;
UPDATE seller_community SET community_cum_cnt = :NEW.report_cnt WHERE seller_community_post_id = s_community_id;
	END IF;
END;
/

CREATE OR REPLACE TRIGGER trg_community_cum_delete
AFTER
DELETE ON report_info
FOR EACH ROW
DECLARE
    u_community_id NUMBER;
    s_community_id NUMBER;
BEGIN
    BEGIN
        SELECT u_community_post_id INTO u_community_id FROM board_list WHERE board_id = :OLD.board_id;
    EXCEPTION
        WHEN NO_DATA_FOUND THEN u_community_id := 0;
    END;
    BEGIN
        SELECT seller_community_post_id INTO s_community_id FROM board_list WHERE board_id = :OLD.board_id;
    EXCEPTION
        WHEN NO_DATA_FOUND THEN s_community_id := 0;
    END;
	IF DELETING THEN
UPDATE member_community SET community_cum_cnt = 0 WHERE u_community_post_id = u_community_id;
UPDATE seller_community SET community_cum_cnt = 0 WHERE seller_community_post_id = s_community_id;
	END IF;
END;
/