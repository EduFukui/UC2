/* (Jesus nao) select name from person where id=16603 */

/*   NOTAS    */ /*  

Cidades do crime: Albany - Reno - SQL city
Annabel - Franklin Ave - id=16371

Dois suspeitos que estavam com a anabel na academia no mesmo horario que ela no dia 9/1/2018
membership_id=48Z7A 	check_in_date=20180109	check_in_time=1600	check_out_time=1730
membership_id=48Z55	    check_in_date=20180109	check_in_time=1530	check_out_time=1700

*/
select * from crime_scene_report
select * from interview
select * from person

/* Mostra os crimes que ocorreram no dia 15/01/2018 (Mostrou esta decrição sobre uma tal Annabel) */
select * from crime_scene_report 
where type = "murder" and date = 20180115
/* Security footage shows that there were 2 witnesses. The first witness lives
at the last house on "Northwestern Dr". The second witness, named Annabel,
lives somewhere on "Franklin Ave". */



/* Mostra Annabel Miller Primeira suspeita */
select * 
from person
where name like '%annabel%' and address_street_name = "Franklin Ave"

/* Mostra a entrevista de Annabel que diz (I saw the murder happen, and I recognized the killer from my gym when I was working out last week on January the 9th.) */
select * 
from interview
where person_id = 16371

/* Mostra o perfil da Annabel na academia */
select * 
from get_fit_now_member
where person_id = 16371
/*id = 90081 / person_id = 16371 / name = Annabel Miller / membership_start_date = 20160208 / membership_status = gold*/

/* Mostra os dados de Annabel na academia */
select * 
from get_fit_now_check_in
where membership_id = 90081
/* membership_id = 90081 / check_in_date = 20180109 / check_in_time = 1600 / check_out_time = 1700 */

/* Mostra quem estava na academia no mesmo dia que anabel */
select * 
from get_fit_now_check_in
where check_in_date = 20180109

/* Mostra o nome do cara que tava com anabel na academia */
select * 
from get_fit_now_member
where id = '48Z7A'

select * 
from get_fit_now_member
where id = '48Z55'