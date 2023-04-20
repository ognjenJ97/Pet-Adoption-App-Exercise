package test.test.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import test.test.model.Kategorija;
import test.test.model.Ljubimac;
import test.test.repository.LjubimacRepository;
import test.test.service.LjubimacService;

@Service
public class JpaLjubimacService implements LjubimacService {

	@Autowired
    private LjubimacRepository fr;
	
	@Override
	public Ljubimac findOne(Long id) {
		return fr.findOneById(id);
	}

	@Override
	public Page<Ljubimac> findAll(int pageNo) {
		return fr.findAll( PageRequest.of(pageNo, 4));
	}

	@Override
	public Ljubimac save(Ljubimac ljubimac) {
		ljubimac.setVakcinisan(false);
		ljubimac.setUdomljen(false);
		return fr.save(ljubimac);
	}

	@Override
	public Ljubimac update(Ljubimac ljubimac) {
		return fr.save(ljubimac);
	}

	@Override
	public Ljubimac delete(Long id) {
		Ljubimac ljubimac = findOne(id);
		if (ljubimac != null) {
			Kategorija kat = ljubimac.getKategorija();
			kat.obrisiLjubimca(ljubimac.getId());
			
			fr.delete(ljubimac);
			return ljubimac;
		}
		return null;
	}

	@Override
	public Page<Ljubimac> find(Long kategorijaId, String pol, String opis, int pageNo) {
		return fr.search(kategorijaId, pol, opis, PageRequest.of(pageNo, 4));
	}

	@Override
	public Ljubimac promeni(Long id) {
		Ljubimac ljubimac = findOne(id);
		
		ljubimac.setVakcinisan(true);
		fr.save(ljubimac);
		return ljubimac;
	}

}
