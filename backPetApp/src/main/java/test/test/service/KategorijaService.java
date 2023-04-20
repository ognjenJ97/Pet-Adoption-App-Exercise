package test.test.service;

import java.util.List;

import test.test.model.Kategorija;

public interface KategorijaService {

	Kategorija findOne(Long id);
	
	List<Kategorija> findAll();
	
}
