selector_to_html = {"a[href=\"keyboard.html#keyboard-language\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Tastatursprache<a class=\"headerlink\" href=\"#keyboard-language\" title=\"Link to this heading\">#</a></h2><h3>Aktuelle Tastatursprache abrufen<a class=\"headerlink\" href=\"#get-current-keyboard-language\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#working-via-usb-dongle-wireless-mode\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Arbeiten per USB Dongle (Wireless Mode)<a class=\"headerlink\" href=\"#working-via-usb-dongle-wireless-mode\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#working-via-usb-cable\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Arbeiten \u00fcber USB-Kabel<a class=\"headerlink\" href=\"#working-via-usb-cable\" title=\"Link to this heading\">#</a></h2><p>Schlie\u00dfen Sie den Scanner mit Ihrem Ger\u00e4t \u00fcber USB-Kabel an. Wenn Sie einen anderen Tastaturtyp verwenden, lesen Sie bitte \u201e<a class=\"reference internal\" href=\"keyboard.html#keyboard-language\"><span class=\"std std-ref\">keyboard language</span></a>\u201c, um die Tastatursprache zu konfigurieren, bevor Sie sie verwenden.</p>", "a[href=\"#connection-way\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Verbindungsweg<a class=\"headerlink\" href=\"#connection-way\" title=\"Link to this heading\">#</a></h1><p>Scanner k\u00f6nnen per Bluetooth, USB-Empf\u00e4nger oder USB-Kabel an Ihr Ger\u00e4t angeschlossen werden Sie k\u00f6nnen einen der Verbindungswege w\u00e4hlen, um Scanner mit Ihrem Ger\u00e4t zu verbinden.</p>", "a[href=\"#working-via-bluetooth\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Mit Bluetooth arbeiten<a class=\"headerlink\" href=\"#working-via-bluetooth\" title=\"Link to this heading\">#</a></h2>"}
skip_classes = ["headerlink", "sd-stretched-link", "sd-rounded-pill"]

window.onload = function () {
    for (const [select, tip_html] of Object.entries(selector_to_html)) {
        const links = document.querySelectorAll(`article.bd-article ${select}`);
        for (const link of links) {
            if (skip_classes.some(c => link.classList.contains(c))) {
                continue;
            }

            tippy(link, {
                content: tip_html,
                allowHTML: true,
                arrow: true,
                placement: 'auto-start', maxWidth: 500, interactive: false,

            });
        };
    };
    console.log("tippy tips loaded!");
};
