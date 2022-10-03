const shoes = document.getElementById('shoes');
const shoesdiv = document.getElementById('shoesdiv');
const clothdiv = document.getElementById('clothdiv');
const cloth = document.getElementById('cloth');
const gifts = document.getElementById('gifts');
const giftsdiv = document.getElementById('giftsdiv');
const elec = document.getElementById('elec');
const elecdiv = document.getElementById('elecdiv');

shoes.addEventListener('mouseenter', function() {
    shoesdiv.style.display = 'block';
})

shoes.addEventListener('mouseleave', function() {
    shoesdiv.style.display = 'none';
})

cloth.addEventListener('mouseenter', function() {
    clothdiv.style.display = 'block';
})

cloth.addEventListener('mouseleave', function() {
    clothdiv.style.display = 'none';
})

gifts.addEventListener('mouseenter', function() {
    giftsdiv.style.display = 'block';
})

gifts.addEventListener('mouseleave', function() {
    giftsdiv.style.display = 'none';
})

elec.addEventListener('mouseenter', function() {
    elecdiv.style.display = 'block';
})

elec.addEventListener('mouseleave', function() {
    elecdiv.style.display = 'none';
})