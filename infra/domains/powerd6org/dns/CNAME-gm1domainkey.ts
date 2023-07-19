import * as pulumi from "@pulumi/pulumi";
import * as gandi from "@pulumiverse/gandi";

const CNAME_gm1domainkeyDnsRecord = new gandi.livedns.Record("CNAME-gm1domainkeyDnsRecord", {
    name: "gm1._domainkey",
    ttl: 10800,
    type: "CNAME",
    values: ["gm1.gandimail.net."],
    zone: "powerd6.org",
}, {
    protect: true,
});
