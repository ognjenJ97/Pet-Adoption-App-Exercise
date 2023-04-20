package test.test.model;

import java.util.Objects;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.validation.constraints.NotNull;

@Entity
public class Ljubimac {

	 @Id
	 @GeneratedValue(strategy = GenerationType.IDENTITY)
	 private Long id;
	 
	 private String ime;
	 
	 private int starost;
	 
	 @NotNull
	 private boolean vakcinisan;
	 
	 private boolean udomljen;
	 
	 private String pol;
	 
	 private double tezina;
	 
	 private String opis;
	 
	 @ManyToOne
	 private Kategorija kategorija;
	 
	 @OneToOne(cascade = CascadeType.ALL)
	 private Udomljavanje udomljavanje;

	public Ljubimac() {
		super();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
	
	
	

	public boolean isUdomljen() {
		return udomljen;
	}

	public void setUdomljen(boolean udomljen) {
		this.udomljen = udomljen;
	}

	public Udomljavanje getUdomljavanje() {
		return udomljavanje;
	}

	public void setUdomljavanje(Udomljavanje udomljavanje) {
		this.udomljavanje = udomljavanje;
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

	public Kategorija getKategorija() {
		return kategorija;
	}

	public void setKategorija(Kategorija kategorija) {
		this.kategorija = kategorija;
	}

	@Override
	public int hashCode() {
		return Objects.hash(id);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Ljubimac other = (Ljubimac) obj;
		return Objects.equals(id, other.id);
	}

	@Override
	public String toString() {
		return "Ljubimac [id=" + id + ", ime=" + ime + ", starost=" + starost + ", vakcinisan=" + vakcinisan + ", pol="
				+ pol + ", tezina=" + tezina + ", opis=" + opis + ", kategorija=" + kategorija.getNaziv() + "]";
	}
	 
	 
}
