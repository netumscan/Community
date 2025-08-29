selector_to_html = {"a[href=\"#working-via-usb-dongle-wireless-mode\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Travailler via USB Dongle (mode sans fil)<a class=\"headerlink\" href=\"#working-via-usb-dongle-wireless-mode\" title=\"Lien vers cette rubrique\">#</a></h2>", "a[href=\"#working-via-usb-cable\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Fonctionnement via c\u00e2ble USB<a class=\"headerlink\" href=\"#working-via-usb-cable\" title=\"Lien vers cette rubrique\">#</a></h2><p>Connectez le scanner avec votre appareil via un c\u00e2ble USB. Si vous utilisez le clavier US, il est branch\u00e9 et jou\u00e9. Si vous utilisez un autre type de clavier, reportez-vous \u00e0 \u00ab\u00a0<a class=\"reference internal\" href=\"keyboard.html#keyboard-language\"><span class=\"std std-ref\">langue du clavier</span></a>\u00a0\u00bb pour configurer la langue du clavier avant de l\u2019utiliser.</p>", "a[href=\"#working-via-bluetooth\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Travailler via Bluetooth<a class=\"headerlink\" href=\"#working-via-bluetooth\" title=\"Lien vers cette rubrique\">#</a></h2>", "a[href=\"#connection-way\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Voie de connexion<a class=\"headerlink\" href=\"#connection-way\" title=\"Lien vers cette rubrique\">#</a></h1><p>Le scanner peut \u00eatre connect\u00e9 \u00e0 votre appareil via le Bluetooth, le r\u00e9cepteur USB ou le c\u00e2ble USB, vous pouvez choisir un des moyens de connexion pour connecter le scanner avec votre appareil.</p>", "a[href=\"keyboard.html#keyboard-language\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Langue du clavier<a class=\"headerlink\" href=\"#keyboard-language\" title=\"Lien vers cette rubrique\">#</a></h2><h3>Obtenir la langue actuelle du clavier<a class=\"headerlink\" href=\"#get-current-keyboard-language\" title=\"Lien vers cette rubrique\">#</a></h3>"}
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
