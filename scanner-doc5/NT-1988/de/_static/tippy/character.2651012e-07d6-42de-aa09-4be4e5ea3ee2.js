selector_to_html = {"a[href=\"#cancel-enter-cr\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Eingabe abbrechen (CR)<a class=\"headerlink\" href=\"#cancel-enter-cr\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#end-character-settings\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">End-Charakter-Einstellungen<a class=\"headerlink\" href=\"#end-character-settings\" title=\"Link to this heading\">#</a></h1><p>Das End-Zeichen wird nach den dekodierten Daten im Format der dekodierten Daten + End-Zeichen hinzugef\u00fcgt.</p>", "a[href=\"#cancel-enter-new-line-crlf\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Eingabe+Neue Zeile abbrechen (CRLF)<a class=\"headerlink\" href=\"#cancel-enter-new-line-crlf\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#add-enter-cr\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Enter hinzuf\u00fcgen (CR)<a class=\"headerlink\" href=\"#add-enter-cr\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#id3\"]": "<figure class=\"align-center\" id=\"id3\">\n<a class=\"reference internal image-reference\" href=\"../../media/890001..png\"><img alt=\"../../media/890001..png\" src=\"../../media/890001..png\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Enter+Neue Zeile hinzuf\u00fcgen (CRLF)</span><a class=\"headerlink\" href=\"#id3\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#id4\"]": "<figure class=\"align-center\" id=\"id4\">\n<a class=\"reference internal image-reference\" href=\"../../media/888003..png\"><img alt=\"../../media/888003..png\" src=\"../../media/888003..png\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Eingabe+Neue Zeile abbrechen (CRLF)</span><a class=\"headerlink\" href=\"#id4\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#add-enter-new-line-crlf\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Enter+Neue Zeile hinzuf\u00fcgen (CRLF)<a class=\"headerlink\" href=\"#add-enter-new-line-crlf\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#id1\"]": "<figure class=\"align-center\" id=\"id1\">\n<a class=\"reference internal image-reference\" href=\"../../media/890000..png\"><img alt=\"../../media/890000..png\" src=\"../../media/890000..png\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Enter hinzuf\u00fcgen (CR)</span><a class=\"headerlink\" href=\"#id1\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#id2\"]": "<figure class=\"align-center\" id=\"id2\">\n<a class=\"reference internal image-reference\" href=\"../../media/888003..png\"><img alt=\"../../media/888003..png\" src=\"../../media/888003..png\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Eingabe abbrechen (CR)</span><a class=\"headerlink\" href=\"#id2\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>"}
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
