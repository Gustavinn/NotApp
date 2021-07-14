package com.notapp.notapp.controllers;

import com.notapp.notapp.models.Nota;
import com.notapp.notapp.repository.NotaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/nota")
public class NotaController {

    @Autowired
    private NotaRepository notaRepository;

    @GetMapping
    public List<Nota> buscarNotas() {
        return notaRepository.findAll();
    }

    @PostMapping
    public Nota cadastrarNota(@RequestBody Nota nota) {
        return notaRepository.save(nota);
    }

    @GetMapping("/{codigoUsuario}")
    public List<Nota> buscarNotasPorCodigoUsuario(@PathVariable Integer codigoUsuario) {
        return notaRepository.findByUsuarioCodigo(codigoUsuario);
    }

}
