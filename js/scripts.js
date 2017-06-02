$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var = yourName = $("yourName").val();
    var = companysize_0 = $("input:checkbox[name=companysize]:checked").val();
    var = companysize_1 = $("input:checkbox[name=companysize]:checked").val();
    var = work-pretty_0 = $("input:checkbox[name=work-pretty]:checked").val();
    var = work_pretty_1 = $("input:checkbox[name=work-pretty]:checked").val();
    var enjoycomputers_0 = $("input:radio[name=enjoycomputers]:checked").val();
    var enjoycomputers_1 = $("input:radio[name=enjoycomputers]:checked").val();
    var mobileapps_0 = $("input:radio[name=mobileapps]:checked").val();
    var mobileapps_1 = $("input:radio[name=mobileapps]:checked").val();

//    $("#yourName").******(yourName);
//    $("#companySize").******(companySize);
//    $("#work-pretty").******(work-pretty);
//    $("#enjoyComputers").******(enjoyComputers);
//    $("#mobileApps").******(mobileApps);




    $("#whattract").show();

    event.preventDefault();
  });
});
