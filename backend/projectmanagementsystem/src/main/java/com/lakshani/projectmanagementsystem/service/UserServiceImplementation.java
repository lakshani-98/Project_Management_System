package com.lakshani.projectmanagementsystem.service;

import com.lakshani.projectmanagementsystem.model.User;

public class UserServiceImplementation implements UserService{
    @Override
    public User findUserProfileByJwt(String jwt) throws Exception {
        return null;
    }

    @Override
    public User findUserByEmail(String email) throws Exception {
        return null;
    }

    @Override
    public User findUserById(Long userId) throws Exception {
        return null;
    }

    @Override
    public User updateUsersProjectSize(User user, int number) {
        return null;
    }
}
