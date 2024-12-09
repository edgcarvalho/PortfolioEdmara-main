export function hoverChangeExperience(
  nameCard,
  changeDescription,
  titleExperience,
  companyExperience,
  dateExperience
) {
  const varChangeDescription = document.querySelector(".changeExperience");
  const varTitleExperience = document.querySelector(".titleExperience");
  const varCompanyExperience = document.querySelector(".companyExperience");
  const varDateExperience = document.querySelector(".dateExperience");

  // Quando o card de experiência for clicado
  document.querySelector(nameCard).addEventListener("click", () => {
    varChangeDescription.innerHTML = changeDescription;
    varCompanyExperience.innerHTML = companyExperience;
    varTitleExperience.innerHTML = titleExperience;
    varDateExperience.innerHTML = dateExperience;
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const companies = document.querySelectorAll("#experience-company .company");
  
  companies.forEach(company => {
    company.addEventListener("click", function () {
      // Remove a classe active de todas as empresas e conteúdos
      const currentActiveCompany = document.querySelector(".company.activeExperience");
      const currentActiveContent = document.querySelector(".text-experience.active");
      
      if (currentActiveCompany) {
        currentActiveCompany.classList.remove("activeExperience");
      }
      if (currentActiveContent) {
        currentActiveContent.classList.remove("active");
      }
      
      // Adiciona a classe active na empresa clicada e no conteúdo correspondente
      company.classList.add("activeExperience");
      
      // Pega o ID do conteúdo a ser exibido
      const targetContentId = company.getAttribute("data-target");
      const targetContent = document.getElementById(targetContentId);
      
      if (targetContent) {
        targetContent.classList.add("active");
      }
    });
  });
});
