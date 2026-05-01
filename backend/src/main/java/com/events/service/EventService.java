package com.events.service;

import com.events.dtos.EventDetailDTO;
import com.events.dtos.EventResponseDTO;
import com.events.exception.EventNotFoundException;
import com.events.model.Event;
import com.events.repository.EventRepository;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import java.time.LocalDateTime;
import java.util.UUID;

@Service
public class EventService {

    @Autowired
    private EventRepository eventRepository;
    public Page<EventResponseDTO> getEvents(String search, String category,
                                            LocalDateTime dateFrom, LocalDateTime dateTo,
                                            int page, int limit) {

        Pageable pageable = PageRequest.of(page, limit);

        Page<Event> eventPage = eventRepository.findEvents(
                search, category, dateFrom, dateTo, pageable
        );

        return eventPage.map(EventResponseDTO::fromEvent);
    }

    public EventDetailDTO getEventById(UUID id) {
        Event event = eventRepository.findById(id)
                        .orElseThrow(() -> new EventNotFoundException("Event not found with id: " + id));
        return EventDetailDTO.fromEvent(event);
    }
}