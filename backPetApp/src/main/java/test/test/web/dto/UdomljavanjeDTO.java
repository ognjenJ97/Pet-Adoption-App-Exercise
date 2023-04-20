package test.test.web.dto;

import javax.validation.constraints.Pattern;

public class UdomljavanjeDTO {

	 private Long id;
	 
	 @Pattern(regexp = "^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1]) (2[0-3]|[01][0-9]):[0-5][0-9]$", message = "Datum i vreme nisu validni.")
	 private String datumUdomljavanja;
	
	 private Long ljubimacId;
	 
	 private String ljubimacIme;

	public UdomljavanjeDTO() {
		super();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getDatumUdomljavanja() {
		return datumUdomljavanja;
	}

	public void setDatumUdomljavanja(String datumUdomljavanja) {
		this.datumUdomljavanja = datumUdomljavanja;
	}

	public Long getLjubimacId() {
		return ljubimacId;
	}

	public void setLjubimacId(Long ljubimacId) {
		this.ljubimacId = ljubimacId;
	}

	public String getLjubimacIme() {
		return ljubimacIme;
	}

	public void setLjubimacIme(String ljubimacIme) {
		this.ljubimacIme = ljubimacIme;
	}
	 
	 
}
