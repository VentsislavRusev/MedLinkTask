let url_api = "https://api.mocki.io/v1/341f20c7/getUniversities";

function getUniversitiesAbroad() {
  fetch(url_api)
    .then((response) => {
      if (!response.ok) {
        throw ERROR("ERROR");
      }
      return response.json();
    })
    .then((json) => {
      const html = json
        .map((json) => {
          return `
    <div class="university">
    <p> University Name: ${json.universityName}</p>
    <p> Country: ${json.country}</p>
    <p> Courses: ${json.courses}</p>
    <p> Tuition Fees: ${json.tuitionFees}</p>
    <a href='${json.url}'> Link </a>
    </div>
    `;
        })
        .join("");
      document.getElementById("app").insertAdjacentHTML("afterbegin", html);
    })
    .catch((error) => {
      console.log(error);
    });
}



//const byCountry = document.querySelector(".nav-link").value;

const myView = document.getElementById('app');
myView.innerHTML = '<p> Loading';

function getUniSpecificCountry(val) {
  fetch(url_api).then((response) => response.json()).then((universities) => myView.innerHTML = getListOfNames(universities, val));
}

const getListOfNames = (universities, val) => {
  const filterByCountry = universities.filter((uni) => uni.country === val);
  const unis = filterByCountry.map((uni) => `<div class="university">
  <p> University Name: ${uni.universityName}</p>
  <p> Country: ${uni.country}</p>
  <p> Courses: ${uni.courses}</p>
  <p> Tuition Fees: ${uni.tuitionFees}</p>
  <a href='${uni.url}'> Link </a>
  </div>`).join("\n");

  return `<ul>${unis}</ul>`;
};



/*
getUniversitiesAbroad();
*/