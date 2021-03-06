package models;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

import play.db.jpa.GenericModel;

@Entity
@Table(schema="kenneth", name="produto")
public class Produto extends GenericModel {

	@Id
	@GeneratedValue(generator = "system-uuid")
	@GenericGenerator(name = "system-uuid", strategy = "uuid")
	public String id;
	
	@Column(name = "nome")
	public String nome;
	
	@Column(name = "descricao")
	public String descricao;
	
	@Column(name = "valor")
	public Double valor;
	
	@ManyToOne
	@JoinColumn(name = "usuario_id")
	public Usuario usuario;
	
	@Column(name = "imagem_url")
	public String imagemUrl;
	
}
