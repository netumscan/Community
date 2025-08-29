selector_to_html = {"a[href=\"#connection-way\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Modo Di Connessione<a class=\"headerlink\" href=\"#connection-way\" title=\"Link to this heading\">#</a></h1><p>Lo scanner pu\u00f2 essere collegato al dispositivo tramite bluetooth, ricevitore USB o cavo USB, \u00e8 possibile scegliere uno dei modi di connessione per collegare lo scanner con il dispositivo.</p>", "a[href=\"#working-via-bluetooth\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Funzionamento Via Bluetooth<a class=\"headerlink\" href=\"#working-via-bluetooth\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#working-via-usb-cable\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Lavorare Via Cavo Usb<a class=\"headerlink\" href=\"#working-via-usb-cable\" title=\"Link to this heading\">#</a></h2><p>Collega lo scanner con il tuo dispositivo tramite cavo USB. Se usi la tastiera statunitense, \u00e8 la spina e gioca. Se si utilizza un altro tipo di tastiera , si prega di fare riferimento a \u00ab<a class=\"reference internal\" href=\"keyboard.html#keyboard-language\"><span class=\"std std-ref\">lingua della tastiera</span></a>\u00bb per configurare la lingua della tastiera prima di utilizzarla.</p>", "a[href=\"#working-via-usb-dongle-wireless-mode\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Lavorare Via USB Dongle (Modalit\u00e0 Wireless)<a class=\"headerlink\" href=\"#working-via-usb-dongle-wireless-mode\" title=\"Link to this heading\">#</a></h2>", "a[href=\"keyboard.html#keyboard-language\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Lingua Della Tastiera<a class=\"headerlink\" href=\"#keyboard-language\" title=\"Link to this heading\">#</a></h2><h3>Ottieni Lingua Della Tastiera Attuale<a class=\"headerlink\" href=\"#get-current-keyboard-language\" title=\"Link to this heading\">#</a></h3>"}
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
