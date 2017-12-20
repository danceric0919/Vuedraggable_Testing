describe('Vue Draggable', function() {
    it('Trying to drag/drop by Cypress', function () {
        browser.url("http://localhost:9000");

        browser.dragAndDrop('li[order="1"]', 'li[order="5"]');
    });

    browser.end();
});
