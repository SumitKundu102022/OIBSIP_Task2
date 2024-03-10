const downloadBtn = document.querySelector("#download");

const fileink = "https://drive.google.com/file/d/1MD9Tz6U2d0_Je9SlLnzls4Xnx9daNUYw/view?usp=sharing";

const initTimer = () => {
    // if (downloadBtn.classList.contains("disable-timer")) {
    //     return (location.href = fileink);
    // }

    let timer = downloadBtn.dataset.timer;
    

    const initCounter = setInterval(() => {
        // console.log("hello!");
        if (timer > 0) {
            timer--
           return 
        }
        clearInterval(initCounter);
        location.href = fileink;
        

        
    }, 1000);
}

downloadBtn.addEventListener("click", initTimer);


$("#download").on("click", () => {
  $.ajax({
    url: "https://drive.google.com/file/d/1MD9Tz6U2d0_Je9SlLnzls4Xnx9daNUYw/view?usp=sharing",
    method: "GET",
    xhrFields: {
      responseType: "blob",
    },
    success: function (data) {
      var a = document.createElement("a");
      var url = window.URL.createObjectURL(data);
      a.href = url;
      a.download = "Resume.pdf";
      location.href = "https://drive.google.com/file/d/1MD9Tz6U2d0_Je9SlLnzls4Xnx9daNUYw/view?usp=sharing";
      document.body.append(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    },
  });
});








