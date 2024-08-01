package com.lakshani.projectmanagementsystem.service;

import com.lakshani.projectmanagementsystem.model.Chat;
import com.lakshani.projectmanagementsystem.repository.ChatRepository;
import org.springframework.stereotype.Service;

@Service
public class ChatServiceImplementation implements ChatService {

    private ChatRepository chatRepository;
    @Override
    public Chat createChat(Chat chat) {
        return chatRepository.save(chat);
    }
}

