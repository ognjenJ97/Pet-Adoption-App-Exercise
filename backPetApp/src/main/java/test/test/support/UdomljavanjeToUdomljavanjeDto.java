package test.test.support;

import java.util.ArrayList;
import java.util.List;

import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import test.test.model.Udomljavanje;
import test.test.web.dto.UdomljavanjeDTO;

@Component
public class UdomljavanjeToUdomljavanjeDto implements Converter<Udomljavanje, UdomljavanjeDTO> {

	@Override
	public UdomljavanjeDTO convert(Udomljavanje u) {
		UdomljavanjeDTO dto = new UdomljavanjeDTO();
		   
		   dto.setId(u.getId());
		   dto.setDatumUdomljavanja(u.getDatumUdomljavanja().toString().replace("T", " "));
		   dto.setLjubimacId(u.getLjubimac().getId());
		   dto.setLjubimacIme(u.getLjubimac().getIme());

	        return dto;
	    }

	    public List<UdomljavanjeDTO> convert(List<Udomljavanje> udomljavanja){
	        List<UdomljavanjeDTO> dto = new ArrayList<>();

	        for(Udomljavanje udomljavanje : udomljavanja) {
	            dto.add(convert(udomljavanje));
	        }

	        return dto;
	    }
	}