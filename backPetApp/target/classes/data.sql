
INSERT INTO korisnik (id, e_mail, korisnicko_ime, lozinka, ime, prezime, uloga)
              VALUES (1,'miroslav@maildrop.cc','miroslav','$2y$12$NH2KM2BJaBl.ik90Z1YqAOjoPgSd0ns/bF.7WedMxZ54OhWQNNnh6','Miroslav','Simic','ADMIN');
INSERT INTO korisnik (id, e_mail, korisnicko_ime, lozinka, ime, prezime, uloga)
              VALUES (2,'tamara@maildrop.cc','tamara','$2y$12$DRhCpltZygkA7EZ2WeWIbewWBjLE0KYiUO.tHDUaJNMpsHxXEw9Ky','Tamara','Milosavljevic','KORISNIK');
INSERT INTO korisnik (id, e_mail, korisnicko_ime, lozinka, ime, prezime, uloga)
              VALUES (3,'petar@maildrop.cc','petar','$2y$12$i6/mU4w0HhG8RQRXHjNCa.tG2OwGSVXb0GYUnf8MZUdeadE4voHbC','Petar','Jovic','KORISNIK');

INSERT INTO kategorija (id, naziv) VALUES (1, 'Pas');
INSERT INTO kategorija (id, naziv) VALUES (2, 'Macka');
INSERT INTO kategorija (id, naziv) VALUES (3, 'Hrcak');
INSERT INTO kategorija (id, naziv) VALUES (4, 'Zec');


INSERT INTO ljubimac (id, ime, opis, pol, starost, tezina, vakcinisan, udomljen, kategorija_id) VALUES (1, 'Ogi', 'Dobar je jako', 'muski', 30, 2, false, false, 1);
INSERT INTO ljubimac (id, ime, opis, pol, starost, tezina, vakcinisan, udomljen, kategorija_id) VALUES (2, 'Miljana', 'Simpatican je jako', 'zenski', 32, 2, false, false, 1);
INSERT INTO ljubimac (id, ime, opis, pol, starost, tezina, vakcinisan, udomljen, kategorija_id) VALUES (3, 'Darko', 'Brzo trci', 'muski', 30, 2, true, false, 2);
INSERT INTO ljubimac (id, ime, opis, pol, starost, tezina, vakcinisan, udomljen, kategorija_id) VALUES (4, 'Milos', 'Agresivan je jako', 'muski', 30, 2, true, false, 4);
INSERT INTO ljubimac (id, ime, opis, pol, starost, tezina, vakcinisan, udomljen, kategorija_id) VALUES (5, 'Marija', 'Ima jako lepo krzno', 'zenski', 20, 2, true, false, 3);
INSERT INTO ljubimac (id, ime, opis, pol, starost, tezina, vakcinisan, udomljen, kategorija_id) VALUES (6, 'Djordje', 'Vrlo umiljat', 'muski', 10, 2, true, false, 1);
INSERT INTO ljubimac (id, ime, opis, pol, starost, tezina, vakcinisan, udomljen, kategorija_id) VALUES (7, 'Uros', 'Puno jede', 'muski', 10, 2, true, false, 2);
INSERT INTO ljubimac (id, ime, opis, pol, starost, tezina, vakcinisan, udomljen, kategorija_id) VALUES (8, 'Hrle', 'Voli spavati', 'muski', 15, 2, true, false, 3);
INSERT INTO ljubimac (id, ime, opis, pol, starost, tezina, vakcinisan, udomljen, kategorija_id) VALUES (9, 'Petar', 'Miran je jako', 'muski', 19, 2, true, false, 4);




