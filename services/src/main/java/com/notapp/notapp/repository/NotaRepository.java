package com.notapp.notapp.repository;

import com.notapp.notapp.models.Nota;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NotaRepository extends JpaRepository<Nota, Integer> {

    List<Nota> findByUsuarioCodigo(Integer codigo);
}
