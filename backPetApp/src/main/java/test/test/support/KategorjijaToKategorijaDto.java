package test.test.support;

import java.util.ArrayList;
import java.util.List;

import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import test.test.model.Kategorija;
import test.test.web.dto.KategorijaDTO;

@Component
public class KategorjijaToKategorijaDto implements Converter<Kategorija, KategorijaDTO>  {

	@Override
	public KategorijaDTO convert(Kategorija k) {
		KategorijaDTO dto = new KategorijaDTO();
		   
		   dto.setId(k.getId());
		   dto.setNaziv(k.getNaziv());

	        return dto;
	    }

	    public List<KategorijaDTO> convert(List<Kategorija> kategorije){
	        List<KategorijaDTO> dto = new ArrayList<>();

	        for(Kategorija kategorija : kategorije) {
	            dto.add(convert(kategorija));
	        }

	        return dto;
	    }
	}