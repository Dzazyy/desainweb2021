$(function(){
    $('#start').click(function(){
        $('#jam').toggleClass('show');
        setInterval(function(){
            if($('#jam').attr('class') === 'show'){
                let date = new Date();
                const hari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jum\'at', 'Sabtu' ];
                let bulan = ('Januari Februari Maret April Mei Juni Juli Agustus September Oktober November Desember');
                bulan = bulan.split(" ");
                $('#jam').html(hari[date.getDay()] 
                                + ', ' 
                                + date.getDate()
                                + ' ' 
                                + bulan[date.getMonth()]
                                + ' '
                                + date.getFullYear()
                                + '<br>'
                                + date.toLocaleTimeString('en-GB'));  
            } else {
                $('#jam').html('Placeholder Jam');
            };
        }, 1000);
    });
});