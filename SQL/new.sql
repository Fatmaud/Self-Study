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
