function countChar(val) {
    var len = val.value.length;
    if (len >= 51) {
        val.value = val.value.substring(0, 50);
    } else {
        $('#hitung').text(0 + len);
        $("#bar").progressbar({
            value: ((0 + len)*2)
        });
    }
};