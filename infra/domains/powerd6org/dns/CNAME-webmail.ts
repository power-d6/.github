import * as pulumi from "@pulumi/pulumi";
import * as gandi from "@pulumiverse/gandi";

const CNAME_webmailDnsRecord = new gandi.livedns.Record("CNAME-webmailDnsRecord", {
    name: "webmail",
    ttl: 10800,
    type: "CNAME",
    values: ["webmail.gandi.net."],
    zone: "powerd6.org",
}, {
    protect: true,
});
