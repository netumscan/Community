selector_to_html = {"a[href=\"#working-via-usb-dongle-wireless-mode\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Working Via USB Dongle (Wireless Mode)<a class=\"headerlink\" href=\"#working-via-usb-dongle-wireless-mode\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#working-via-usb-cable\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Working Via USB Cable<a class=\"headerlink\" href=\"#working-via-usb-cable\" title=\"Link to this heading\">#</a></h2><p>Connect scanner with your device via USB cable. If you use US keyboard, it\u2019s plug and play. If you use other type of keyboard , please refer to \u201c<a class=\"reference internal\" href=\"keyboard.html#keyboard-language\"><span class=\"std std-ref\">keyboard language</span></a>\u201d to configure the keyboard language before you use it.</p>", "a[href=\"keyboard.html#keyboard-language\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Keyboard Language<a class=\"headerlink\" href=\"#keyboard-language\" title=\"Link to this heading\">#</a></h2><h3>Get Current Keyboard Language<a class=\"headerlink\" href=\"#get-current-keyboard-language\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#working-via-bluetooth\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Working Via Bluetooth<a class=\"headerlink\" href=\"#working-via-bluetooth\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#connection-way\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Connection Way<a class=\"headerlink\" href=\"#connection-way\" title=\"Link to this heading\">#</a></h1><p>Scanner can be connected to your device via bluetooth, USB receiver or USB cable, you can choose one of the connection way to connect scanner with your device.</p>"}
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
