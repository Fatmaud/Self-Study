-- SQLite
--SELECT * from Customer;
--SELECT * from Customer WHERE CustomerId IN (1,4,8,45) AND Country="Brazil" OR CustomerId=45;
--SELECT * FROM Customer WHERE (Country="USA" OR Country="Brazil" OR Country="Denmark") AND (CustomerId BETWEEN 25 AND 27);
--SELECT * FROM Customer WHERE Country IN ("USA", "Brazil", "Denmark") AND (CustomerId BETWEEN 25 AND 27);--üstteki kodu refactoring ile daha kisa hale getirdik. 

--SELECT* FROM Customer WHERE Country LIKE "USA"; --country USA olanlar

--SELECT* FROM Customer WHERE Country LIKE "%U%"; --U harfi iceren ülkeler


--*ORDER BY*--
--SELECT * FROM Customer ORDER BY CustomerId DESC; 
--SELECT * FROM Customer ORDER BY FirstName, LastName;
--SELECT * FROM Customer WHERE CustomerId ORDER BY FirstName, LastName DESC;

--SELECT * FROM Customer LIMIT 0,10; -- ilk deger baslangic noktasi, 2. deger listelenecek eleman sayisi.

--**iliski durumu**--

-- **functions**--
SELECT * FROM Invoice i JOIN InvoiceLine l ON i.InvoiceId=l.InvoiceId;
