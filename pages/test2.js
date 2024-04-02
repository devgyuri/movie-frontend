let str = "     그레이트플 데드 :   소  !HS 파    !HE    ";
str = str.replaceAll("!HS", "");
str = str.replaceAll("!HE", "");
str = str.replace(/ +/g, " ");
str = str.trim();
console.log(str);
