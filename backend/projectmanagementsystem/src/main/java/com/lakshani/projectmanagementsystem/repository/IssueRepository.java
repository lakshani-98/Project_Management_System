package com.lakshani.projectmanagementsystem.repository;

import com.lakshani.projectmanagementsystem.model.Issue;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IssueRepository extends JpaRepository<Issue, Long> {
    public List<Issue> findByProject_id(Long projectId);
}
