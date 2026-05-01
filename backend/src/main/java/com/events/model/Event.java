package com.events.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.UUID;

@Data
@Entity
@Builder
@AllArgsConstructor
@Table(name = "events")
public class Event {
    @Id
    private UUID id;

    @Column(nullable = false)
    private String name;

    @Column
    private String description;

    @Column(nullable = false)
    private String category;

    @Column(nullable = false)
    private LocalDateTime date;

    @Column(nullable = false)
    private String venue;

    private String address;

    private String coverImage;

    private Double price;

    private String currency;

    private Integer totalSpots;

    private Integer spotsRemaining;

    @Embedded
    @AttributeOverrides({
            @AttributeOverride(name = "name", column = @Column(name = "organizer_name")),
            @AttributeOverride(name = "email", column = @Column(name = "organizer_email"))
    })
    private  Organizer organizer;

    public Event() {
        this.id = UUID.randomUUID();
    }


}
