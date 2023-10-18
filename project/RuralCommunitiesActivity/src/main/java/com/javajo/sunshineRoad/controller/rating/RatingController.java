package com.javajo.sunshineRoad.controller.rating;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.javajo.sunshineRoad.model.dto.rating.RatingDTO;
import com.javajo.sunshineRoad.model.service.impl.rating.RatingDataServiceImpl;
import lombok.RequiredArgsConstructor;
import java.net.URISyntaxException;
import java.util.List;

@RestController
@RequestMapping("/rating")
@RequiredArgsConstructor
public class RatingController {

   private final RatingDataServiceImpl ratingDataService;

   @GetMapping("/getData/{pageNo}")
   public List<RatingDTO> getRatingData(@PathVariable int pageNo) throws URISyntaxException {
       return ratingDataService.getRatingData(pageNo);
   }
}