-- Aula 22 Triggers --

-- Ex 1 --

create table historico_salarial(
	id_historico serial Primary key,
	data_alteracao date,
	salario money,
	id_usuario int not null, FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario)
	
)
select * from historico_salarial
select * from usuario
 
-- Ex 2 --
create or replace function atualizacao_salario() returns
trigger as $$ begin
insert into historico_salarial(id_usuario,data_alteracao,salario)
values (NEW.id_usuario,NOW(),NEw.salario);
return null;
end;
$$language plpgsql;
 
-- Ex 3 --
create or replace trigger trigger_atualiza_salario
after insert or update on usuario
for each row
execute function atualizacao_salario()
 
select * from historico_salarial
 
update usuario set salario = 2500 where id_usuario = 3
 
-- Ex 4 --
update usuario set salario = 500 where id_usuario = 1
update usuario set salario = 23500 where id_usuario = 4
update usuario set salario = 7840 where id_usuario = 2
select * from historico_salarial

-- Ex 5 --
create table historico_preco_produto(
	id_historico_produto serial Primary key,
	data_alteracao date,
	preco numeric,
	id_produto int not null, FOREIGN KEY (id_produto) REFERENCES produtos(id_produto)
)
select * from produtos

create or replace function atualizacao_preco() returns
trigger as $$ begin
insert into historico_preco_produto(id_produto,data_alteracao,preco)
values (NEW.id_produto,NOW(),NEw.preco);
return null;
end;
$$language plpgsql;
 
create or replace trigger trigger_atualiza_preco
after insert or update on produtos
for each row
execute function atualizacao_preco()

update produtos set preco = 32 where id_produto = 12
select * from historico_preco_produto
select * from produtos