selector_to_html = {"a[href=\"#working-via-usb-dongle-wireless-mode\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">USB\u30c9\u30f3\u30b0\u30eb\u7d4c\u7531\u3067\u306e\u52d5\u4f5c (\u30ef\u30a4\u30e4\u30ec\u30b9\u30e2\u30fc\u30c9)<a class=\"headerlink\" href=\"#working-via-usb-dongle-wireless-mode\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#working-via-usb-cable\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">USB\u30b1\u30fc\u30d6\u30eb\u7d4c\u7531\u3067\u306e\u52d5\u4f5c<a class=\"headerlink\" href=\"#working-via-usb-cable\" title=\"Link to this heading\">#</a></h2><p>USB\u30b1\u30fc\u30d6\u30eb\u3067\u30b9\u30ad\u30e3\u30ca\u3068\u30c7\u30d0\u30a4\u30b9\u3092\u63a5\u7d9a\u3057\u307e\u3059\u3002US\u30ad\u30fc\u30dc\u30fc\u30c9\u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u5834\u5408\u306f\u3001\u30d7\u30e9\u30b0\u30a2\u30f3\u30c9\u30d7\u30ec\u30a4\u3067\u3059\u3002 \u4ed6\u306e\u30bf\u30a4\u30d7\u306e\u30ad\u30fc\u30dc\u30fc\u30c9\u3092\u4f7f\u3046\u5834\u5408\u306f\u3001\u300c<a class=\"reference internal\" href=\"keyboard.html#keyboard-language\"><span class=\"std std-ref\">\u30ad\u30fc\u30dc\u30fc\u30c9\u8a00\u8a9e</span></a>\u300d\u3092\u53c2\u7167\u3057\u3066\u3001\u30ad\u30fc\u30dc\u30fc\u30c9\u8a00\u8a9e\u3092\u4f7f\u3046\u524d\u306b\u8a2d\u5b9a\u3057\u3066\u304f\u3060\u3055\u3044\u3002</p>", "a[href=\"#working-via-bluetooth\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Bluetooth \u7d4c\u7531\u3067\u306e\u4f5c\u696d<a class=\"headerlink\" href=\"#working-via-bluetooth\" title=\"Link to this heading\">#</a></h2>", "a[href=\"keyboard.html#keyboard-language\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u30ad\u30fc\u30dc\u30fc\u30c9\u306e\u8a00\u8a9e<a class=\"headerlink\" href=\"#keyboard-language\" title=\"Link to this heading\">#</a></h2><h3>\u73fe\u5728\u306e\u30ad\u30fc\u30dc\u30fc\u30c9\u306e\u8a00\u8a9e\u3092\u53d6\u5f97\u3059\u308b<a class=\"headerlink\" href=\"#get-current-keyboard-language\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#connection-way\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u63a5\u7d9a\u65b9\u6cd5<a class=\"headerlink\" href=\"#connection-way\" title=\"Link to this heading\">#</a></h1><p>Bluetooth\u3001USB\u53d7\u4fe1\u6a5f\u3001USB\u30b1\u30fc\u30d6\u30eb\u3092\u4ecb\u3057\u3066\u30c7\u30d0\u30a4\u30b9\u306b\u63a5\u7d9a\u3067\u304d\u307e\u3059\u3002 \u304a\u4f7f\u3044\u306e\u30c7\u30d0\u30a4\u30b9\u306b\u30b9\u30ad\u30e3\u30ca\u3092\u63a5\u7d9a\u3059\u308b\u63a5\u7d9a\u65b9\u6cd5\u306e\u3044\u305a\u308c\u304b\u3092\u9078\u629e\u3067\u304d\u307e\u3059\u3002</p>"}
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
