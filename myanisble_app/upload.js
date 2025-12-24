// "use strict";

function fileUpload() {
  const fileInput = document.getElementById("fbox");
  const ibox = document.getElementById("ibox");
  //   console.log(fileInput);
  const file = fileInput.files[0];
  //   ibox.value = "";

  if (!file) {
    console.log("please select file");
  } else {
    console.log(file.name);
    ibox.value = "uploaded file content";
    file
      .text()
      .then((text) => {
        ibox.value = text;
      })
      .catch((err) => {
        console.error(err);
      });
  }
}
