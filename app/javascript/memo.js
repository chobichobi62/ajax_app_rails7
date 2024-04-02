function post (){
  const form = document.getElementById("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
  form.addEventListener("submit", () => {
    const formData = new FormData(form);
    XHR.open("POST", "/posts", true);
    XHR.responseType = "json";
    XHR.send(formData);
  });
  //リクエストを送信する処理
 };
 
 window.addEventListener('turbo:load', post);