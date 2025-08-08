package com.yash.backend.Model;

import jakarta.persistence.*;

@Entity
@Table(name = "tasks")
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String email;

    private String title;

    private String description;

    private String status;

    private String issuedAtTime;

    private String issuedAtDate;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getIssuedAtTime() {
        return issuedAtTime;
    }

    public void setIssuedAtTime(String issuedAtTime) {
        this.issuedAtTime = issuedAtTime;
    }

    public String getIssuedAtDate() {
        return issuedAtDate;
    }

    public void setIssuedAtDate(String issuedAtDate) {
        this.issuedAtDate = issuedAtDate;
    }
// Getters and Setters
}
