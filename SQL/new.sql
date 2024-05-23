--**IN OPERATORU**--
--The function of the IN operator in this query is to select and return all rows from the Customer table where the Country column is either "USA" or "Brazil". It simplifies the query and makes it more readable compared to using multiple OR conditions. Here’s an equivalent query using OR

--ÖRNEK:Ülkesi USA veya Brazil olanlari getir:
--SELECT * FROM Customer WHERE Country="USA" OR Country="Brazil";

-- SELECT * FROM Customer WHERE Country IN  ("USA", "Brazil");--üstteki kodla ayni sonucu döndürüyor.
-- SELECT * FROM Customer WHERE Country NOT IN  ("USA", "Brazil");

--ÖRNEK: customerId si ... olanlardan Canada da olanlari getir:
--SELECT * FROM Customer WHERE CustomerId IN (1,3,5,7) AND Country= "Canada"; 


--ÖRNEK: customerId si ... olanlari ve(veya) Canada da olanlari getir:
--SELECT * FROM Customer WHERE CustomerId IN (1,3,5,7) OR Country= "Canada";


--SELECT * FROM Customer WHERE CustomerId IN (1,3,5,7) AND (Country= "Canada" OR Country="Brazil") OR CustomerId=45;

--**LIKE OPERATORU**--
--1--"="--anlaminda:
-- SELECT * FROM Customer WHERE Country LIKE "USA";
-- --2--"iceren"--anlaminda:
-- SELECT * FROM Customer WHERE Country LIKE "%U%";
-- --3--"ilk harfi ... olan" degeri getir:
-- SELECT * FROM Customer WHERE Country LIKE "U%";
-- --4--"son harfi ... olan" degeri getir:
-- SELECT * FROM Customer WHERE Country LIKE "%A";
-- --5-- alt tir ile kullanim. Her _ bir karakter:
-- --?2.harfi U olan ülkeler:
-- SELECT * FROM Customer WHERE Country LIKE "_U%";
-- --?3.harfi A olan ülkeler:
-- SELECT * FROM Customer WHERE Country LIKE "__A%";

--**ORDER BY OPERATORU**--
--!! defaulttu ASC=artan siralamadir
-- SELECT * FROM Customer ORDER BY CustomerId ;
-- SELECT * FROM Customer ORDER BY CustomerId DESC;
-- SELECT * FROM Customer ORDER BY LastName DESC ;
--SELECT * FROM Customer ORDER BY FirstName;
--SELECT * FROM Customer ORDER BY FirstName,LastName; 
--SELECT * FROM Customer WHERE CustomerId IN (14,55) ORDER BY FirstName,LastName DESC

--**LIMIT OPERATORU**--
--SELECT * FROM Customer LIMIT 10,10; -- LIMIT ten sonraki ilk sayi filtrelenecek degerin baslangic noktasini (bir sonraki ID den getirmeye baslar), 2. deger sorgulamanin kac dger icerecegini gösterir
--SELECT * FROM Customer LIMIT 20, 5;

--**COUNT OPERATORU**--
--SELECT COUNT(*) as "toplam kisi" FROM Customer;
--SELECT COUNT(Total) as "toplam fatura" FROM Invoice; --secilen fielddaki sayisal verileri toplar. 


--**JOIN**--
