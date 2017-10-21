import $ from 'jquery';
require('./app.scss');

$(document).ready(() => {
    const newItemHandler = () => {
        const title = $('#title').val();
        if (title === '') {
            alert('Необходимо ввести значение');
            return;
        }
        $('#title').val('');
        const item = $("<li></li>").text(title);
        item.addClass('task');
        const startTime = new Date();
        const st = startTime.getHours() + ":" + startTime.getMinutes() + ":" + startTime.getSeconds();
        const currentTime = $("<div></div>").text(st);
        currentTime.addClass('time');
        const doneButton = $('<button></button>')
            .prop('id', 'doneBtn')
            .text('Undone');
        doneButton.addClass('done');
        doneButton.click(() => {
            const endTime = (new Date() - startTime) / 1000;
            const doneTime = $("<div></div>").text(endTime + 's');
            doneTime.addClass('done-time');
            item.append(doneTime);
            item.toggleClass('done-task');
            $('#doneBtn').text('Done');
        });
        item.prepend(doneButton);
        item.append(currentTime);
        $('#todos').append(item);
        item.fadeIn();
    }
    $('#title').keypress(e => {
        if (e.which == 13) {
            newItemHandler();
        }
    })
});