package test.test.service;

import java.util.List;

import test.test.model.Udomljavanje;

public interface UdomljavanjeService {

	Udomljavanje findOne(Long id);
	
	List<Udomljavanje> findAll();
	
	Udomljavanje update(Udomljavanje udomljavanje);
	
	Udomljavanje save(Udomljavanje udomljavanje);
}
