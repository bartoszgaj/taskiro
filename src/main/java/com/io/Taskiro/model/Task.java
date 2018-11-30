package com.io.Taskiro.model;

import com.google.maps.model.LatLng;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import java.time.LocalDateTime;
import java.util.Date;

@Data
@NoArgsConstructor
@RequiredArgsConstructor
@Entity
@Table(name = "task_group")
public class Task {

    @Id
    @GeneratedValue
    private Long id;
    @NonNull
    private String title;
    @NonNull
    private String description;
    @NonNull
    private TaskType type;
    @NonNull
    private LatLng coords;
    @NonNull
    private Integer price;
    @NonNull
    private LocalDateTime deadline;
    @NonNull
    private LocalDateTime addTime;
}
