package test.test.web.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import test.test.model.Kategorija;
import test.test.service.KategorijaService;
import test.test.support.KategorjijaToKategorijaDto;
import test.test.web.dto.KategorijaDTO;

@RestController
@RequestMapping(value = "/api/kategorije", produces = MediaType.APPLICATION_JSON_VALUE)
public class KategorijaController {
	
	@Autowired
    private KategorijaService kategorijaService;

    @Autowired
    private KategorjijaToKategorijaDto toKategorijaDto;

    
  @GetMapping
  public ResponseEntity<List<KategorijaDTO>> getAll(){

      List<Kategorija> prevoznik = kategorijaService.findAll();

      return new ResponseEntity<>(toKategorijaDto.convert(prevoznik), HttpStatus.OK);
  }

}
