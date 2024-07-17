package com.lakshani.projectmanagementsystem.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.lakshani.projectmanagementsystem.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String email);
}
