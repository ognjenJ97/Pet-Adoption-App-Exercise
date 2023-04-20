package test.test.model;

import java.time.LocalDateTime;
import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.validation.constraints.NotNull;

@Entity
public class Udomljavanje {

	 @Id
	 @GeneratedValue(strategy = GenerationType.IDENTITY)
	 private Long id;
	 
	 @NotNull
	 private LocalDateTime datumUdomljavanja;
	 
	 @OneToOne
	 private Ljubimac ljubimac;

	public Udomljavanje() {
		super();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public LocalDateTime getDatumUdomljavanja() {
		return datumUdomljavanja;
	}

	public void setDatumUdomljavanja(LocalDateTime datumUdomljavanja) {
		this.datumUdomljavanja = datumUdomljavanja;
	}

	public Ljubimac getLjubimac() {
		return ljubimac;
	}

	public void setLjubimac(Ljubimac ljubimac) {
		this.ljubimac = ljubimac;
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
		Udomljavanje other = (Udomljavanje) obj;
		return Objects.equals(id, other.id);
	}

	@Override
	public String toString() {
		return "Udomljavanje [id=" + id + ", datumUdomljavanja=" + datumUdomljavanja + ", ljubimac=" + ljubimac.getIme() + "]";
	}
	 
	 
}
