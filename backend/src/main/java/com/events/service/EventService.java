package com.events.service;

import com.events.dtos.EventDetailDTO;
import com.events.dtos.EventResponseDTO;
import com.events.exception.EventNotFoundException;
import com.events.model.Event;
import com.events.repository.EventRepository;
import org.springframework.stereotype.Service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class EventService {

    @Autowired
    private EventRepository eventRepository;

    public Page<EventResponseDTO> getEvents(String search, String category,
                                            LocalDateTime dateFrom, LocalDateTime dateTo,
                                            int page, int limit) {
        List<Event> events = eventRepository.findEvents(search, category, dateFrom, dateTo);

        int start = page * limit;
        int end = Math.min(start + limit, events.size());

        List<EventResponseDTO> eventDTOs = events.subList(start, end)
                .stream()
                .map(EventResponseDTO::fromEvent)
                .collect(Collectors.toList());

        return new PageImpl<>(eventDTOs, PageRequest.of(page, limit), events.size());
    }

    public EventDetailDTO getEventById(UUID id) {
        Event event = eventRepository.findById(id)
                        .orElseThrow(() -> new EventNotFoundException("Event not found with id: " + id));
        return EventDetailDTO.fromEvent(event);
    }
}