package com.events.controller;

import com.events.dtos.EventDetailDTO;
import com.events.dtos.EventResponseDTO;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.webmvc.test.autoconfigure.WebMvcTest;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.MediaType;
import org.springframework.test.context.bean.override.mockito.MockitoBean;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Collections;
import java.util.UUID;

import static org.mockito.ArgumentMatchers.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(EventController.class)
class EventControllerTest {
    @Autowired
    private MockMvc mockMvc;

    @MockitoBean
    private com.events.service.EventService eventService;

    @Test
    @DisplayName("GET /api/events returns paginated events")
    void getEvents_returnsPaginatedEvents() throws Exception {
        EventResponseDTO event = new EventResponseDTO();
        Pageable pageable = PageRequest.of(0, 9);
        Mockito.when(eventService.getEvents(any(), any(), any(), any(), anyInt(), anyInt()))
                .thenReturn(new PageImpl<>(Collections.singletonList(event), pageable, 1));

        mockMvc.perform(get("/api/events"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON));
    }

    @Test
    @DisplayName("GET /api/events/{id} returns event details")
    void getEventById_returnsEventDetails() throws Exception {
        UUID id = UUID.randomUUID();
        EventDetailDTO detail = new EventDetailDTO();
        Mockito.when(eventService.getEventById(id)).thenReturn(detail);

        mockMvc.perform(get("/api/events/{id}", id))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON));
    }
}
