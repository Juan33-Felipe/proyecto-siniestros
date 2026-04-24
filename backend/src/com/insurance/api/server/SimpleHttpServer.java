package com.insurance.api.server;

import com.insurance.api.domain.Claim;
import com.sun.net.httpserver.HttpServer;
import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpExchange;

import java.io.IOException;
import java.io.OutputStream;
import java.net.InetSocketAddress;

public class SimpleHttpServer {
    private Claim claim = new Claim("CLM-917916");

    public void start() throws IOException {
        int port = Integer.parseInt(System.getenv().getOrDefault("PORT", "8080"));
        HttpServer server = HttpServer.create(new InetSocketAddress(port), 0);
        
        server.createContext("/api/claim", new HttpHandler() {
            @Override
            public void handle(HttpExchange exchange) throws IOException {
                // Configuración de CORS para Vercel
                exchange.getResponseHeaders().add("Access-Control-Allow-Origin", "*");
                exchange.getResponseHeaders().add("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
                exchange.getResponseHeaders().add("Access-Control-Allow-Headers", "Content-Type");

                if ("OPTIONS".equalsIgnoreCase(exchange.getRequestMethod())) {
                    exchange.sendResponseHeaders(204, -1);
                    return;
                }

                String method = exchange.getRequestMethod();
                String query = exchange.getRequestURI().getQuery();

                if ("POST".equalsIgnoreCase(method) && query != null) {
                    if (query.contains("action=add")) claim.addDoc();
                    else if (query.contains("action=submit")) claim.submit();
                    else if (query.contains("action=approve")) claim.approve();
                    else if (query.contains("action=pay")) claim.pay();
                }

                String response = "{\"status\": \"" + claim.getStatus() + "\"}";
                exchange.getResponseHeaders().set("Content-Type", "application/json");
                exchange.sendResponseHeaders(200, response.length());
                OutputStream os = exchange.getResponseBody();
                os.write(response.getBytes());
                os.close();
            }
        });

        server.setExecutor(null);
        System.out.println("Server running on port: " + port);
        server.start();
    }
}