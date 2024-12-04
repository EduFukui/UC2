-- Atividade Avaliativa B --

select * from crime_scene_report
select * from interview
select * from person


-- 1° Passo --
/* Mostrar os crimes que ocorreram no dia 15/01/2018 (Mostrou esta decrição sobre uma tal Annabel) */
select * from crime_scene_report 
where type = "murder" and date = 20180115 and city = 'SQL City'


-- 2° Passo --
/* Mostra Annabel Miller Primeira Suspeita */
select * from person
where name like '%annabel%' and address_street_name = "Franklin Ave"


-- 3° Passo --
/*  Mostra a entrevista de Annabel */
select id , name , transcript from person
inner join interview
on person.id = interview.person_id
where name like '%annabel%' and address_street_name = "Franklin Ave"


-- 4° Passo --
/* Mostra o Perfil de Annabel na academia */
select * from get_fit_now_member
where person_id = 16371


-- 5° Passo --
/* Mostra os dados de Annabel na academia (data e hora) */
select gc.* , gn.name from get_fit_now_member as gn
inner join get_fit_now_check_in as gc
on gn.id = gc.membership_id
where person_id = 16371


-- 6° Passo --
/* Voltar para a 2 vitima */
select * from person
where address_street_name = 'Northwestern Dr'  
order by address_number desc


-- 7° Passo --
/* Descrição da segunda vitima */
select * from interview 
where person_id = 14887


-- 8° Passo --
/* Mostra dois suspeios do crime */
select gc.* , gn.name from get_fit_now_member as gn
inner join get_fit_now_check_in as gc
on gn.id = gc.membership_id
where check_in_date = 20180109 and membership_id like '48Z%'


-- 9° Passo --
/* Mostrar somente o Murder */
select person.* 
from drivers_license
inner join person
on drivers_license.id = person.license_id
join get_fit_now_member
on person.id = get_fit_now_member.person_id
where plate_number like '%H42W%'


-- 10° Passo --
/* Colocar no Terminal o nome do killer */
INSERT INTO solution VALUES (1, 'Jeremy Bowers');
        
        SELECT value FROM solution;


-- 11° Passo --
/* Entrevista do killer */
select * 
from interview
where person_id = 67318


-- 12° Passo --
/* Especifica a mulher que o contratou (cabelo vermelho, mulher, Tesla, evento) */
select pe.*,fa.*,dr.*
from drivers_license as dr
inner join person as pe
on dr.id = pe.license_id
inner join facebook_event_checkin as fa
on fa.person_id = pe.id
where hair_color = 'red' and car_make = 'Tesla' and car_model = 'Model S' and gender = 'female' and event_name like '%Symphony%'


-- 13° Passo --
/* Colocar o nome da mulher 'Miranda Priestly' no terminal */
INSERT INTO solution VALUES (1, 'Miranda Priestly');
        
        SELECT value FROM solution;



		
-- NOTAS --

/* (Jesus nao) select name from person where id=16603 */

-- Repostagem do 1° Passo --
-- Security footage shows that there were 2 witnesses. The first witness lives at the last house on
-- "Northwestern Dr". The second witness, named Annabel, lives somewhere on "Franklin Ave".

-- Informações Annabel do 2° Passo --
-- Id = 16371 , name = Annabel Miller 

-- Repostagem do 3° Passo --
-- I saw the murder happen, and I recognized the killer from my gym when I was working out last week on January the 9th.

-- Perfil de Academia 4° Passo --
-- id = 90081 , person_id = 16371 , name = Annabel Miller , membership_start_date = 20160208 , membership_status = gold

-- Dados Annabel 5° Passo --
-- check_in_date = 20180109 , check_in_time = 1600 , check_out_time = 1700

-- 6° Passo Voltar para a 2 vitima --
-- Id = 14887 , name = Morty Schapiro

-- Descrição 7° Passo --
-- I heard a gunshot and then saw a man run out. He had a "Get Fit Now Gym" bag. The membership number on the bag started 
-- with "48Z". Only gold members have those bags. The man got into a car with a plate that included "H42W".

-- 8° Passo  Mostra os dois caras que estavam com ela na academia --
-- Mostra dois suspeios do crime (Joe Germuska ,  Jeremy Bowers)


-- 9° Passo Mostra so o cara mal --
-- Jeremy Bowers primeiro Killer (id=67318)

-- 10° Passo Mostra quem é o killer certo --
-- Congrats, you found the murderer! But wait, there's more... If you think you'
-- re up for a challenge, try querying the interview transcript of the murderer 
-- to find the real villain behind this crime. If you feel especially confident 
-- in your SQL skills, try to complete this final step with no more than 2 queries. 
-- Use this same INSERT statement with your new suspect to check your answer.

-- 11° Passo entrevista do assasino --
-- I was hired by a woman with a lot of money. I don't know her name but I know she's around 5'5" (65") or 5'7" (67"). 
-- She has red hair and she drives a Tesla Model S. I know that she attended the SQL Symphony Concert 3 times in December 2017.

-- 12° Passo --
-- Especifica a mulher que o contratou (cabelo vermelho, mulher, Tesla, evento) a segunda murder

-- 13° Passo --
-- Miranda Priestly era a mulher certa (Fim)

-- Fim NOTAS