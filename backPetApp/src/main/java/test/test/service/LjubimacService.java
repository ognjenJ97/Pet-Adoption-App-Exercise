package test.test.service;

import org.springframework.data.domain.Page;

import test.test.model.Ljubimac;

public interface LjubimacService {

	Ljubimac findOne(Long id);

    Page<Ljubimac> findAll(int pageNo);

    Ljubimac save(Ljubimac ljubimac);

    Ljubimac update(Ljubimac ljubimac);

    Ljubimac delete(Long id);
    
    Page<Ljubimac> find(Long kategorijaId, String pol, String opis, int pageNo);

	Ljubimac promeni(Long id);
    
    
}
