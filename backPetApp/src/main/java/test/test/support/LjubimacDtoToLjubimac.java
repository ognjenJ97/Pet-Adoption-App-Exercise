package test.test.support;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import test.test.model.Ljubimac;
import test.test.service.KategorijaService;
import test.test.service.LjubimacService;
import test.test.web.dto.LjubimacDTO;

@Component
public class LjubimacDtoToLjubimac implements Converter<LjubimacDTO, Ljubimac> {

	@Autowired
	private LjubimacService ljubimacService;
	
	@Autowired
	private KategorijaService kategorijaService;
	
	@Override
	public Ljubimac convert(LjubimacDTO dto) {
		Ljubimac l;
		
		if(dto.getId() == null){
			l = new Ljubimac();
        }else{
            l = ljubimacService.findOne(dto.getId());
        }
		
		if (l != null) {
			l.setId(dto.getId());
			l.setIme(dto.getIme());
			l.setStarost(dto.getStarost());
			l.setVakcinisan(dto.isVakcinisan());		
			l.setPol(dto.getPol());		
			l.setTezina(dto.getTezina());	
			l.setOpis(dto.getOpis());
			l.setKategorija(kategorijaService.findOne(dto.getKategorijaId()));
			l.setUdomljen(dto.isUdomljen());
		}
		
		return l;
	}
	

}