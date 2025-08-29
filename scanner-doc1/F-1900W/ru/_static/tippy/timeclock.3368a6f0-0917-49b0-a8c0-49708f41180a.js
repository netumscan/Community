selector_to_html = {"a[href=\"#real-time-clock\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u0427\u0430\u0441\u044b \u0432 \u0440\u0435\u0430\u043b\u044c\u043d\u043e\u043c \u0432\u0440\u0435\u043c\u0435\u043d\u0438<a class=\"headerlink\" href=\"#real-time-clock\" title=\"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u044d\u0442\u043e\u0442 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a\">#</a></h1><h2>\u0412\u043a\u043b\u044e\u0447\u0438\u0442\u044c<a class=\"headerlink\" href=\"#enable\" title=\"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u044d\u0442\u043e\u0442 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a\">#</a></h2>", "a[href=\"#disable\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u043e<a class=\"headerlink\" href=\"#disable\" title=\"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u044d\u0442\u043e\u0442 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a\">#</a></h2>", "a[href=\"#id2\"]": "<figure class=\"align-center\" id=\"id2\">\n<a class=\"reference internal image-reference\" href=\"../../media/25RTCSTAMP230.png\"><img alt=\"../../media/25RTCSTAMP230.png\" src=\"../../media/25RTCSTAMP230.png\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\"><code class=\"docutils literal notranslate\"><span class=\"pre\">*</span></code> \u041e\u0442\u043a\u043b\u044e\u0447\u0438\u0442\u044c</span><a class=\"headerlink\" href=\"#id2\" title=\"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u044d\u0442\u043e \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#id1\"]": "<figure class=\"align-center\" id=\"id1\">\n<a class=\"reference internal image-reference\" href=\"../../media/25RTCSTAMP231.png\"><img alt=\"../../media/25RTCSTAMP231.png\" src=\"../../media/25RTCSTAMP231.png\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">\u0412\u043a\u043b\u044e\u0447\u0438\u0442\u044c</span><a class=\"headerlink\" href=\"#id1\" title=\"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u044d\u0442\u043e \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#enable\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u0412\u043a\u043b\u044e\u0447\u0438\u0442\u044c<a class=\"headerlink\" href=\"#enable\" title=\"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u044d\u0442\u043e\u0442 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a\">#</a></h2>", "a[href=\"#set-real-time-clock\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0442\u0430\u0439\u043c-\u0447\u0430\u0441\u044b<a class=\"headerlink\" href=\"#set-real-time-clock\" title=\"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u044d\u0442\u043e\u0442 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a\">#</a></h2>"}
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
