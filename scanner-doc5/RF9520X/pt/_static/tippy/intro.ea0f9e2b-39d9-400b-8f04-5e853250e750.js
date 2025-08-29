selector_to_html = {"a[href=\"#working-via-bluetooth\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Trabalhando via Bluetooth<a class=\"headerlink\" href=\"#working-via-bluetooth\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#connection-way\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Caminho da Conex\u00e3o<a class=\"headerlink\" href=\"#connection-way\" title=\"Link to this heading\">#</a></h1><p>O Leitor QR pode ser conectado ao seu dispositivo via bluetooth, USB e USB, voc\u00ea pode escolher uma das formas de conex\u00e3o para conectar o scanner com seu dispositivo.</p>", "a[href=\"#working-via-usb-cable\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Trabalhando por cabo USB<a class=\"headerlink\" href=\"#working-via-usb-cable\" title=\"Link to this heading\">#</a></h2><p>Conecte o scanner com seu dispositivo por cabo USB. Se voc\u00ea usar o teclado dos EUA, ele ser\u00e1 plugado e reproduzido. Se voc\u00ea usa outro tipo de teclado, por favor, consulte \u00ab<a class=\"reference internal\" href=\"keyboard.html#keyboard-language\"><span class=\"std std-ref\">idioma do teclado</span></a>\u00bb para configurar o idioma do teclado antes de utiliz\u00e1-lo.</p>", "a[href=\"#working-via-usb-dongle-wireless-mode\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Trabalhando via USB Dongle (modo sem fio)<a class=\"headerlink\" href=\"#working-via-usb-dongle-wireless-mode\" title=\"Link to this heading\">#</a></h2>", "a[href=\"keyboard.html#keyboard-language\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Idioma do teclado<a class=\"headerlink\" href=\"#keyboard-language\" title=\"Link to this heading\">#</a></h2><h3>Obter o idioma atual do teclado<a class=\"headerlink\" href=\"#get-current-keyboard-language\" title=\"Link to this heading\">#</a></h3>"}
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
