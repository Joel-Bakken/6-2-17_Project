$(document).ready(function() {
      $("#formOne").submit(function(event) {
            event.preventDefault();

var yourName = $("yourName").val();

var companySize = $("input:radio[name=companysize]:checked").val();

var workPretty = $("input:radio[name=workpretty]:checked").val();

var enjoyComputers = $("input:radio[name=enjoycomputers]:checked").val();

var mobileApps = $("input:radio[name=mobileapps]:checked").val();

if ((mobileApps === yes && mobileApps !== no) && enjoyComputers === yes && (companySize === startup || companySize === enterprise) && (workPretty === yes || workpPretty === no)) {
  return ("you should take the Java course tract." + show("#java"));
} else if (mobileApps === no && enjoyComputers === yes && (companySize === startup || companySize === enterprise) && (workPretty === yes || workPretty === no)) {
  return ("you should take the Design and/or ruby course tracts." + $("#whattract").show("#design", "#ruby"));
} else if (mobileApps === yes && enjoyComputers === yes && (companySize === enterprise || companySize === startup) && (workPretty === yes || workPretty === yes)) {
  return ("#yourName" + " you should take all of the cource tracts." + show("#design" + "#csharp" + "#java" + "#php" + "#ruby"));
} else if(enjoyComputers === no); {
  return ("You probably should not take any of these courses if you don't like computers!");
}
//put code to display the results of the form here.
