package com.events.dtos;


import com.events.model.Event;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import java.time.format.DateTimeFormatter;
import java.util.UUID;

@SuperBuilder
@Data
@NoArgsConstructor
public class EventResponseDTO {
    private UUID id;
    private String name;
    private String date;
    private String venue;
    private String category;
    private String coverImage;
    private String priceDisplay;
    private Double price;

    public static EventResponseDTO fromEvent(Event event) {
        return EventResponseDTO.builder()
                .id(event.getId())
                .name(event.getName())
                .date(event.getDate().format(DateTimeFormatter.ISO_LOCAL_DATE_TIME))
                .venue(event.getVenue())
                .category(event.getCategory())
                .coverImage(event.getCoverImage())
                .priceDisplay((event.getPrice() == null || event.getPrice() == 0) ? "Free" : event.getPrice().toString())
                .price(event.getPrice())
                .build();
    }


}
