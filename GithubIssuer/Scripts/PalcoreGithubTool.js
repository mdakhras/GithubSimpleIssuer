$(document).ready(function () {
    //setTimeout(_getAllRooms,3000);

    //$(".btnt").click(function () {
    //    var $btn = $(this);
    //    $('.il').removeClass('hidden');
    //    $btn.button('loading');
    //    // simulating a timeout
    //    setTimeout(function () {
    //        $btn.button('reset');
    //    }, 1000);
    //});
    //   alert('fdg');
    GetIssues();
});


function GetIssues() {

    var $inputs = $('#myForm :input');
    var values = {};
    $inputs.each(function () {
        values[this.name] = $(this).val();
    });
    var html = '';
    var color = "";
    var space = "";
    var isactive = "";
    $.ajax({
        url: "https://api.github.com/repos/mdakhras/asal/issues",
        dataType: "json",
        type: "GET",
        headers: { "Authorization": "Basic bWRha2hyYXM6anZta2RlMTkyNSQ=" },
        contentType: 'application/json; charset=utf-8',
        data: JSON.stringify(values),
        async: true,
        processData: false,
        cache: false,
        success: function (result) {
            //alert('ff');
            var html = '';

            $.each(result, function (key, item) {
                html += '<li><a href="../Home/Comments/?id='+item.number+'&issuename='+item.title+'">' + item.title + '</a></li>'
              //  alert(item.title);
            });

            $('.issueslist').html(html);

        },
        error: function (errormessage) {
            Notifications('error', 'نأسف', 'حدث مشكلة ما تاكد من اتصالك بالانترنت');
        }

    });



}



function GetIssueComments(id) {

    var $inputs = $('#myForm :input');
    var values = {};
    $inputs.each(function () {
        values[this.name] = $(this).val();
    });
    var html = '';
    var color = "";
    var space = "";
    var isactive = "";
    //var url = "https://api.github.com/repos/mdakhras/asal/issues/" + $("#issueid").val() + "/comments";$.param( $("#issueid").val())
    //alert(url);
    $.ajax({
        url: "https://api.github.com/repos/mdakhras/asal/issues/" + id  + "/comments",
        dataType: "json",
        type: "GET",
        headers: { "Authorization": "Basic bWRha2hyYXM6anZta2RlMTkyNSQ=" },
        contentType: 'application/json; charset=utf-8',
        data: JSON.stringify(values),
        async: true,
        processData: false,
        cache: false,
        success: function (result) {
            //alert('ff');
            var html = '';

            $.each(result, function (key, item) {
                html += '<li>' + item.body + '-' + item.user.login+ '</li>'
                //  alert(item.title);
            });

            $('.commentlist').html(html);

        },
        error: function (errormessage) {
            Notifications('error', 'نأسف', 'حدث مشكلة ما تاكد من اتصالك بالانترنت');
        }

    });



}