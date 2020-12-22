function titleCaseEdit(title) {
  var result = "";

  var tab = title.split(" ");

   tab.forEach(myFunction);

  function myFunction(value) {
    result +=value.replace(value.charAt(0), value.charAt(0).toUpperCase())+" ";
  } 
  
  
  return result.slice(0,result.length-1);


}

// Do not edit this line;
module.exports = titleCaseEdit;