package test.test.web.controller;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import test.test.model.Ljubimac;
import test.test.service.LjubimacService;
import test.test.support.LjubimacDtoToLjubimac;
import test.test.support.LjubimacToLjubimacDto;
import test.test.web.dto.LjubimacDTO;

@RestController
@RequestMapping(value = "/api/ljubimci", produces = MediaType.APPLICATION_JSON_VALUE)
public class LjubimacController {
	
	@Autowired
    private LjubimacService ljubimacService;

    @Autowired
    private LjubimacDtoToLjubimac toLjubimac;

    @Autowired
    private LjubimacToLjubimacDto toLjubimacDto;

    
//  @PreAuthorize("hasAnyRole('KORISNIK', 'ADMIN')")
  @GetMapping("/{id}")
  public ResponseEntity<LjubimacDTO> getOne(@PathVariable Long id){
      Ljubimac ljubimac = ljubimacService.findOne(id);

      if(ljubimac != null) {
          return new ResponseEntity<>(toLjubimacDto.convert(ljubimac), HttpStatus.OK);
      }else {
          return new ResponseEntity<>(HttpStatus.NOT_FOUND);
      }
  } 
  
  @GetMapping
  public ResponseEntity<List<LjubimacDTO>> getAll(
  		@RequestParam(required=false) Long kategorijaId,
  		@RequestParam(required=false) String pol,
  		@RequestParam(required=false) String opis,
          @RequestParam(value = "pageNo", defaultValue = "0") int pageNo){

      Page<Ljubimac> page;

      try{
  		 page = ljubimacService.find(kategorijaId, pol, opis, pageNo);
      }catch (Exception e){
     	 page = ljubimacService.findAll(pageNo);
      }
  	    HttpHeaders headers = new HttpHeaders();
      headers.add("Total-Pages", Integer.toString(page.getTotalPages()));

     return new ResponseEntity<>(toLjubimacDto.convert(page.getContent()), headers, HttpStatus.OK);
  }	
  
//@PreAuthorize("hasAnyRole('KORISNIK', 'ADMIN')")
@DeleteMapping("/{id}")
public ResponseEntity<Void> delete(@PathVariable Long id){
  Ljubimac ljubimac = ljubimacService.delete(id);

  if(ljubimac != null) {
      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
  } else {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
  }
}
  
  
//@PreAuthorize("hasAnyRole('KORISNIK', 'ADMIN')")
@PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
public ResponseEntity<LjubimacDTO> create(@Valid @RequestBody LjubimacDTO ljubimacDto){
	Ljubimac linija = toLjubimac.convert(ljubimacDto);
	Ljubimac sacuvaj = ljubimacService.save(linija);

return new ResponseEntity<>(toLjubimacDto.convert(sacuvaj), HttpStatus.CREATED);
}
	
//@PreAuthorize("hasAnyRole('KORISNIK', 'ADMIN')")
@PutMapping(value= "/{id}",consumes = MediaType.APPLICATION_JSON_VALUE)
public ResponseEntity<LjubimacDTO> update(@PathVariable Long id, @Valid @RequestBody LjubimacDTO ljubimacDto){

if(!id.equals(ljubimacDto.getId())) {
    return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
}

Ljubimac linija = toLjubimac.convert(ljubimacDto);
Ljubimac sacuvaj = ljubimacService.update(linija);

return new ResponseEntity<>(toLjubimacDto.convert(sacuvaj),HttpStatus.OK);
}	
	
@PostMapping("/{id}/promena")
public ResponseEntity<LjubimacDTO> promenaStanja(@PathVariable Long id) {
	  
	  
	Ljubimac zadatak = ljubimacService.promeni(id);

    if (zadatak != null) {
        return new ResponseEntity<>(toLjubimacDto.convert(zadatak), HttpStatus.OK);
    } else {
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}

  
    
    
}
