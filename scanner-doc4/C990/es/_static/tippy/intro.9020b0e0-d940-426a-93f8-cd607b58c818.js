selector_to_html = {"a[href=\"keyboard.html#keyboard-language\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Idioma del teclado<a class=\"headerlink\" href=\"#keyboard-language\" title=\"Link to this heading\">#</a></h2><h3>Obtener idioma actual del teclado<a class=\"headerlink\" href=\"#get-current-keyboard-language\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#connection-way\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">V\u00eda de conexi\u00f3n<a class=\"headerlink\" href=\"#connection-way\" title=\"Link to this heading\">#</a></h1><p>El esc\u00e1ner se puede conectar a tu dispositivo mediante bluetooth, receptor USB o cable USB, puede elegir una de las formas de conexi\u00f3n para conectar el esc\u00e1ner con su dispositivo.</p>", "a[href=\"#working-via-bluetooth\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Funcionando v\u00eda Bluetooth<a class=\"headerlink\" href=\"#working-via-bluetooth\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#working-via-usb-dongle-wireless-mode\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Trabajando v\u00eda USB Dongle (Modo inal\u00e1mbrico)<a class=\"headerlink\" href=\"#working-via-usb-dongle-wireless-mode\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#working-via-usb-cable\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Funcionando v\u00eda cable USB<a class=\"headerlink\" href=\"#working-via-usb-cable\" title=\"Link to this heading\">#</a></h2><p>Conecta el esc\u00e1ner con tu dispositivo a trav\u00e9s de un cable USB. Si usas un teclado USB, enchufa y juega. Si utiliza otro tipo de teclado, consulte \u00ab<a class=\"reference internal\" href=\"keyboard.html#keyboard-language\"><span class=\"std std-ref\">idioma del teclado</span></a>\u00bb para configurar el idioma del teclado antes de usarlo.</p>"}
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
