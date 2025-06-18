selector_to_html = {"a[href=\"#end-character-settings\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u7d42\u4e86\u6587\u5b57\u8a2d\u5b9a<a class=\"headerlink\" href=\"#end-character-settings\" title=\"Link to this heading\">#</a></h1><p>\u30c7\u30b3\u30fc\u30c9\u3055\u308c\u305f\u30c7\u30fc\u30bf+\u30a8\u30f3\u30c9\u30fb\u30ad\u30e3\u30e9\u30af\u30bf\u30fc\u306e\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3067\u30c7\u30b3\u30fc\u30c9\u3055\u308c\u305f\u30c7\u30fc\u30bf\u306e\u5f8c\u306b\u3001\u30a8\u30f3\u30c9\u30fb\u30ad\u30e3\u30e9\u30af\u30bf\u30fc\u304c\u8ffd\u52a0\u3055\u308c\u307e\u3059\u3002</p>", "a[href=\"#cancel-enter-new-line-crlf\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Enter+New Line(CRLF)\u3092\u30ad\u30e3\u30f3\u30bb\u30eb<a class=\"headerlink\" href=\"#cancel-enter-new-line-crlf\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#add-enter-new-line-crlf\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Enter+New Line\u306e\u8ffd\u52a0 (CRLF)<a class=\"headerlink\" href=\"#add-enter-new-line-crlf\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#id2\"]": "<figure class=\"align-center\" id=\"id2\">\n<a class=\"reference internal image-reference\" href=\"../../media/888003..png\"><img alt=\"../../media/888003..png\" src=\"../../media/888003..png\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Enter\u3092\u30ad\u30e3\u30f3\u30bb\u30eb (CR)</span><a class=\"headerlink\" href=\"#id2\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#add-enter-cr\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Enter\u3092\u8ffd\u52a0 (CR)<a class=\"headerlink\" href=\"#add-enter-cr\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#id1\"]": "<figure class=\"align-center\" id=\"id1\">\n<a class=\"reference internal image-reference\" href=\"../../media/890000..png\"><img alt=\"../../media/890000..png\" src=\"../../media/890000..png\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Enter\u3092\u8ffd\u52a0 (CR)</span><a class=\"headerlink\" href=\"#id1\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#id3\"]": "<figure class=\"align-center\" id=\"id3\">\n<a class=\"reference internal image-reference\" href=\"../../media/890001..png\"><img alt=\"../../media/890001..png\" src=\"../../media/890001..png\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Enter+New Line\u306e\u8ffd\u52a0 (CRLF)</span><a class=\"headerlink\" href=\"#id3\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#id4\"]": "<figure class=\"align-center\" id=\"id4\">\n<a class=\"reference internal image-reference\" href=\"../../media/888003..png\"><img alt=\"../../media/888003..png\" src=\"../../media/888003..png\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Enter+New Line(CRLF)\u3092\u30ad\u30e3\u30f3\u30bb\u30eb</span><a class=\"headerlink\" href=\"#id4\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#cancel-enter-cr\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Enter\u3092\u30ad\u30e3\u30f3\u30bb\u30eb (CR)<a class=\"headerlink\" href=\"#cancel-enter-cr\" title=\"Link to this heading\">#</a></h2>"}
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
