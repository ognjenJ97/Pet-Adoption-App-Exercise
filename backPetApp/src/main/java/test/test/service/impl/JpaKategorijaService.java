package test.test.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import test.test.model.Kategorija;
import test.test.repository.KategorijaRepository;
import test.test.service.KategorijaService;

@Service
public class JpaKategorijaService implements KategorijaService {

	@Autowired
    private KategorijaRepository fr;
	
	@Override
	public Kategorija findOne(Long id) {
		return fr.findOneById(id);
	}

	@Override
	public List<Kategorija> findAll() {
		return fr.findAll();
	}

}
