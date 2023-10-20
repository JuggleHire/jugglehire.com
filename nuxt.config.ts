// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,

  app: {
    head: {
      title: "Simplifying Hiring for Individuals and Small Businesses | useJuggleHire.com",
      htmlAttrs: { lang: "en" },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description",
          content: "JuggleHire is a recruitment software solution designed to simplify the hiring process. It's aimed at making the hiring journey easy and efficient for everyone.",
        },
        { hid: "og:image", property: "og:image", content: "/jugglehire.com.jpg" },
      ],
      link: [{ rel: "icon", type: "image/png", href: "/favicon.svg" }],
      script: [
        {
          innerHTML: `!function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.async=!0,p.src=s.api_host+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags getFeatureFlag getFeatureFlagPayload reloadFeatureFlags group updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures getActiveMatchingSurveys getSurveys".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
          posthog.init('phc_mYXsKFlCaX5ED0IiC5pxXRO99u1R5Bqn8V3l9ArXWSj',{api_host:'https://app.posthog.com'})`
        },
      ],
    },
  },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  devtools: { enabled: true },
})