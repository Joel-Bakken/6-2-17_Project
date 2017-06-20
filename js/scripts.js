$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var yourName = $("yourName").val();

    var companySize = $("input:radio[name=companysize]:checked").val();

    var workPretty = $("input:radio[name=workpretty]:checked").val();

    var enjoyComputers = $("input:radio[name=enjoycomputers]:checked").val();

    var mobileApps = $("input:radio[name=mobileapps]:checked").val();

    if ((mobileApps === "yes" && enjoyComputers === "yes" && companySize === "startup") || (mobileApps === "yes" && enjoyComputers === "yes" && companySize === "enterprise")) {
    $("#design").show();

      } else if (mobileApps === "no" && enjoyComputers === "yes" && workPretty === "pretty" && companySize === "startup") {
        $("#csharp").show();
        $("#ruby").hide();
        $("#design").hide();
        $("#php").hide();
      } else if ((mobileApps === "no" && enjoyComputers === "yes") || (mobileApps === "yes" && enjoyComputers === "yes" && companySize === "enterprise")) {
        $("#ruby").show();
        $("#csharp").hide();
        $("#design").hide();
        $("#php").hide();
      } else if (workPretty === "pretty" && enjoyComputers === "no") {
        $("#php").show();
        $("#ruby").hide();
        $("#design").hide();
        $("#csharp").hide();
      }  
  });
});
