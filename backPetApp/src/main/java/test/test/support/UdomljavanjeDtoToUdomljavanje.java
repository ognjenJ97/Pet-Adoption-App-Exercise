package test.test.support;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import test.test.model.Udomljavanje;
import test.test.service.LjubimacService;
import test.test.service.UdomljavanjeService;
import test.test.web.dto.UdomljavanjeDTO;

@Component
public class UdomljavanjeDtoToUdomljavanje implements Converter<UdomljavanjeDTO, Udomljavanje> {

	@Autowired
	private LjubimacService ljubimacService;
	
	@Autowired
	private UdomljavanjeService udomljavanjeService;
	
	@Override 
	public Udomljavanje convert(UdomljavanjeDTO dto) {
		Udomljavanje u;
		
		if(dto.getId() == null){
			u = new Udomljavanje();
        }else{
            u = udomljavanjeService.findOne(dto.getId());
        }
		
		if (u != null) {
			u.setId(dto.getId());
			u.setDatumUdomljavanja(getLocalDateTime(dto.getDatumUdomljavanja()));		
			u.setLjubimac(ljubimacService.findOne(dto.getLjubimacId()));				
		}
		
		return u;
	}
	
	private LocalDateTime getLocalDateTime(String dateTime) throws DateTimeParseException {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm");
        return LocalDateTime.parse(dateTime, formatter);
    }

}