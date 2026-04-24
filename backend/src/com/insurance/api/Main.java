package com.insurance.api;

import com.insurance.api.server.SimpleHttpServer;

public class Main {
    public static void main(String[] args) {
        try {
            SimpleHttpServer server = new SimpleHttpServer();
            server.start();
        } catch (Exception e) {
            System.err.println("Error starting server: " + e.getMessage());
            e.printStackTrace();
        }
    }
}