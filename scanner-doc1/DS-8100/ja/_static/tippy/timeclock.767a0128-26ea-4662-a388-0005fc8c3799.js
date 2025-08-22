selector_to_html = {"a[href=\"#real-time-clock\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u6642\u8a08<a class=\"headerlink\" href=\"#real-time-clock\" title=\"Link to this heading\">#</a></h1><h2>\u6709\u52b9\u306b\u3059\u308b<a class=\"headerlink\" href=\"#enable\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#disable\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u7121\u52b9<a class=\"headerlink\" href=\"#disable\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#id1\"]": "<figure class=\"align-center\" id=\"id1\">\n<a class=\"reference internal image-reference\" href=\"../../media/25RTCSTAMP231.png\"><img alt=\"../../media/25RTCSTAMP231.png\" src=\"../../media/25RTCSTAMP231.png\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">\u6709\u52b9\u306b\u3059\u308b</span><a class=\"headerlink\" href=\"#id1\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#enable\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u6709\u52b9\u306b\u3059\u308b<a class=\"headerlink\" href=\"#enable\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#id2\"]": "<figure class=\"align-center\" id=\"id2\">\n<a class=\"reference internal image-reference\" href=\"../../media/25RTCSTAMP230.png\"><img alt=\"../../media/25RTCSTAMP230.png\" src=\"../../media/25RTCSTAMP230.png\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\"><code class=\"docutils literal notranslate\"><span class=\"pre\">*</span></code> \u7121\u52b9</span><a class=\"headerlink\" href=\"#id2\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#set-real-time-clock\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u30af\u30ed\u30c3\u30af\u3092\u8a2d\u5b9a<a class=\"headerlink\" href=\"#set-real-time-clock\" title=\"Link to this heading\">#</a></h2>"}
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
