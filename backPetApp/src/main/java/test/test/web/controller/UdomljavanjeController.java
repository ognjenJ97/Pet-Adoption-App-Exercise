package test.test.web.controller;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import test.test.model.Ljubimac;
import test.test.model.Udomljavanje;
import test.test.service.LjubimacService;
import test.test.service.UdomljavanjeService;
import test.test.support.UdomljavanjeDtoToUdomljavanje;
import test.test.support.UdomljavanjeToUdomljavanjeDto;
import test.test.web.dto.UdomljavanjeDTO;

@RestController
@RequestMapping(value = "/api/udomljavanja", produces = MediaType.APPLICATION_JSON_VALUE)
public class UdomljavanjeController {

	@Autowired
    private UdomljavanjeService udomljavanjeService;
	
	@Autowired
    private LjubimacService ljubimacService;
 
    @Autowired
    private UdomljavanjeDtoToUdomljavanje toUdomljavanje;
 
    @Autowired
    private UdomljavanjeToUdomljavanjeDto toUdomljavanjeDto;
    
    
  //@PreAuthorize("hasRole('ADMIN')")
    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<UdomljavanjeDTO> create(@Valid @RequestBody UdomljavanjeDTO udomljavanjeDTO){
      Ljubimac ljubimac = ljubimacService.findOne(udomljavanjeDTO.getLjubimacId());
      
      Udomljavanje udomljavanje = toUdomljavanje.convert(udomljavanjeDTO);
      Udomljavanje sacuvaj = udomljavanjeService.save(udomljavanje);
      ljubimac.setUdomljen(true);
      ljubimac.setUdomljavanje(udomljavanje);
      ljubimacService.update(ljubimac);

      return new ResponseEntity<>(toUdomljavanjeDto.convert(sacuvaj), HttpStatus.CREATED);
    }
    
    @GetMapping
    public ResponseEntity<List<UdomljavanjeDTO>> getAll(){

        List<Udomljavanje> prevoznik = udomljavanjeService.findAll();

        return new ResponseEntity<>(toUdomljavanjeDto.convert(prevoznik), HttpStatus.OK);
    }
    
    
    
    
}
