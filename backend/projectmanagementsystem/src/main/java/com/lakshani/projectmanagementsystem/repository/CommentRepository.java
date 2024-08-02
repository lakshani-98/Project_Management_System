package com.lakshani.projectmanagementsystem.repository;

import com.lakshani.projectmanagementsystem.model.Comments;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;


public interface CommentRepository extends JpaRepository<Comments, Long> {
    List<Comments> findCommentByIssueId(Long issueId);
}
