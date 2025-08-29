selector_to_html = {"a[href=\"#id1\"]": "<figure class=\"align-center\" id=\"id1\">\n<a class=\"reference internal image-reference\" href=\"../../media/890000..png\"><img alt=\"../../media/890000..png\" src=\"../../media/890000..png\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">\u6dfb\u52a0\u56de\u8f66\u7b26(CR)</span><a class=\"headerlink\" href=\"#id1\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#cancel-enter-cr\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">\u53d6\u6d88\u56de\u8f66\u7b26(CR)<a class=\"headerlink\" href=\"#cancel-enter-cr\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#cancel-enter-new-line-crlf\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">\u53d6\u6d88\u56de\u8f66\u7b26+\u6362\u884c\u7b26(CRLF)<a class=\"headerlink\" href=\"#cancel-enter-new-line-crlf\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#id3\"]": "<figure class=\"align-center\" id=\"id3\">\n<a class=\"reference internal image-reference\" href=\"../../media/890001..png\"><img alt=\"../../media/890001..png\" src=\"../../media/890001..png\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">\u6dfb\u52a0\u56de\u8f66\u7b26+\u6362\u884c\u7b26(CRLF)</span><a class=\"headerlink\" href=\"#id3\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#terminator\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u5b57\u7b26\u8bbe\u7f6e<a class=\"headerlink\" href=\"#terminator\" title=\"Link to this heading\">#</a></h1><h2>\u7ed3\u675f\u5b57\u7b26\u8bbe\u7f6e<a class=\"headerlink\" href=\"#end-character-settings\" title=\"Link to this heading\">#</a></h2><p>\u7ed3\u675f\u5b57\u7b26\u662f\u5728\u89e3\u7801\u7684\u6570\u636e\u540e\u6dfb\u52a0\u7684\uff0c\u683c\u5f0f\u4e3a\u89e3\u7801\u7684\u6570\u636e+\u7ed3\u675f\u5b57\u7b26\u3002</p>", "a[href=\"#id2\"]": "<figure class=\"align-center\" id=\"id2\">\n<a class=\"reference internal image-reference\" href=\"../../media/888003..png\"><img alt=\"../../media/888003..png\" src=\"../../media/888003..png\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">\u53d6\u6d88\u56de\u8f66\u7b26(CR)</span><a class=\"headerlink\" href=\"#id2\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#id4\"]": "<figure class=\"align-center\" id=\"id4\">\n<a class=\"reference internal image-reference\" href=\"../../media/888003..png\"><img alt=\"../../media/888003..png\" src=\"../../media/888003..png\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">\u53d6\u6d88\u56de\u8f66\u7b26+\u6362\u884c\u7b26(CRLF)</span><a class=\"headerlink\" href=\"#id4\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#end-character-settings\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u7ed3\u675f\u5b57\u7b26\u8bbe\u7f6e<a class=\"headerlink\" href=\"#end-character-settings\" title=\"Link to this heading\">#</a></h2><p>\u7ed3\u675f\u5b57\u7b26\u662f\u5728\u89e3\u7801\u7684\u6570\u636e\u540e\u6dfb\u52a0\u7684\uff0c\u683c\u5f0f\u4e3a\u89e3\u7801\u7684\u6570\u636e+\u7ed3\u675f\u5b57\u7b26\u3002</p>", "a[href=\"#add-enter-new-line-crlf\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">\u6dfb\u52a0\u56de\u8f66\u7b26+\u6362\u884c\u7b26(CRLF)<a class=\"headerlink\" href=\"#add-enter-new-line-crlf\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#add-enter-cr\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">\u6dfb\u52a0\u56de\u8f66\u7b26(CR)<a class=\"headerlink\" href=\"#add-enter-cr\" title=\"Link to this heading\">#</a></h3>"}
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
