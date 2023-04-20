package test.test.support;

import java.util.ArrayList;
import java.util.List;

import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import test.test.model.Ljubimac;
import test.test.web.dto.LjubimacDTO;

@Component
public class LjubimacToLjubimacDto implements Converter<Ljubimac, LjubimacDTO> {

	@Override
	public LjubimacDTO convert(Ljubimac l) {
		LjubimacDTO dto = new LjubimacDTO();
		   
		   dto.setId(l.getId());
		   dto.setIme(l.getIme());
		   dto.setStarost(l.getStarost());
		   dto.setVakcinisan(l.isVakcinisan());
		   dto.setPol(l.getPol());
		   dto.setTezina(l.getTezina());
		   dto.setOpis(l.getOpis());
		   dto.setKategorijaId(l.getKategorija().getId());
		   dto.setKategorijaNaziv(l.getKategorija().getNaziv());
		   dto.setUdomljen(l.isUdomljen());

	        return dto;
	    }

	    public List<LjubimacDTO> convert(List<Ljubimac> ljubimci){
	        List<LjubimacDTO> dto = new ArrayList<>();

	        for(Ljubimac ljubimac : ljubimci) {
	            dto.add(convert(ljubimac));
	        }

	        return dto;
	    }
	}