$(document).ready(function () {
    var colorScheme = {};
    var availableTags = [];

    $.ajax({
        url: 'color_scheme_data.json',
        dataType: 'json',
        async: false,
        success: function (data) {
            colorScheme = data;
        },
        statusCode: {
            404: function () {
                alert('There was a problem with the server.  Try again soon!');
            }
        }
    });

    $.each(colorScheme, function (i, data) {
        availableTags.push(data.name);
    });

    $("#input-datalist").autocomplete({
        source: availableTags,
        select: function (e, item) {
            let colorSchemeSelected = item.item.label;

            $.each(colorScheme, function (index, data) {
                if (colorSchemeSelected == data.name) {
                    $("#colorSchemeResults").prepend(
                        '<div class="row border border-top-0 border-primary w-50">' +
                        '<div class="col col c-padd-left-1">' + data.name + '</div>' +
                        '<div class="col col-3 c-padd-left-1">' + data.hex + '</div>' +
                        '<div class="col col-3" style="background-color:' + data.hex + '">&nbsp;</div>' +
                        '<div class="col col-2 text-center"><button class="btn btn-danger btn-sm rm-color-scheme"> X </button></div>' +
                        '</div>'
                    );
                }
            });

            $(this).val("");
            return false;
        }

    });

    $("#colorSchemeResults").on("click", ".rm-color-scheme", function (e) {
        e.preventDefault();
        $(this).closest('div.row').remove();
    });

});
