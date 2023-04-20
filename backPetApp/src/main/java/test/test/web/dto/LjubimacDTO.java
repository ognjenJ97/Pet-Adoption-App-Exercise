package test.test.web.dto;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;

public class LjubimacDTO {

	 private Long id;
	 
	 @NotBlank
	 private String ime;
	 
	 private int starost;
	 
	 private boolean vakcinisan;
	 
	 private boolean udomljen;
	 
	 private String pol;
	 
	 @Positive
	 @NotNull
	 private double tezina;
	 
	 private String opis;
	 
	 private Long kategorijaId;
	 
	 private String kategorijaNaziv;

	public LjubimacDTO() {
		super();
	} 

	public Long getId() {
		return id;
	}

	
	public boolean isUdomljen() {
		return udomljen;
	}

	public void setUdomljen(boolean udomljen) {
		this.udomljen = udomljen;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getIme() {
		return ime;
	}

	public void setIme(String ime) {
		this.ime = ime;
	}

	public int getStarost() {
		return starost;
	}

	public void setStarost(int starost) {
		this.starost = starost;
	}

	public boolean isVakcinisan() {
		return vakcinisan;
	}

	public void setVakcinisan(boolean vakcinisan) {
		this.vakcinisan = vakcinisan;
	}

	public String getPol() {
		return pol;
	}

	public void setPol(String pol) {
		this.pol = pol;
	}

	public double getTezina() {
		return tezina;
	}

	public void setTezina(double tezina) {
		this.tezina = tezina;
	}

	public String getOpis() {
		return opis;
	}

	public void setOpis(String opis) {
		this.opis = opis;
	}

	public Long getKategorijaId() {
		return kategorijaId;
	}

	public void setKategorijaId(Long kategorijaId) {
		this.kategorijaId = kategorijaId;
	}

	public String getKategorijaNaziv() {
		return kategorijaNaziv;
	}

	public void setKategorijaNaziv(String kategorijaNaziv) {
		this.kategorijaNaziv = kategorijaNaziv;
	}
	 
	 
}
