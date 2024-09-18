<!DOCTYPE html>

<head>
    <link rel="stylesheet" href="https://code.jquery.com/ui/1.14.0/themes/base/jquery-ui.css">
    <link rel="stylesheet" href="./css/bootstrap.css">
    <link rel="stylesheet" href="./css/custom.css">
    <script src="js/jquery-3.7.0.js"></script>
    <script src="https://code.jquery.com/ui/1.14.0/jquery-ui.js"></script>
    <script src="js/color_scheme.js"></script>
</head>

<body>
    <div class="container">
        <div class="row">
            <div class="col sm-1">
                <div class="form-group">
                    <label for="input-datalist">Color Scheme</label>
                    <input type="text" class="form-control" placeholder="Find Color" list="list-color-scheme"
                        id="input-datalist">
                </div>
            </div>
        </div>
        <div class="row">
            &nbsp;
        </div>
        <div class="row w-50 rounded-5 rounded-top bg-primary text-light">
            <div class="col text-center">Color</div>
            <div class="col col-3 text-center">Hex Value</div>
            <div class="col col-3 text-center">Color Output</div>
            <div class="col col-2 text-center">Action</div>

        </div>
        <div class="row">
            <div class="container" id="colorSchemeResults">

            </div>
        </div>


    </div>

</body>

</html>