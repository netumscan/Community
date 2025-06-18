selector_to_html = {"a[href=\"#id3\"]": "<figure class=\"align-center\" id=\"id3\">\n<a class=\"reference internal image-reference\" href=\"../../media/890001..png\"><img alt=\"../../media/890001..png\" src=\"../../media/890001..png\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Ajouter Entr\u00e9e+Nouvelle Ligne (CRLF)</span><a class=\"headerlink\" href=\"#id3\" title=\"Lien vers cette image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#add-enter-new-line-crlf\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Ajouter Entr\u00e9e+Nouvelle Ligne (CRLF)<a class=\"headerlink\" href=\"#add-enter-new-line-crlf\" title=\"Lien vers cette rubrique\">#</a></h2>", "a[href=\"#cancel-enter-cr\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Annuler la Saisie(CR)<a class=\"headerlink\" href=\"#cancel-enter-cr\" title=\"Lien vers cette rubrique\">#</a></h2>", "a[href=\"#id1\"]": "<figure class=\"align-center\" id=\"id1\">\n<a class=\"reference internal image-reference\" href=\"../../media/890000..png\"><img alt=\"../../media/890000..png\" src=\"../../media/890000..png\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Ajouter une entr\u00e9e(CR)</span><a class=\"headerlink\" href=\"#id1\" title=\"Lien vers cette image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#cancel-enter-new-line-crlf\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Annuler Entr\u00e9e+Nouvelle ligne(CRLF)<a class=\"headerlink\" href=\"#cancel-enter-new-line-crlf\" title=\"Lien vers cette rubrique\">#</a></h2>", "a[href=\"#id2\"]": "<figure class=\"align-center\" id=\"id2\">\n<a class=\"reference internal image-reference\" href=\"../../media/888003..png\"><img alt=\"../../media/888003..png\" src=\"../../media/888003..png\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Annuler la Saisie(CR)</span><a class=\"headerlink\" href=\"#id2\" title=\"Lien vers cette image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#id4\"]": "<figure class=\"align-center\" id=\"id4\">\n<a class=\"reference internal image-reference\" href=\"../../media/888003..png\"><img alt=\"../../media/888003..png\" src=\"../../media/888003..png\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Annuler Entr\u00e9e+Nouvelle ligne(CRLF)</span><a class=\"headerlink\" href=\"#id4\" title=\"Lien vers cette image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#add-enter-cr\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Ajouter une entr\u00e9e(CR)<a class=\"headerlink\" href=\"#add-enter-cr\" title=\"Lien vers cette rubrique\">#</a></h2>", "a[href=\"#end-character-settings\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Param\u00e8tres de caract\u00e8re de fin<a class=\"headerlink\" href=\"#end-character-settings\" title=\"Lien vers cette rubrique\">#</a></h1><p>Le caract\u00e8re de fin est ajout\u00e9 apr\u00e8s le d\u00e9codage des donn\u00e9es au format des donn\u00e9es d\u00e9cod\u00e9es + caract\u00e8re de fin.</p>"}
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
