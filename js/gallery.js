/*Name this external file gallery.js*/

function upDate(previewPic){
    // Получаем элемент div с id = "image"
    var imageDiv = document.getElementById("image");

    // Изменяем URL фонового изображения на src из previewPic
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";

    // Изменяем текст div на alt текст из previewPic
    imageDiv.innerHTML = previewPic.alt;
}


	function unDo(){
    // Получаем элемент div с id = "image"
    var imageDiv = document.getElementById("image");

    // Возвращаем первоначальный URL фонового изображения
    // Предполагаем, что исходный URL - 'url("path/to/original/image.jpg")'
    imageDiv.style.backgroundImage = "url('path/to/original/image.jpg')";

    // Возвращаем первоначальный текст
    // Предполагаем, что исходный текст - 'Наведите курсор на изображение, чтобы увидеть его здесь'
    imageDiv.innerHTML = "Наведите курсор на изображение, чтобы увидеть его здесь";
}

function addTabFocus() {
    var images = document.getElementsByTagName('img');
    for (var i = 0; i < images.length; i++) {
        images[i].setAttribute('tabindex', '0');
    }
    console.log('Tabindex атрибуты добавлены к изображениям');
}

window.onload = addTabFocus;

