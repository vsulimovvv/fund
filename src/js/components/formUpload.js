export default function loadForm() {
  let inputs = document.querySelectorAll(".input-file-upload");
  Array.prototype.forEach.call(inputs, function (input) {
    let label = input.previousElementSibling,
      labelVal = label.querySelector(".custom-file-upload span").innerText;

    input.addEventListener("change", function (e) {
      let countFiles = "";
      if (this.files && this.files.length >= 1) countFiles = this.files.length;

      if (countFiles)
        label.querySelector(".custom-file-upload span").innerText =
          "Выбрано файлов: " + countFiles;
      else label.querySelector(".custom-file-upload span").innerText = labelVal;
    });
  });
}
