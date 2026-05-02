package com.events.repository;

import com.events.model.Event;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDateTime;
import java.util.UUID;

public interface EventRepository extends JpaRepository<Event, UUID> {
    @Query("""
    SELECT e FROM Event e
    WHERE (:search IS NULL OR LOWER(e.name) LIKE LOWER(CONCAT('%', :search, '%'))
        OR LOWER(e.venue) LIKE LOWER(CONCAT('%', :search, '%')))
    AND (:category IS NULL OR e.category = :category)
    AND (:dateFrom IS NULL OR e.date >= :dateFrom)
    AND (:dateTo IS NULL OR e.date <= :dateTo)
""")
    Page<Event> findEvents(String search, String category,
                           LocalDateTime dateFrom, LocalDateTime dateTo,
                           Pageable pageable);
}
