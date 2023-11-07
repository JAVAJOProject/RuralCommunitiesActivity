DROP TRIGGER trg_activity_thumnail_insert;
DROP TRIGGER trg_activity_thumnail_update;
DROP TRIGGER trg_activity_thumnail_delete;
DROP TRIGGER trg_rec_activity_thumnail_insert;
DROP TRIGGER trg_rec_activity_thumnail_update;
DROP TRIGGER trg_rec_activity_thumnail_delete;
DROP TRIGGER trg_rec_town_thumnail_insert;
DROP TRIGGER trg_rec_town_thumnail_update;
DROP TRIGGER trg_rec_town_thumnail_delete;
DROP TRIGGER trg_event_thumnail_insert;
DROP TRIGGER trg_event_thumnail_update;
DROP TRIGGER trg_event_thumnail_delete;

DROP TRIGGER trg_activity_post_insert;
DROP TRIGGER trg_activity_post_delete;
DROP TRIGGER trg_rec_activity_insert;
DROP TRIGGER trg_rec_activity_delete;
DROP TRIGGER trg_rec_town_insert;
DROP TRIGGER trg_rec_town_delete;
DROP TRIGGER trg_event_insert;
DROP TRIGGER trg_event_delete;
DROP TRIGGER trg_member_community_insert;
DROP TRIGGER trg_member_community_delete;
DROP TRIGGER trg_seller_community_insert;
DROP TRIGGER trg_seller_community_delete;

DROP TRIGGER trg_member_insert;
DROP TRIGGER trg_member_delete;
DROP TRIGGER trg_seller_insert;
DROP TRIGGER trg_seller_delete;

DROP TRIGGER favorite_cnt_Insert;
DROP TRIGGER favorite_cnt_delete;
DROP TRIGGER like_cnt_Insert;
DROP TRIGGER like_cnt_delete;

DROP TRIGGER trg_community_cum_insert;
DROP TRIGGER trg_community_cum_update;
DROP TRIGGER trg_community_cum_delete;

-- 시퀀스 쪽에 있는 트리거, 프로시저
/*
DROP TRIGGER trg_activity_customer_create;
DROP PROCEDURE activity_customer_create;
DROP TRIGGER trg_activity_customer_drop;
DROP PROCEDURE activity_customer_drop;

DROP TRIGGER event_winner_create;
DROP TRIGGER event_winner_create_insert;
DROP TRIGGER trg_event_winner_create_update;
DROP PROCEDURE event_winner_create;
DROP TRIGGER trg_event_winner_drop;
DROP PROCEDURE event_winner_drop;
*/