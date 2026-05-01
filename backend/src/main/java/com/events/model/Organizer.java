package com.events.model;

import jakarta.persistence.Embeddable;
import lombok.*;

@Embeddable
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Organizer {
    private String name;
    private String email;
}
