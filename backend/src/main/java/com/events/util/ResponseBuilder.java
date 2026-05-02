package com.events.util;

import com.events.dtos.ApiResponse;
import org.springframework.http.ResponseEntity;

public class ResponseBuilder {

    public static <T> ResponseEntity<ApiResponse<T>> success(T data) {
        ApiResponse<T> response = ApiResponse.success(data);
        return ResponseEntity.ok(response);
    }
}
