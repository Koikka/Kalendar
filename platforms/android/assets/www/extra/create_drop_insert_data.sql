/* Insert data */
INSERT kuntke.varaus (sotu, dpvm, alkuaika, loppuaika, hknro, hoitotunn, selite, atyyppi, odotila, vtieto1, vtieto2, vtieto3, vtieto4) VALUES ('010101-0101', CAST('2017-11-14 00:00:00' AS DateTime), '10:00', '11:00', 'HSH001', 'RTULO', 'TULORYHMÄ', '', 'PÄIVÄSALI 1. KRS', '', '', '', '');

INSERT kuntke.asiakas (asotu, animi) VALUES ('010101-0101', 'ASIAKAS YKKÖNEN');

INSERT kuntke.hoidot (hoitotunn, hoitonimi, hoitotyyp, ennakkotp, nimiasille) VALUES ('RTULO', 'TULORYHMÄ', '', '', '');
INSERT kuntke.hoidot (hoitotunn, hoitonimi, hoitotyyp, ennakkotp, nimiasille) VALUES ('TULOHAAS', 'TULOHAASTATTELU', '', '', '');
INSERT kuntke.hoidot (hoitotunn, hoitonimi, hoitotyyp, ennakkotp, nimiasille) VALUES ('LOUNAS', 'LOUNAS', '', '', '');
INSERT kuntke.hoidot (hoitotunn, hoitonimi, hoitotyyp, ennakkotp, nimiasille) VALUES ('RKUNTO', 'KUNTORYHMÄ', '', '', '');
INSERT kuntke.hoidot (hoitotunn, hoitonimi, hoitotyyp, ennakkotp, nimiasille) VALUES ('VAPAINFO', 'VAPAA-AJANINFO', '', NULL, '');
INSERT kuntke.hoidot (hoitotunn, hoitonimi, hoitotyyp, ennakkotp, nimiasille) VALUES ('ALKUFYS', 'FYSIOTERAPEUTIN ALKUTUTKIMUS', '', '', '');
INSERT kuntke.hoidot (hoitotunn, hoitonimi, hoitotyyp, ennakkotp, nimiasille) VALUES ('RLIIKKU', 'LIIKUNTARYHMÄ', '', '', '');
INSERT kuntke.hoidot (hoitotunn, hoitonimi, hoitotyyp, ennakkotp, nimiasille) VALUES ('ALKULAA', 'LÄÄKÄRIN ALKUTARKASTUS', '', '', '');
INSERT kuntke.hoidot (hoitotunn, hoitonimi, hoitotyyp, ennakkotp, nimiasille) VALUES ('ALKUSAI', 'SAIRAANHOITAJAN ALKUTARKASTUS', '', '', 'YKSILÖAIKA');
INSERT kuntke.hoidot (hoitotunn, hoitonimi, hoitotyyp, ennakkotp, nimiasille) VALUES ('RULKO', 'ULKOILURYHMÄ', '', '', '');
INSERT kuntke.hoidot (hoitotunn, hoitonimi, hoitotyyp, ennakkotp, nimiasille) VALUES ('RPSYKO', 'PSYKOSOSIAALINEN RYHMÄ', '', '', '');
INSERT kuntke.hoidot (hoitotunn, hoitonimi, hoitotyyp, ennakkotp, nimiasille) VALUES ('RTOIMI', 'TOIMINTATERAPIA', '', '', '');

INSERT kuntke.resurssi (resnro, resnimi, ammatti, resodotila) VALUES ('HSH001', 'SALMINEN SAKU', 'SAIRAANHOITAJA', '');
INSERT kuntke.resurssi (resnro, resnimi, ammatti, resodotila) VALUES ('HSH002', 'SAARELA MARJA', '', '');
INSERT kuntke.resurssi (resnro, resnimi, ammatti, resodotila) VALUES ('HFY001', 'LUNDVALL IRMA', 'FYSIOTERAPAUTTI', '');
INSERT kuntke.resurssi (resnro, resnimi, ammatti, resodotila) VALUES ('HKH001', 'VALLI REIJO', 'KUNTOHOITAJA', '');
INSERT kuntke.resurssi (resnro, resnimi, ammatti, resodotila) VALUES ('HFY002', 'LAITILA SAMI', 'FYSIOTERAPEUTTI', '');
INSERT kuntke.resurssi (resnro, resnimi, ammatti, resodotila) VALUES ('HLA001', 'MUUJÄRVI MARITA', 'FYSIATRI', '');
INSERT kuntke.resurssi (resnro, resnimi, ammatti, resodotila) VALUES ('HFY003', 'KOURA MATTI', 'FYSIOTERAPEUTTI', '');
INSERT kuntke.resurssi (resnro, resnimi, ammatti, resodotila) VALUES ('HLA002', 'LATVA-MOILANEN ANNE', 'PSYKOLOGI', '');
INSERT kuntke.resurssi (resnro, resnimi, ammatti, resodotila) VALUES ('HTA001', 'KULOSAARI ERKKI', 'TOIMINTATERAPEUTTI', '');

INSERT kuntke.varaus (sotu, dpvm, alkuaika, loppuaika, hknro, hoitotunn, selite, atyyppi, odotila, vtieto1, vtieto2, vtieto3, vtieto4) VALUES ('010101-0101', CAST('2017-11-14 00:00:00' AS Date), '10:00', '11:00', 'HSH001', 'RTULO', 'TULORYHMÄ', '', 'PÄIVÄSALI 1. KRS', '', '', '', '');
INSERT kuntke.varaus (sotu, dpvm, alkuaika, loppuaika, hknro, hoitotunn, selite, atyyppi, odotila, vtieto1, vtieto2, vtieto3, vtieto4) VALUES ('010101-0101', CAST('2017-11-14 00:00:00' AS Date), '11:15', '12:00', 'HSH001', 'TULOHAAS', 'TULOHAASTATTELU', '', '2. KRS SAIRAANHOITAJAN HUONE', '', '', '', '');
INSERT kuntke.varaus (sotu, dpvm, alkuaika, loppuaika, hknro, hoitotunn, selite, atyyppi, odotila, vtieto1, vtieto2, vtieto3, vtieto4) VALUES ('010101-0101', CAST('2017-11-14 00:00:00' AS Date), '12:15', '13:15', '', 'LOUNAS', 'LOUNAS', '', '', '', '', '', '');
INSERT kuntke.varaus (sotu, dpvm, alkuaika, loppuaika, hknro, hoitotunn, selite, atyyppi, odotila, vtieto1, vtieto2, vtieto3, vtieto4) VALUES ('010101-0101', CAST('2017-11-14 00:00:00' AS Date), '14:00', '15:00', 'HFY001', 'RKUNTO', 'KUNTORYHMÄ', '', 'KELLARIKERROS PULSSI', '', '', '', '');
INSERT kuntke.varaus (sotu, dpvm, alkuaika, loppuaika, hknro, hoitotunn, selite, atyyppi, odotila, vtieto1, vtieto2, vtieto3, vtieto4) VALUES ('010101-0101', CAST('2017-11-14 00:00:00' AS Date), '15:00', '15:30', 'HFY001', '', 'RYHMÄ', '', 'ORAVA 2. KRS', '', '', '', '');
INSERT kuntke.varaus (sotu, dpvm, alkuaika, loppuaika, hknro, hoitotunn, selite, atyyppi, odotila, vtieto1, vtieto2, vtieto3, vtieto4) VALUES ('010101-0101', CAST('2017-11-14 00:00:00' AS Date), '15:30', '17:00', 'HKH001', 'VAPAINFO', 'VAPAA-AJANINFO', '', 'PÄIVÄSALI 1. KRS', '', '', '', '');
INSERT kuntke.varaus (sotu, dpvm, alkuaika, loppuaika, hknro, hoitotunn, selite, atyyppi, odotila, vtieto1, vtieto2, vtieto3, vtieto4) VALUES ('010101-0101', CAST('2017-11-15 00:00:00' AS Date), '09:00', '10:00', 'KFY001', '', 'FYSIOTERAPEUTIN ALKUTUTKIMUS', '', 'FYSIOTERAPIAN AULA', '', '', '', '');
INSERT kuntke.varaus (sotu, dpvm, alkuaika, loppuaika, hknro, hoitotunn, selite, atyyppi, odotila, vtieto1, vtieto2, vtieto3, vtieto4) VALUES ('010101-0101', CAST('2017-11-15 00:00:00' AS Date), '10:00', '11:00', 'KHK001', '', 'LIIKUNTARYHMÄ', '', 'LIIKUNTASALI AULAN PUOLI', '', '', '', '');
INSERT kuntke.varaus (sotu, dpvm, alkuaika, loppuaika, hknro, hoitotunn, selite, atyyppi, odotila, vtieto1, vtieto2, vtieto3, vtieto4) VALUES ('010101-0101', CAST('2017-11-15 00:00:00' AS Date), '11:00', '12:00', 'HSH001', '', 'YKSILÖAIKA', '', '2. KRS SAIRAANHOITAJAN HUONE', '', '', '', '');
INSERT kuntke.varaus (sotu, dpvm, alkuaika, loppuaika, hknro, hoitotunn, selite, atyyppi, odotila, vtieto1, vtieto2, vtieto3, vtieto4) VALUES ('010101-0101', CAST('2017-11-15 00:00:00' AS Date), '12:00', '14:00', '', 'LOUNAS', 'LOUNAS', '', '', '', '', '', '');
INSERT kuntke.varaus (sotu, dpvm, alkuaika, loppuaika, hknro, hoitotunn, selite, atyyppi, odotila, vtieto1, vtieto2, vtieto3, vtieto4) VALUES ('010101-0101', CAST('2017-11-15 00:00:00' AS Date), '14:00', '15:00', 'HFY002', 'RKUNTO  ', 'KUNTORYHMÄ', '', 'KELLARIKERROS PULSSI', '', '', '', '');
INSERT kuntke.varaus (sotu, dpvm, alkuaika, loppuaika, hknro, hoitotunn, selite, atyyppi, odotila, vtieto1, vtieto2, vtieto3, vtieto4) VALUES ('010101-0101', CAST('2017-11-15 00:00:00' AS Date), '15:00', '16:00', 'HLA001', '', 'LÄÄKÄRIN ALKUTARKASTUS', '', 'OSASTO 3 HUONE 11', '', '', '', '');
INSERT kuntke.varaus (sotu, dpvm, alkuaika, loppuaika, hknro, hoitotunn, selite, atyyppi, odotila, vtieto1, vtieto2, vtieto3, vtieto4) VALUES ('010101-0101', CAST('2017-11-16 00:00:00' AS Date), '09:00', '10:00', 'HFY002', '', 'FYSIOTERAPIAN YKSILÖAIKA', '', 'FYSIOTERAPIAN AULA', '', '', '', '');
INSERT kuntke.varaus (sotu, dpvm, alkuaika, loppuaika, hknro, hoitotunn, selite, atyyppi, odotila, vtieto1, vtieto2, vtieto3, vtieto4) VALUES ('010101-0101', CAST('2017-11-16 00:00:00' AS Date), '10:00', '11:00', 'HFY003', 'RULKO   ', 'ULKOILURYHMÄ', '', '', '', '', '', '');
INSERT kuntke.varaus (sotu, dpvm, alkuaika, loppuaika, hknro, hoitotunn, selite, atyyppi, odotila, vtieto1, vtieto2, vtieto3, vtieto4) VALUES ('010101-0101', CAST('2017-11-16 00:00:00' AS Date), '11:00', '14:00', '', 'LOUNAS', 'LOUNAS', '', '', '', '', '', '');
INSERT kuntke.varaus (sotu, dpvm, alkuaika, loppuaika, hknro, hoitotunn, selite, atyyppi, odotila, vtieto1, vtieto2, vtieto3, vtieto4) VALUES ('010101-0101', CAST('2017-11-16 00:00:00' AS Date), '14:00', '15:00', 'HLA002', 'RPSYKO  ', 'PSYKOSOSIAALINEN RYHMÄ', '', 'TERAPIAKEITTIÖT-AULA', '', '', '', '');
INSERT kuntke.varaus (sotu, dpvm, alkuaika, loppuaika, hknro, hoitotunn, selite, atyyppi, odotila, vtieto1, vtieto2, vtieto3, vtieto4) VALUES ('010101-0101', CAST('2017-11-16 00:00:00' AS Date), '15:00', '16:00', 'HTA001', 'RTOIMI  ', 'TOIMINTATERAPIA', '', 'TOIMINTATERAPIAN AULA', '', '', '', '');

/* Create DB */
CREATE DATABASE kuntke;

/* Create tables */
CREATE TABLE kuntke.varaus(
      id INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
      sotu CHAR(11) NULL,
      dpvm DATETIME NULL,
      alkuaika CHAR(5) NULL,
      loppuaika CHAR(5) NULL,
      hknro CHAR(6) NULL,
      hoitotunn CHAR(8) NULL,
      selite CHAR(100) NULL,
      atyyppi CHAR(1) NULL,
      odotila CHAR(30) NULL,
      vtieto1 CHAR(60) NULL,
      vtieto2 CHAR(60) NULL,
      vtieto3 CHAR(250) NULL,
      vtieto4 CHAR(60) NULL
);
CREATE TABLE kuntke.asiakas(
      id INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
      asotu CHAR(11) NULL,
      animi CHAR(100) NULL
);
CREATE TABLE kuntke.resurssi(
      id INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
      resnro CHAR(6) NULL,
      resnimi CHAR(50) NULL,
      ammatti CHAR(20) NULL,
      resodotila CHAR(30) NULL
);
CREATE TABLE kuntke.hoidot(
      id INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
      hoitotunn CHAR(8) NULL,
      hoitonimi CHAR(60) NULL,
      hoitotyyp CHAR(1) NULL,
      ennakkotp CHAR(10) NULL,
      nimiasille CHAR(30) NULL
);
CREATE TABLE kuntke.rfid_asiakas(
      id INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
      rfid CHAR(100) NULL,
      asiakas_id CHAR(100) NULL
);

/* Drop tables */
drop table kuntke.varaus;
drop table kuntke.asiakas;
drop table kuntke.hoidot;
drop table kuntke.resurssi;

/* Alter collation */
ALTER DATABASE kuntke CHARACTER SET utf8 COLLATE utf8_unicode_ci;
ALTER TABLE kuntke.resurssi CONVERT TO CHARACTER SET utf8 COLLATE utf8_unicode_ci;
ALTER TABLE <table_name> MODIFY <column_name> VARCHAR(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci;















INSERT kuntke.varaus (sotu, dpvm, alkuaika, loppuaika, hknro, hoitotunn, selite, atyyppi, odotila, vtieto1, vtieto2, vtieto3, vtieto4) VALUES ('010101-0101', CAST('2017-05-22 00:00:00' AS Date), '10:00', '11:00', 'HSH001', 'RTULO', 'TULORYHMÄ', '', 'PÄIVÄSALI 1. KRS', '', '', '', '');
INSERT kuntke.varaus (sotu, dpvm, alkuaika, loppuaika, hknro, hoitotunn, selite, atyyppi, odotila, vtieto1, vtieto2, vtieto3, vtieto4) VALUES ('010101-0101', CAST('2017-05-22 00:00:00' AS Date), '11:15', '12:00', 'HSH001', 'TULOHAAS', 'TULOHAASTATTELU', '', '2. KRS SAIRAANHOITAJAN HUONE', '', '', '', '');
INSERT kuntke.varaus (sotu, dpvm, alkuaika, loppuaika, hknro, hoitotunn, selite, atyyppi, odotila, vtieto1, vtieto2, vtieto3, vtieto4) VALUES ('010101-0101', CAST('2017-05-22 00:00:00' AS Date), '12:15', '13:15', '', 'LOUNAS', 'LOUNAS', '', '', '', '', '', '');
INSERT kuntke.varaus (sotu, dpvm, alkuaika, loppuaika, hknro, hoitotunn, selite, atyyppi, odotila, vtieto1, vtieto2, vtieto3, vtieto4) VALUES ('010101-0101', CAST('2017-05-22 00:00:00' AS Date), '14:00', '15:00', 'HFY001', 'RKUNTO', 'KUNTORYHMÄ', '', 'KELLARIKERROS PULSSI', '', '', '', '');
INSERT kuntke.varaus (sotu, dpvm, alkuaika, loppuaika, hknro, hoitotunn, selite, atyyppi, odotila, vtieto1, vtieto2, vtieto3, vtieto4) VALUES ('010101-0101', CAST('2017-05-22 00:00:00' AS Date), '15:00', '15:30', 'HFY001', '', 'RYHMÄ', '', 'ORAVA 2. KRS', '', '', '', '');
INSERT kuntke.varaus (sotu, dpvm, alkuaika, loppuaika, hknro, hoitotunn, selite, atyyppi, odotila, vtieto1, vtieto2, vtieto3, vtieto4) VALUES ('010101-0101', CAST('2017-05-22 00:00:00' AS Date), '15:30', '17:00', 'HKH001', 'VAPAINFO', 'VAPAA-AJANINFO', '', 'PÄIVÄSALI 1. KRS', '', '', '', '');
INSERT kuntke.varaus (sotu, dpvm, alkuaika, loppuaika, hknro, hoitotunn, selite, atyyppi, odotila, vtieto1, vtieto2, vtieto3, vtieto4) VALUES ('010101-0101', CAST('2017-05-25 00:00:00' AS Date), '09:00', '10:00', 'KFY001', '', 'FYSIOTERAPEUTIN ALKUTUTKIMUS', '', 'FYSIOTERAPIAN AULA', '', '', '', '');
INSERT kuntke.varaus (sotu, dpvm, alkuaika, loppuaika, hknro, hoitotunn, selite, atyyppi, odotila, vtieto1, vtieto2, vtieto3, vtieto4) VALUES ('010101-0101', CAST('2017-05-25 00:00:00' AS Date), '10:00', '11:00', 'KHK001', '', 'LIIKUNTARYHMÄ', '', 'LIIKUNTASALI AULAN PUOLI', '', '', '', '');
INSERT kuntke.varaus (sotu, dpvm, alkuaika, loppuaika, hknro, hoitotunn, selite, atyyppi, odotila, vtieto1, vtieto2, vtieto3, vtieto4) VALUES ('010101-0101', CAST('2017-05-25 00:00:00' AS Date), '11:00', '12:00', 'HSH001', '', 'YKSILÖAIKA', '', '2. KRS SAIRAANHOITAJAN HUONE', '', '', '', '');
INSERT kuntke.varaus (sotu, dpvm, alkuaika, loppuaika, hknro, hoitotunn, selite, atyyppi, odotila, vtieto1, vtieto2, vtieto3, vtieto4) VALUES ('010101-0101', CAST('2017-05-25 00:00:00' AS Date), '12:00', '14:00', '', 'LOUNAS', 'LOUNAS', '', '', '', '', '', '');
INSERT kuntke.varaus (sotu, dpvm, alkuaika, loppuaika, hknro, hoitotunn, selite, atyyppi, odotila, vtieto1, vtieto2, vtieto3, vtieto4) VALUES ('010101-0101', CAST('2017-05-25 00:00:00' AS Date), '14:00', '15:00', 'HFY002', 'RKUNTO  ', 'KUNTORYHMÄ', '', 'KELLARIKERROS PULSSI', '', '', '', '');
INSERT kuntke.varaus (sotu, dpvm, alkuaika, loppuaika, hknro, hoitotunn, selite, atyyppi, odotila, vtieto1, vtieto2, vtieto3, vtieto4) VALUES ('010101-0101', CAST('2017-05-25 00:00:00' AS Date), '15:00', '16:00', 'HLA001', '', 'LÄÄKÄRIN ALKUTARKASTUS', '', 'OSASTO 3 HUONE 11', '', '', '', '');
INSERT kuntke.varaus (sotu, dpvm, alkuaika, loppuaika, hknro, hoitotunn, selite, atyyppi, odotila, vtieto1, vtieto2, vtieto3, vtieto4) VALUES ('010101-0101', CAST('2017-05-28 00:00:00' AS Date), '09:00', '10:00', 'HFY002', '', 'FYSIOTERAPIAN YKSILÖAIKA', '', 'FYSIOTERAPIAN AULA', '', '', '', '');
INSERT kuntke.varaus (sotu, dpvm, alkuaika, loppuaika, hknro, hoitotunn, selite, atyyppi, odotila, vtieto1, vtieto2, vtieto3, vtieto4) VALUES ('010101-0101', CAST('2017-05-28 00:00:00' AS Date), '10:00', '11:00', 'HFY003', 'RULKO   ', 'ULKOILURYHMÄ', '', '', '', '', '', '');
INSERT kuntke.varaus (sotu, dpvm, alkuaika, loppuaika, hknro, hoitotunn, selite, atyyppi, odotila, vtieto1, vtieto2, vtieto3, vtieto4) VALUES ('010101-0101', CAST('2017-05-28 00:00:00' AS Date), '11:00', '14:00', '', 'LOUNAS', 'LOUNAS', '', '', '', '', '', '');
INSERT kuntke.varaus (sotu, dpvm, alkuaika, loppuaika, hknro, hoitotunn, selite, atyyppi, odotila, vtieto1, vtieto2, vtieto3, vtieto4) VALUES ('010101-0101', CAST('2017-05-28 00:00:00' AS Date), '14:00', '15:00', 'HLA002', 'RPSYKO  ', 'PSYKOSOSIAALINEN RYHMÄ', '', 'TERAPIAKEITTIÖT-AULA', '', '', '', '');
INSERT kuntke.varaus (sotu, dpvm, alkuaika, loppuaika, hknro, hoitotunn, selite, atyyppi, odotila, vtieto1, vtieto2, vtieto3, vtieto4) VALUES ('010101-0101', CAST('2017-05-28 00:00:00' AS Date), '15:00', '16:00', 'HTA001', 'RTOIMI  ', 'TOIMINTATERAPIA', '', 'TOIMINTATERAPIAN AULA', '', '', '', '');










