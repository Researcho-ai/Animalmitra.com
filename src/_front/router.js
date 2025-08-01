import { createRouter, createWebHistory } from 'vue-router';

import wwPage from './views/wwPage.vue';

import { initializeData, initializePlugins, onPageUnload } from '@/_common/helpers/data';

let router;
const routes = [];

function scrollBehavior(to) {
    if (to.hash) {
        return {
            el: to.hash,
            behavior: 'smooth',
        };
    } else {
        return { top: 0 };
    }
}

 
/* wwFront:start */
import pluginsSettings from '../../plugins-settings.json';

// eslint-disable-next-line no-undef
window.wwg_designInfo = {"id":"e5512968-0c98-4611-b8e6-3717d11a65a3","homePageId":"a87f892b-b1f6-4cd7-a4d6-2989a92963a2","authPluginId":null,"baseTag":null,"defaultTheme":"light","langs":[{"lang":"en","default":true}],"background":{},"workflows":[],"pages":[{"id":"7931a0cb-c2ca-4f26-8084-ed954a4344c0","linkId":"7931a0cb-c2ca-4f26-8084-ed954a4344c0","name":"privacy policy","folder":null,"paths":{"en":"privacy-policy","default":"privacy-policy"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"653edcc7-696a-4b82-a8d2-a7beade823b7","sectionTitle":"Navbar Section","linkId":"20627e6e-058b-4cf7-be37-6358330b9206"},{"uid":"2fa0d1a7-17f8-450e-9c72-b744bd0e0170","sectionTitle":"Main Content Container","linkId":"44c1fe48-d5df-4daa-8272-d0af5a255ffe"},{"uid":"3f887a85-1b0e-4648-9ad3-a2a5c3424b4b","sectionTitle":"Footer Section","linkId":"f0bb21ce-8ace-4319-abf8-bcbeb13d46a5"},{"uid":"3fd40c2d-3058-4ad4-a7b4-f403d4b559d7","sectionTitle":"Back To Top Button Container","linkId":"6270d6ed-efea-4300-ba48-d812cc571ce5"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"a87f892b-b1f6-4cd7-a4d6-2989a92963a2","linkId":"a87f892b-b1f6-4cd7-a4d6-2989a92963a2","name":"Home","folder":null,"paths":{"en":"home","default":"home"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"876ddd39-c83f-4cd2-9cd0-00fd3f161e61","sectionTitle":"Navbar Section","linkId":"80c47967-a4d9-4d4c-8418-c72510113df1"},{"uid":"676f2c7e-6981-4c1f-9aa6-5fc977013ed7","sectionTitle":"Hero Section","linkId":"1781bf6a-5ac6-4de6-977e-3886fdaddb9d"},{"uid":"60b84d8b-dd33-4ce2-a5a9-86cdcaa7b327","sectionTitle":"Help Types Section","linkId":"70a046c8-8bf2-4e32-8970-fd5d7eab65e7"},{"uid":"ee891235-1356-467a-9ea7-5974e62b49a6","sectionTitle":"Animals We Help Section","linkId":"22014e0b-aa8d-4863-8b55-f9db2c0cd216"},{"uid":"d7a7d6df-2dfa-40a9-87bf-3eb0f542811d","sectionTitle":"Our Mission Section","linkId":"a3154805-a1d2-4f93-93bf-c74a8e1ee805"},{"uid":"6a200fe8-286b-49c7-a205-28ecf4ce4899","sectionTitle":"Join Community Section","linkId":"b8fb2130-d8ec-4860-b105-d8728ed70044"},{"uid":"3af945b3-a539-440f-bb74-00b73b62879f","sectionTitle":"Process Flows Section","linkId":"c6b11379-8e5f-481a-a4d5-cf95209d7cc8"},{"uid":"790106b9-d565-4ebc-9bad-b16800bfde72","sectionTitle":"How It Works Section","linkId":"5f06e5a6-ddb8-43ec-95ed-bc1507e3d12f"},{"uid":"502ef90d-2c77-4a8a-9a95-3fbf356c2af8","sectionTitle":"Contact Section","linkId":"34a1acf8-2474-40a2-bc6e-b75a2f79882e"},{"uid":"bed86476-4d40-4b37-8025-1f5fc69c2eec","sectionTitle":"Download App Section","linkId":"dd4d012e-1d35-4499-a1df-5c2b88673071"},{"uid":"149ce713-d56a-47d0-83de-1c80b64b3afd","sectionTitle":"Footer Section","linkId":"a043295f-9649-4a2b-b5be-e48974da17af"},{"uid":"f9a2b536-9f60-42a9-b7ec-c60c1f8069f1","sectionTitle":"Back To Top Button Container","linkId":"5a513461-d229-4122-a664-e88dbafc08cd"},{"uid":"ddfd2914-d1a6-474a-9d6b-e5343f4c8238","sectionTitle":"Mobile Menu","linkId":"dc92d773-7235-4c1a-be24-140f8eb9365a"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"0def35fa-73dd-4292-aae4-bf716cffb091","linkId":"0def35fa-73dd-4292-aae4-bf716cffb091","name":"Old Home","folder":null,"paths":{"en":"old-home","default":"old-home"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"044c2cf9-6fb0-482d-aedf-f78b63663685","sectionTitle":"Navigation Bar","linkId":"67b0980f-fc73-4b1f-a6e9-e79f1db6440b"},{"uid":"800cdcd6-6e79-486a-a8d4-25519b0e7e55","sectionTitle":"Hero Section","linkId":"83e68f8d-1dd3-4cd9-9deb-b1afc1488ed2"},{"uid":"82d15e47-65cf-47d4-b109-0d5bb3ba002b","sectionTitle":"Mission Section","linkId":"9f199e97-31f4-4349-9efa-4af1b5c0c86a"},{"uid":"7ffb2ab0-72a6-4d09-98fb-5ab861dfa69a","sectionTitle":"How It Works Section","linkId":"450ded24-3940-4970-9222-e532c69c1ced"},{"uid":"c8c853b7-6dff-4a0f-bf3d-4d055af79082","sectionTitle":"Who We Help Section","linkId":"e6d79f63-abdd-425f-bb78-fe945c568bb5"},{"uid":"cd301719-ad7a-4714-94de-5a03ecd2e1ef","sectionTitle":"Testimonials Section","linkId":"1956f070-dfdb-45ac-b238-2d0d09bea0d1"},{"uid":"b830ef29-c874-4345-beba-9a80c1e733d7","sectionTitle":"CTA Section","linkId":"3ab3ca78-bff6-4213-8cc3-ac7ace657090"},{"uid":"c3f03cf4-8849-4d30-8cd2-2ccd27a4b8a4","sectionTitle":"Contact Section","linkId":"fc55f6a0-056f-4a40-b211-43b9f6c7b816"},{"uid":"f312f4aa-a6d6-4659-8c12-12e0672954be","sectionTitle":"Footer Section","linkId":"c383bdba-f966-4864-a29d-b5916031322e"}],"pageUserGroups":[],"title":{"en":"","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"f622144e-44bf-492d-a0b4-9dbdbfa38da4","linkId":"f622144e-44bf-492d-a0b4-9dbdbfa38da4","name":"Aboute US","folder":null,"paths":{"en":"aboute-us","default":"aboute-us"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"576d8417-89a6-49c8-80af-6abf26990f44","sectionTitle":"Navbar Section","linkId":"ff521b2a-fc68-47bf-8210-5ff0e7d1aed3"},{"uid":"452b3280-91fa-4aa9-8f88-7adb284a28c3","sectionTitle":"Main Content","linkId":"ba5cfefa-e273-4784-bb1b-8a0b742af146"},{"uid":"54281bdd-ae0c-4562-8351-3996e7c8e030","sectionTitle":"Footer Section","linkId":"1dd849f8-c990-4667-9814-d1030ccdaa82"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"c9251b1d-36ba-4dc7-8b9b-74ca40f2bdc4","linkId":"c9251b1d-36ba-4dc7-8b9b-74ca40f2bdc4","name":"Terms & Condition","folder":null,"paths":{"en":"term-and-condition","default":"term-and-condition"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"4cf40c8d-ab8a-4079-9ae8-0bf86e8b1101","sectionTitle":"Navbar Section","linkId":"6ebf06d9-ae87-4396-b075-9a3b501ea5ad"},{"uid":"ffb79445-1b35-4c6e-885f-570df102c481","sectionTitle":"Main Container","linkId":"5775f057-ddfc-45c9-a31e-c23b000d9c94"},{"uid":"b18ba898-eeff-4210-90d7-ae77c2236ba2","sectionTitle":"Footer Section","linkId":"bf7c3a7d-00ca-46bd-b50e-5eea2ce3a459"},{"uid":"58dc28e6-7b0b-4e5a-89b7-71cb9644865a","sectionTitle":"Back To Top Button Container","linkId":"00c08cfc-69dc-455e-8dd4-50302fe0cfab"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""}],"plugins":[{"id":"2bd1c688-31c5-443e-ae25-59aa5b6431fb","name":"REST API","namespace":"restApi"}]};
// eslint-disable-next-line no-undef
window.wwg_cacheVersion = 16;
// eslint-disable-next-line no-undef
window.wwg_pluginsSettings = pluginsSettings;
// eslint-disable-next-line no-undef
window.wwg_disableManifest = false;

const defaultLang = window.wwg_designInfo.langs.find(({ default: isDefault }) => isDefault) || {};

const registerRoute = (page, lang, forcedPath) => {
    const langSlug = !lang.default || lang.isDefaultPath ? `/${lang.lang}` : '';
    let path =
        forcedPath ||
        (page.id === window.wwg_designInfo.homePageId ? '/' : `/${page.paths[lang.lang] || page.paths.default}`);

    //Replace params
    path = path.replace(/{{([\w]+)\|([^/]+)?}}/g, ':$1');

    routes.push({
        path: langSlug + path,
        component: wwPage,
        name: `page-${page.id}-${lang.lang}`,
        meta: {
            pageId: page.id,
            lang,
            isPrivate: !!page.pageUserGroups?.length,
        },
        async beforeEnter(to, from) {
            if (to.name === from.name) return;
            //Set page lang
            wwLib.wwLang.defaultLang = defaultLang.lang;
            wwLib.$store.dispatch('front/setLang', lang.lang);

            //Init plugins
            await initializePlugins();

            //Check if private page
            if (page.pageUserGroups?.length) {
                // cancel navigation if no plugin
                if (!wwLib.wwAuth.plugin) {
                    return false;
                }

                await wwLib.wwAuth.init();

                // Redirect to not sign in page if not logged
                if (!wwLib.wwAuth.getIsAuthenticated()) {
                    window.location.href = `${wwLib.wwPageHelper.getPagePath(
                        wwLib.wwAuth.getUnauthenticatedPageId()
                    )}?_source=${to.path}`;

                    return null;
                }

                //Check roles are required
                if (
                    page.pageUserGroups.length > 1 &&
                    !wwLib.wwAuth.matchUserGroups(page.pageUserGroups.map(({ userGroup }) => userGroup))
                ) {
                    window.location.href = `${wwLib.wwPageHelper.getPagePath(
                        wwLib.wwAuth.getUnauthorizedPageId()
                    )}?_source=${to.path}`;

                    return null;
                }
            }

            try {
                await import(`@/pages/${page.id.split('_')[0]}.js`);
                await wwLib.wwWebsiteData.fetchPage(page.id);

                //Scroll to section or on top after page change
                if (to.hash) {
                    const targetElement = document.getElementById(to.hash.replace('#', ''));
                    if (targetElement) targetElement.scrollIntoView();
                } else {
                    document.body.scrollTop = document.documentElement.scrollTop = 0;
                }

                return;
            } catch (err) {
                wwLib.$store.dispatch('front/showPageLoadProgress', false);

                if (err.redirectUrl) {
                    return { path: err.redirectUrl || '404' };
                } else {
                    //Any other error: go to target page using window.location
                    window.location = to.fullPath;
                }
            }
        },
    });
};

for (const page of window.wwg_designInfo.pages) {
    for (const lang of window.wwg_designInfo.langs) {
        if (!page.langs.includes(lang.lang)) continue;
        registerRoute(page, lang);
    }
}

const page404 = window.wwg_designInfo.pages.find(page => page.paths.default === '404');
if (page404) {
    for (const lang of window.wwg_designInfo.langs) {
        // Create routes /:lang/:pathMatch(.*)* etc for all langs of the 404 page
        if (!page404.langs.includes(lang.lang)) continue;
        registerRoute(
            page404,
            {
                default: false,
                lang: lang.lang,
            },
            '/:pathMatch(.*)*'
        );
    }
    // Create route /:pathMatch(.*)* using default project lang
    registerRoute(page404, { default: true, isDefaultPath: false, lang: defaultLang.lang }, '/:pathMatch(.*)*');
} else {
    routes.push({
        path: '/:pathMatch(.*)*',
        async beforeEnter() {
            window.location.href = '/404';
        },
    });
}

let routerOptions = {};

const isProd =
    !window.location.host.includes(
        // TODO: add staging2 ?
        '-staging.' + (process.env.WW_ENV === 'staging' ? import.meta.env.VITE_APP_PREVIEW_URL : '')
    ) && !window.location.host.includes(import.meta.env.VITE_APP_PREVIEW_URL);

if (isProd && window.wwg_designInfo.baseTag?.href) {
    let baseTag = window.wwg_designInfo.baseTag.href;
    if (!baseTag.startsWith('/')) {
        baseTag = '/' + baseTag;
    }
    if (!baseTag.endsWith('/')) {
        baseTag += '/';
    }

    routerOptions = {
        base: baseTag,
        history: createWebHistory(baseTag),
        routes,
    };
} else {
    routerOptions = {
        history: createWebHistory(),
        routes,
    };
}

router = createRouter({
    ...routerOptions,
    scrollBehavior,
});

//Trigger on page unload
let isFirstNavigation = true;
router.beforeEach(async (to, from) => {
    if (to.name === from.name) return;
    if (!isFirstNavigation) await onPageUnload();
    isFirstNavigation = false;
    wwLib.globalVariables._navigationId++;
    return;
});

//Init page
router.afterEach((to, from, failure) => {
    wwLib.$store.dispatch('front/showPageLoadProgress', false);
    let fromPath = from.path;
    let toPath = to.path;
    if (!fromPath.endsWith('/')) fromPath = fromPath + '/';
    if (!toPath.endsWith('/')) toPath = toPath + '/';
    if (failure || (from.name && toPath === fromPath)) return;
    initializeData(to);
});
/* wwFront:end */

export default router;
