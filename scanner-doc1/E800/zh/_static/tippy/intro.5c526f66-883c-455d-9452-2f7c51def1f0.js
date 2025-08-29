selector_to_html = {"a[href=\"#working-via-usb-cable\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u901a\u8fc7 USB \u6709\u7ebf\u5de5\u4f5c<a class=\"headerlink\" href=\"#working-via-usb-cable\" title=\"Link to this heading\">#</a></h2><p>\u901a\u8fc7 USB \u6570\u636e\u7ebf\u5c06\u626b\u63cf\u4eea\u8fde\u63a5\u5230\u60a8\u7684\u8bbe\u5907\u3002\u5982\u679c\u60a8\u4f7f\u7528\u7f8e\u5f0f\u952e\u76d8\uff0c\u5219\u53ef\u5373\u63d2\u5373\u7528\u3002\u5982\u679c\u60a8\u4f7f\u7528\u5176\u4ed6\u7c7b\u578b\u7684\u952e\u76d8\uff0c\u8bf7\u5728\u4f7f\u7528\u524d\u53c2\u8003\u201c<a class=\"reference internal\" href=\"keyboard.html#keyboard-language\"><span class=\"std std-ref\">\u952e\u76d8\u8bed\u8a00</span></a>\u201d\u914d\u7f6e\u952e\u76d8\u8bed\u8a00\u3002</p>", "a[href=\"keyboard.html#keyboard-language\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u952e\u76d8\u8bed\u8a00<a class=\"headerlink\" href=\"#keyboard-language\" title=\"Link to this heading\">#</a></h2><h3>\u83b7\u53d6\u5f53\u524d\u952e\u76d8\u8bed\u8a00<a class=\"headerlink\" href=\"#get-current-keyboard-language\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#working-via-usb-dongle-wireless-mode\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u901a\u8fc7 USB \u63a5\u6536\u5668\u5de5\u4f5c\uff08\u65e0\u7ebf\u6a21\u5f0f\uff09<a class=\"headerlink\" href=\"#working-via-usb-dongle-wireless-mode\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#working-via-bluetooth\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u901a\u8fc7\u84dd\u7259\u5de5\u4f5c<a class=\"headerlink\" href=\"#working-via-bluetooth\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#connection-way\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u8fde\u63a5\u65b9\u5f0f<a class=\"headerlink\" href=\"#connection-way\" title=\"Link to this heading\">#</a></h1><p>\u626b\u63cf\u67aa\u53ef\u4ee5\u901a\u8fc7\u84dd\u7259\u3001USB \u63a5\u6536\u5668\u6216 USB \u7535\u7f06\u8fde\u63a5\u5230\u60a8\u7684\u8bbe\u5907\uff0c\u60a8\u53ef\u4ee5\u9009\u62e9\u5176\u4e2d\u4e00\u79cd\u8fde\u63a5\u65b9\u5f0f\u5c06\u626b\u63cf\u4eea\u4e0e\u60a8\u7684\u8bbe\u5907\u8fde\u63a5\u3002</p>"}
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
