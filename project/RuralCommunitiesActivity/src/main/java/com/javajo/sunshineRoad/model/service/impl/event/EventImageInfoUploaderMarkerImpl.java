package com.javajo.sunshineRoad.model.service.impl.event;

import com.javajo.sunshineRoad.model.dao.event.EventDAO;
import com.javajo.sunshineRoad.model.dto.event.EventDTO;
import com.javajo.sunshineRoad.model.dto.event.EventImagesDTO;
import com.javajo.sunshineRoad.model.service.IService.common.utils.ImageInfoUploadMarker;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Qualifier("EventImageInfoUploader")
@RequiredArgsConstructor
public class EventImageInfoUploaderMarkerImpl implements ImageInfoUploadMarker {
    private final EventDAO eventDAO;

    @Override
    public int getPostCurrentIdNo() {
        return eventDAO.getEventPostCurrentId();
    }

    @Override
    public int getImgCurrentIdNo() {
        return eventDAO.getEventImgCurrentId();
    }

    @Override
    public void requestInsertToDB(int imgId, List<String> pathList) {
        EventImagesDTO eventImages = EventImagesDTO.builder()
                .eventImgId(imgId)
                .eventImg1(pathList.get(0))
                .eventImg2(pathList.get(1))
                .eventImg3(pathList.get(2))
                .eventImg4(pathList.get(3))
                .eventImg5(pathList.get(4))
                .build();
        eventDAO.postEventImagesValues(eventImages);
    }

    @Override
    public void requestUpdateFK(int imgId, int postId) {
        EventDTO event = EventDTO.builder()
                .eventImgId(imgId + 1)
                .eventId(postId)
                .build();

        eventDAO.updateEventImgIdToEvent(event);
    }
}