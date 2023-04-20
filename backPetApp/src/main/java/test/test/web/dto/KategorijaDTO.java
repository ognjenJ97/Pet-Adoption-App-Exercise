package test.test.web.dto;

import javax.persistence.Column;

public class KategorijaDTO {

	 private Long id;
		
	 private String naziv;

	public KategorijaDTO() {
		super();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNaziv() {
		return naziv;
	}

	public void setNaziv(String naziv) {
		this.naziv = naziv;
	}
	 
	 
}
