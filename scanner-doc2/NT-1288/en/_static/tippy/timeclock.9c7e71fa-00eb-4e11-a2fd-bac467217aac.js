selector_to_html = {"a[href=\"#real-time-clock\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Real-time clock<a class=\"headerlink\" href=\"#real-time-clock\" title=\"Link to this heading\">#</a></h1><h2>Enable<a class=\"headerlink\" href=\"#enable\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#id1\"]": "<figure class=\"align-center\" id=\"id1\">\n<a class=\"reference internal image-reference\" href=\"../../media/25RTCSTAMP231.png\"><img alt=\"../../media/25RTCSTAMP231.png\" src=\"../../media/25RTCSTAMP231.png\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Enable</span><a class=\"headerlink\" href=\"#id1\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#set-real-time-clock\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Set Real-Time Clock<a class=\"headerlink\" href=\"#set-real-time-clock\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#enable\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Enable<a class=\"headerlink\" href=\"#enable\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#id2\"]": "<figure class=\"align-center\" id=\"id2\">\n<a class=\"reference internal image-reference\" href=\"../../media/25RTCSTAMP230.png\"><img alt=\"../../media/25RTCSTAMP230.png\" src=\"../../media/25RTCSTAMP230.png\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\"><code class=\"docutils literal notranslate\"><span class=\"pre\">*</span></code> Disable</span><a class=\"headerlink\" href=\"#id2\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#disable\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Disable<a class=\"headerlink\" href=\"#disable\" title=\"Link to this heading\">#</a></h2>"}
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
