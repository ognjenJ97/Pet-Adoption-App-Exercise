package test.test.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import test.test.model.Ljubimac;

@Repository
public interface LjubimacRepository extends JpaRepository<Ljubimac,Long> {

	Ljubimac findOneById(Long id);

	@Query("SELECT f FROM Ljubimac f WHERE " +
	        "(:pol IS NULL OR f.pol LIKE %:pol%) AND " +
	        "(:opis IS NULL OR f.opis LIKE %:opis%) AND " +
	        "(:kategorijaId IS NULL OR f.kategorija.id = :kategorijaId)")
	Page<Ljubimac> search(@Param("kategorijaId") Long kategorijaId, @Param("pol") String pol, @Param("opis") String opis, Pageable pageable);

}
