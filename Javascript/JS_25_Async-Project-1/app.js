let showList = []; //!boş bir array aç. alttaki arama olayında datayı görebilmek için global e boş bir array açıp, fetch ile gelen data yı bu boş array e attık

fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
  .then((resp) => resp.json())
  .then((data) => {
    showList = data;
    showScreen(showList.meals);
  })

  .catch((err) => console.log(err));

function showScreen(data) {
  const mealsDiv = document.querySelector(".food");
  mealsDiv.innerHTML = "";

  data.forEach((a) => {
    mealsDiv.innerHTML += `
    <div class="col-md-3 m-1">
    <p>${a.strMeal}</p>
    <img style=width:200px src="${a.strMealThumb}"/>


    </div>
    
    `;
  });
}

//!bayraklara tiklaninca ülkelrin yemekleri gelsin:

document.querySelectorAll("img").forEach(
  (country) =>
    (country.onclick = () => {
      fetch(`https:/www.themealdb.com/api/json/v1/1/filter.php?a=${country.id}`)
        .then((res) => res.json())
        .then((data) => showScreen(data.meals));
    })
);

//!arama inputuna yazdığım harfleri içeren yemekleri ekrana bastır (oninput=kullanıcı input elemanına her veri girişinde çalışmaktadır)

document.querySelector("#ara").oninput = (e) => {
  //   document.querySelector("#ara").value;
  // console.log(e.target.value);
  let veri = showList.meals.filter((a) =>
    a.strMeal.toLowerCase().includes(e.target.value.toLowerCase())
  );

  showScreen(veri);
};
