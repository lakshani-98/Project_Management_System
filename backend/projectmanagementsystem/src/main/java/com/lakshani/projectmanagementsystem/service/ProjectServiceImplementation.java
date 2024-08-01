package com.lakshani.projectmanagementsystem.service;

import com.lakshani.projectmanagementsystem.model.Chat;
import com.lakshani.projectmanagementsystem.model.Project;
import com.lakshani.projectmanagementsystem.model.User;
import com.lakshani.projectmanagementsystem.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class ProjectServiceImplementation implements ProjectService {

    @Autowired
    private ProjectRepository projectRepository;

    @Override
    public Project createProject(Project project, User user) throws Exception {
        return null;
    }

    @Override
    public List<Project> getProjectByTeam(User user, String category, String tag) throws Exception {
        return null;
    }

    @Override
    public Project getProjectbyId(Long projectId) throws Exception {
        return null;
    }

    @Override
    public void deleteProject(Long projectId, Long userId) throws Exception {

    }

    @Override
    public Project updateProject(Project updatedProject, Long id) throws Exception {
        return null;
    }

    @Override
    public void addUserToProject(Long projectId, Long userId) throws Exception {

    }

    @Override
    public void removeUserFromProject(Long projectId, Long userId) throws Exception {

    }

    @Override
    public Chat getChatByProjectId(Long projectId) throws Exception {
        return null;
    }
}
