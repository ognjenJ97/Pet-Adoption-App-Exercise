package test.test.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import test.test.model.Kategorija;

@Repository
public interface KategorijaRepository extends JpaRepository<Kategorija,Long> {

	Kategorija findOneById(Long id);

}
