function showFilter() {
  const filter = document.getElementById("filterContent");
  const addForm = document.getElementById("newContent");

  addForm.style.display = "none";
  filter.style.display =
    filter.style.display === "none" ? "block" : "none";
}
function showAddNew() {
  const filter = document.getElementById("filterContent");
  const addForm = document.getElementById("newContent");

  filter.style.display = "none";
  addForm.style.display =
    addForm.style.display === "none" ? "flex" : "none";
}
function filterArticles() {
  const showOpinion = document.getElementById("opinionCheckbox").checked;
  const showRecipe = document.getElementById("recipeCheckbox").checked;
  const showUpdate = document.getElementById("updateCheckbox").checked;

  const articles = document.querySelectorAll("#articleList article");

  articles.forEach(article => {
    if (
      (article.classList.contains("opinion") && showOpinion) ||
      (article.classList.contains("recipe") && showRecipe) ||
      (article.classList.contains("update") && showUpdate)
    ) {
      article.style.display = "block";
    } else {
      article.style.display = "none";
    }
  });
}
function addNewArticle() {
  const title = document.getElementById("inputHeader").value;
  const text = document.getElementById("inputArticle").value;

  let type = "";
  let label = "";

  if (document.getElementById("opinionRadio").checked) {
    type = "opinion";
    label = "Opinion";
  } else if (document.getElementById("recipeRadio").checked) {
    type = "recipe";
    label = "Recipe";
  } else if (document.getElementById("lifeRadio").checked) {
    type = "update";
    label = "Update";
  }

  if (!title || !text || !type) {
    alert("Please fill out all fields.");
    return;
  }

  const article = document.createElement("article");
  article.className = type;

  article.innerHTML = `
    <span class="marker">${label}</span>
    <h2>${title}</h2>
    <p>${text}</p>
  `;

  document.getElementById("articleList").appendChild(article);

  document.getElementById("inputHeader").value = "";
  document.getElementById("inputArticle").value = "";
  document.querySelectorAll('input[name="articleType"]').forEach(r => r.checked = false);
}
