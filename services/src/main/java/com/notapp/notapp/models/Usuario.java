package com.notapp.notapp.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "USUARIO")
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "CODIGO", nullable = false)
    private Integer codigo;

    @Column(name = "NOME", nullable = false)
    private String nome;

    @OneToMany(mappedBy = "usuario")
    @Column(name = "NOTAS")
    @JsonIgnore
    private List<Nota> notas;

}
