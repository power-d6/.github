import * as pulumi from "@pulumi/pulumi";
import * as gandi from "@pulumiverse/gandi";

const MX_atDnsRecord = new gandi.livedns.Record("MX-atDnsRecord", {
    name: "@",
    ttl: 10800,
    type: "MX",
    values: [
        "50 fb.mail.gandi.net.",
        "10 spool.mail.gandi.net.",
    ],
    zone: "powerd6.org",
}, {
    protect: true,
});
