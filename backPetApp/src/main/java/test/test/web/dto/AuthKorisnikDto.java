package test.test.web.dto;

import javax.validation.constraints.NotBlank;

public class AuthKorisnikDto {

    @NotBlank
    private String username;

    @NotBlank
    private String password;

    public AuthKorisnikDto() {}

    public String getUsername() { return username; }

    public void setUsername(String username) { this.username = username; }

    public String getPassword() { return password; }

    public void setPassword(String password) { this.password = password; }
}
