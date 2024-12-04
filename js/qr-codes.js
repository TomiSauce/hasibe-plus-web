//
// Initialization
//

const objRelsORM = {
	flagID: Flag,
	logID: Log,
	rankID: Rank,
	taskID: Task,
	userID: User,
	languageID: Language
}

ORM.setStorageAdapter(new LocalStorage());

$(document).ready(() => {
    let users = User.getAll();

    /**
     * Generate QR-Code for each user
     */
    for (const u of users) {
        $('#qr-codes-holder').append(
            '<div class="qr-code-outer">' +
                '<p>' + u.get('rank').get('abbr') + ' ' + u.get('lastName') + ' ' + u.get('firstName') + '</p>' +
                '<div id="qr-code-' + u.get('id') + '"></div>' +
            '</div>'
        );

        new QRCode("qr-code-" + u.get('id'), {
            text: 'C:/' + u.get('id'),
            width: 128,
            height: 128,
            colorDark : "#000000",
            colorLight : "#ffffff",
            correctLevel : QRCode.CorrectLevel.H
        });
    }
    
    $('#btn-save-to-pdf').on('click', () => {
        window.print();
    });

});
