package com.events.dtos;


import com.events.model.Event;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import java.time.format.DateTimeFormatter;

@Data
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
@SuperBuilder
public class EventDetailDTO extends EventResponseDTO {
    private String description;
    private String address;
    private String organizerName;
    private String organizerEmail;
    private Integer totalSpots;
    private Integer spotsRemaining;
    private Double price;
    private String currency;

    public static EventDetailDTO fromEvent(Event event) {
       return  EventDetailDTO.builder()
                .id(event.getId())
                .name(event.getName())
                .date(event.getDate().format(DateTimeFormatter.ISO_LOCAL_DATE_TIME))
                .venue(event.getVenue())
                .category(event.getCategory())
                .coverImage(event.getCoverImage())
                .priceDisplay((event.getPrice() == null || event.getPrice() == 0) ? "Free" : event.getPrice().toString())
                .description(event.getDescription())
                .address(event.getAddress())
                .organizerName(event.getOrganizer() != null ? event.getOrganizer().getName() : null)
                .organizerEmail(event.getOrganizer() != null ? event.getOrganizer().getEmail() : null)
                .totalSpots(event.getTotalSpots())
                .spotsRemaining(event.getSpotsRemaining())
                .price(event.getPrice())
                .currency(event.getCurrency())
                .build();
    }
}
