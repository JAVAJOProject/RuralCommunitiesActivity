package com.javajo.sunshineRoad.model.dao.event;

import com.javajo.sunshineRoad.mappers.community.EventMapper;
import com.javajo.sunshineRoad.model.dto.event.EventDTO;
import com.javajo.sunshineRoad.model.dto.event.EventImagesDTO;
import com.javajo.sunshineRoad.model.dto.event.EventStoryDTO;
import lombok.RequiredArgsConstructor;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class EventDAO {
    private final SqlSessionTemplate sqlSession;

    public int getTotalActiveEventCount() {
        EventMapper mapper = sqlSession.getMapper(EventMapper.class);
        return mapper.getTotalActiveEventCount();
    }
    public int getRecruitingActiveEventOnlyCount() {
        EventMapper mapper = sqlSession.getMapper(EventMapper.class);
        return mapper.getRecruitingActiveEventOnlyCount();
    }
    public int getEventPostCurrentId() {
        EventMapper mapper = sqlSession.getMapper(EventMapper.class);
        return mapper.getEventPostCurrentId();
    }
    public int getEventImgCurrentId() {
        EventMapper mapper = sqlSession.getMapper(EventMapper.class);
        return mapper.getEventImgCurrentId();
    }
    public void postRequestEventPost(EventDTO event) {
        EventMapper mapper = sqlSession.getMapper(EventMapper.class);
        mapper.postRequestEventPost(event);
    }
    public void postEventImagesValues(EventImagesDTO eventImages) {
        EventMapper mapper = sqlSession.getMapper(EventMapper.class);
        mapper.postEventImagesValues(eventImages);
    }
    public void updateEventImgIdToEvent(EventDTO event) {
        EventMapper mapper = sqlSession.getMapper(EventMapper.class);
        mapper.updateEventImgIdToEvent(event);
    }
    public int getEventRecruitTypeId(int eventId) {
        EventMapper mapper = sqlSession.getMapper(EventMapper.class);
        return mapper.getEventRecruitTypeId(eventId);
    }
    public void postEventStoryRequest(EventStoryDTO eventStory) {
        EventMapper mapper = sqlSession.getMapper(EventMapper.class);
        mapper.postEventStoryRequest(eventStory);
    }

    public EventDTO getEventDetailFromEventId(int eventId) {
        EventMapper mapper = sqlSession.getMapper(EventMapper.class);
        return mapper.getEventFromEventId(eventId);
    }

    public EventImagesDTO getEventImagesById(int eventImgId) {
        EventMapper mapper = sqlSession.getMapper(EventMapper.class);
        return mapper.getEventImagesByImgId(eventImgId);
    }

    public List<EventDTO> getRequestPageEventContent(int startPostNo, int endPostNo) {
        EventMapper mapper = sqlSession.getMapper(EventMapper.class);
        return mapper.getRequestPageEventContent(startPostNo, endPostNo);
    }
    public List<EventDTO> getRequestPageRecruitingEventDataOnly(int startPostNo, int endPostNo) {
        EventMapper mapper = sqlSession.getMapper(EventMapper.class);
        return mapper.getRequestPageRecruitingEventDataOnly(startPostNo, endPostNo);
    }

    public EventStoryDTO getEventStoryContent(int eventReportId) {
        EventMapper mapper = sqlSession.getMapper(EventMapper.class);
        return mapper.getEventStoryContent(eventReportId);
    }

    public void updateEventStoryContent(EventStoryDTO eventStory) {
        EventMapper mapper = sqlSession.getMapper(EventMapper.class);
        mapper.updateEventStoryContent(eventStory);
    }
}