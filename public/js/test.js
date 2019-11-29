function test() {
  const element = window.parent.document.getElementById("test-content");
  console.log(element);
  element.style.animation = "testFadeIn 300ms ease-out forwards";
}
