selector_to_html = {"a[href=\"#id4\"]": "<figure class=\"align-center\" id=\"id4\">\n<a class=\"reference internal image-reference\" href=\"../../media/40DISABLE_ALL1D.png\"><img alt=\"../../media/40DISABLE_ALL1D.png\" src=\"../../media/40DISABLE_ALL1D.png\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">\u7981\u7528</span><a class=\"headerlink\" href=\"#id4\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#symbologies\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u6761\u7801\u8bbe\u7f6e<a class=\"headerlink\" href=\"#symbologies\" title=\"Link to this heading\">#</a></h1><h2>\u5f00\u59cb\u8bbe\u7f6e<a class=\"headerlink\" href=\"#start-setup\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#id6\"]": "<figure class=\"align-center\" id=\"id6\">\n<a class=\"reference internal image-reference\" href=\"../../media/40DISABLE_ALL2D.png\"><img alt=\"../../media/40DISABLE_ALL2D.png\" src=\"../../media/40DISABLE_ALL2D.png\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">\u7981\u7528</span><a class=\"headerlink\" href=\"#id6\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#end-setup\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u7ed3\u675f\u8bbe\u7f6e<a class=\"headerlink\" href=\"#end-setup\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#d-symbologies\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u4e00\u7ef4\u7801<a class=\"headerlink\" href=\"#d-symbologies\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#start-setup\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u5f00\u59cb\u8bbe\u7f6e<a class=\"headerlink\" href=\"#start-setup\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#id3\"]": "<figure class=\"align-center\" id=\"id3\">\n<a class=\"reference internal image-reference\" href=\"../../media/40ENABLE_ALL1D.png\"><img alt=\"../../media/40ENABLE_ALL1D.png\" src=\"../../media/40ENABLE_ALL1D.png\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">\u542f\u7528</span><a class=\"headerlink\" href=\"#id3\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#id1\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u4e8c\u7ef4\u7801<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#id5\"]": "<figure class=\"align-center\" id=\"id5\">\n<a class=\"reference internal image-reference\" href=\"../../media/40ENABLE_ALL2D.png\"><img alt=\"../../media/40ENABLE_ALL2D.png\" src=\"../../media/40ENABLE_ALL2D.png\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">\u542f\u7528</span><a class=\"headerlink\" href=\"#id5\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#id7\"]": "<figure class=\"align-center\" id=\"id7\">\n<a class=\"reference internal image-reference\" href=\"../../media/23SETUPE0.png\"><img alt=\"../../media/23SETUPE0.png\" src=\"../../media/23SETUPE0.png\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">\u7ed3\u675f\u8bbe\u7f6e</span><a class=\"headerlink\" href=\"#id7\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#id2\"]": "<figure class=\"align-center\" id=\"id2\">\n<a class=\"reference internal image-reference\" href=\"../../media/23SETUPE1.png\"><img alt=\"../../media/23SETUPE1.png\" src=\"../../media/23SETUPE1.png\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">\u5f00\u59cb\u8bbe\u7f6e</span><a class=\"headerlink\" href=\"#id2\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>"}
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
