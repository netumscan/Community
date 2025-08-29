selector_to_html = {"a[href=\"#working-via-usb-cable\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u0643\u0627\u0628\u0644 \u0627\u0644\u0639\u0645\u0644 \u0639\u0628\u0631 USB<a class=\"headerlink\" href=\"#working-via-usb-cable\" title=\"Link to this heading\">#</a></h2><p>\u0642\u0645 \u0628\u062a\u0648\u0635\u064a\u0644 \u0627\u0644\u0645\u0627\u0633\u062d \u0627\u0644\u0636\u0648\u0626\u064a \u0628\u062c\u0647\u0627\u0632\u0643 \u0639\u0628\u0631 \u0643\u0627\u0628\u0644 USB. \u0625\u0630\u0627 \u0643\u0646\u062a \u062a\u0633\u062a\u062e\u062f\u0645 \u0644\u0648\u062d\u0629 \u0627\u0644\u0645\u0641\u0627\u062a\u064a\u062d \u0627\u0644\u0623\u0645\u0631\u064a\u0643\u064a\u0629\u060c \u0641\u0627\u0646\u0647\u0627 \u062a\u0648\u0635\u064a\u0644 \u0648\u062a\u0634\u063a\u064a\u0644. \u0625\u0630\u0627 \u0643\u0646\u062a \u062a\u0633\u062a\u062e\u062f\u0645 \u0646\u0648\u0639 \u0622\u062e\u0631 \u0645\u0646 \u0644\u0648\u062d\u0629 \u0627\u0644\u0645\u0641\u0627\u062a\u064a\u062d\u060c \u064a\u0631\u062c\u0649 \u0627\u0644\u0631\u062c\u0648\u0639 \u0625\u0644\u0649 \"<a class=\"reference internal\" href=\"keyboard.html#keyboard-language\"><span class=\"std std-ref\">\u0644\u063a\u0629 \u0644\u0648\u062d\u0629 \u0627\u0644\u0645\u0641\u0627\u062a\u064a\u062d</span></a>\" \u0644\u062a\u0643\u0648\u064a\u0646 \u0644\u063a\u0629 \u0644\u0648\u062d\u0629 \u0627\u0644\u0645\u0641\u0627\u062a\u064a\u062d \u0642\u0628\u0644 \u0627\u0633\u062a\u062e\u062f\u0627\u0645\u0647\u0627.</p>", "a[href=\"#working-via-bluetooth\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u0628\u0644\u0648\u062a\u0648\u062b \u0627\u0644\u0639\u0645\u0644<a class=\"headerlink\" href=\"#working-via-bluetooth\" title=\"Link to this heading\">#</a></h2>", "a[href=\"keyboard.html#keyboard-language\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u0644\u063a\u0629 \u0644\u0648\u062d\u0629 \u0627\u0644\u0645\u0641\u0627\u062a\u064a\u062d<a class=\"headerlink\" href=\"#keyboard-language\" title=\"Link to this heading\">#</a></h2><h3>\u0627\u062d\u0635\u0644 \u0639\u0644\u0649 \u0644\u063a\u0629 \u0644\u0648\u062d\u0629 \u0627\u0644\u0645\u0641\u0627\u062a\u064a\u062d \u0627\u0644\u062d\u0627\u0644\u064a\u0629<a class=\"headerlink\" href=\"#get-current-keyboard-language\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#connection-way\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u0637\u0631\u064a\u0642\u0629 \u0627\u0644\u0627\u062a\u0635\u0627\u0644<a class=\"headerlink\" href=\"#connection-way\" title=\"Link to this heading\">#</a></h1><p>\u064a\u0645\u0643\u0646 \u062a\u0648\u0635\u064a\u0644 \u0627\u0644\u0645\u0627\u0633\u062d \u0627\u0644\u0636\u0648\u0626\u064a \u0628\u062c\u0647\u0627\u0632\u0643 \u0639\u0646 \u0637\u0631\u064a\u0642 bluetooth, USB \u0623\u0648 \u0643\u0627\u0628\u0644 USB. \u064a\u0645\u0643\u0646\u0643 \u0627\u062e\u062a\u064a\u0627\u0631 \u0637\u0631\u064a\u0642\u0629 \u0627\u062a\u0635\u0627\u0644 \u0644\u0631\u0628\u0637 \u0627\u0644\u0645\u0627\u0633\u062d \u0627\u0644\u0636\u0648\u0626\u064a \u0628\u062c\u0647\u0627\u0632\u0643.</p>", "a[href=\"#working-via-usb-dongle-wireless-mode\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u0627\u0644\u0639\u0645\u0644 Via USB Dongle (\u0627\u0644\u0648\u0636\u0639 \u0627\u0644\u0644\u0627\u0633\u0644\u0643\u064a)<a class=\"headerlink\" href=\"#working-via-usb-dongle-wireless-mode\" title=\"Link to this heading\">#</a></h2>"}
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
