package com.io.Taskiro;



import com.io.Taskiro.model.User;
import com.io.Taskiro.model.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.stream.Stream;

@Component
class Initializer implements CommandLineRunner {

    private final UserRepository repository;

    public Initializer(UserRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... strings) {
        Stream.of("Denver JUG", "Utah JUG", "Seattle JUG",
                "Richmond JUG").forEach(name ->
                repository.save(new User(name))
        );

//        User djug = repository.findByName("Denver JUG");
//        Event e = Event.builder().title("Full Stack Reactive")
//                .description("Reactive with Spring Boot + React")
//                .date(Instant.parse("2018-12-12T18:00:00.000Z"))
//                .build();
//        djug.setEvents(Collections.singleton(e));
//        repository.save(djug);

        repository.findAll().forEach(System.out::println);
    }
}