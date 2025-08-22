selector_to_html = {"a[href=\"#disable\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">D\u00e9sactiver<a class=\"headerlink\" href=\"#disable\" title=\"Lien vers cette rubrique\">#</a></h2>", "a[href=\"#id1\"]": "<figure class=\"align-center\" id=\"id1\">\n<a class=\"reference internal image-reference\" href=\"../../media/25RTCSTAMP231.png\"><img alt=\"../../media/25RTCSTAMP231.png\" src=\"../../media/25RTCSTAMP231.png\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Activer</span><a class=\"headerlink\" href=\"#id1\" title=\"Lien vers cette image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#enable\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Activer<a class=\"headerlink\" href=\"#enable\" title=\"Lien vers cette rubrique\">#</a></h2>", "a[href=\"#real-time-clock\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Horloge en temps r\u00e9el<a class=\"headerlink\" href=\"#real-time-clock\" title=\"Lien vers cette rubrique\">#</a></h1><h2>Activer<a class=\"headerlink\" href=\"#enable\" title=\"Lien vers cette rubrique\">#</a></h2>", "a[href=\"#id2\"]": "<figure class=\"align-center\" id=\"id2\">\n<a class=\"reference internal image-reference\" href=\"../../media/25RTCSTAMP230.png\"><img alt=\"../../media/25RTCSTAMP230.png\" src=\"../../media/25RTCSTAMP230.png\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\"><code class=\"docutils literal notranslate\"><span class=\"pre\">*</span></code> D\u00e9sactiver</span><a class=\"headerlink\" href=\"#id2\" title=\"Lien vers cette image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#set-real-time-clock\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">D\u00e9finir l\u2019horloge en temps r\u00e9el<a class=\"headerlink\" href=\"#set-real-time-clock\" title=\"Lien vers cette rubrique\">#</a></h2>"}
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
