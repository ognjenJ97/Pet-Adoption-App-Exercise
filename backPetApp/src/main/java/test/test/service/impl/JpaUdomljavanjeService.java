package test.test.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import test.test.model.Udomljavanje;
import test.test.repository.UdomljavanjeRepository;
import test.test.service.UdomljavanjeService;

@Service
public class JpaUdomljavanjeService implements UdomljavanjeService{

	@Autowired
    private UdomljavanjeRepository mr;
	
	@Override
	public Udomljavanje findOne(Long id) {
		return mr.findOneById(id);
	}

	@Override
	public List<Udomljavanje> findAll() {
		return mr.findAll();
	}

	@Override
	public Udomljavanje update(Udomljavanje udomljavanje) {
		return mr.save(udomljavanje);
	}

	@Override
	public Udomljavanje save(Udomljavanje udomljavanje) {
		return mr.save(udomljavanje);
	}

}
