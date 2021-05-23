//creatting hotel object
var hotel =
{
    name: 'quay',
    rooms: 40,
    booked: 20,
    check_avaibility: function()
    {
        return this.rooms-this.booked;
    }

};

var elname = document.getElementById('hotel_name');
elname.textContent = hotel.name;

var elcount = document.getElementById('room_num');
elcount.textContent = hotel.check_avaibility();

