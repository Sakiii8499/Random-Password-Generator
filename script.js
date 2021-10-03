let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()+[]{}\|/><-=";

function copy() {
    var copyText = document.getElementsByClassName("password");
    copyText.select();
    document.execCommand("copy");  
  }