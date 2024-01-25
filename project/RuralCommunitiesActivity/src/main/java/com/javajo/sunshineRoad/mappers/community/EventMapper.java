package com.javajo.sunshineRoad.mappers.community;

import com.javajo.sunshineRoad.model.dto.event.EventDTO;
import com.javajo.sunshineRoad.model.dto.event.EventImagesDTO;
import com.javajo.sunshineRoad.model.dto.event.EventStoryDTO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface EventMapper {
    public int getTotalActiveEventCount();
    public int getRecruitingActiveEventOnlyCount();
    public void postRequestEventPost(EventDTO event);
    public int getEventPostCurrentId();
    public int getEventImgCurrentId();
    public void postEventImagesValues(EventImagesDTO eventImages);
    public void updateEventImgIdToEvent(EventDTO event);
    public int getEventRecruitTypeId(int eventId);
    public void postEventStoryRequest(EventStoryDTO eventStory);
    public EventDTO getEventFromEventId(int eventId);
    public EventImagesDTO getEventImagesByImgId(int eventImgId);
    public EventStoryDTO getEventStoryContent(int eventReportId);
    public void updateEventStoryContent(EventStoryDTO eventStory);

    // Oracle
//    public List<EventDTO> getRequestPageEventContent(@Param("startPostNo") int startPostNo, @Param("endPostNo") int endPostNo);
//    public List<EventDTO> getRequestPageRecruitingEventDataOnly(@Param("startPostNo") int startPostNo, @Param("endPostNo") int endPostNo);

    // MySQL
    public List<EventDTO> getRequestPageEventContent(@Param("startPostNo") int startPostNo, @Param("perPagePostCount") int perPagePostCount);
    public List<EventDTO> getRequestPageRecruitingEventDataOnly(@Param("startPostNo") int startPostNo, @Param("perPagePostCount") int perPagePostCount);
}