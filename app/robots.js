export default function robots() {
    const baseUrl = "https://nickchachlioutis.gr";

    return {
        rules: {
            userAgent: "*",
            allow: ["/", "/about", "/contact", "/software-dev", "/web-dev"]
        },
        sitemap: `${baseUrl}/sitemap.xml`
    };
}