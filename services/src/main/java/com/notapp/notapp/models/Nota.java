package com.notapp.notapp.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "NOTA")
public class Nota {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "CODIGO", nullable = false)
    private Integer codigo;

    @Column(name = "VALOR_NOTA", nullable = false)
    private Double valorNota;

    @Column(name = "DISCIPLINA", nullable = false)
    private String disciplina;

    @ManyToOne
    @JoinColumn(name = "usuario_codigo", referencedColumnName = "codigo")
    @JsonIgnoreProperties("notas")
    private Usuario usuario;


}
