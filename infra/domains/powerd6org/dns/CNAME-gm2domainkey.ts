import * as pulumi from "@pulumi/pulumi";
import * as gandi from "@pulumiverse/gandi";

const CNAME_gm2domainkeyDnsRecord = new gandi.livedns.Record("CNAME-gm2domainkeyDnsRecord", {
    name: "gm2._domainkey",
    ttl: 10800,
    type: "CNAME",
    values: ["gm2.gandimail.net."],
    zone: "powerd6.org",
}, {
    protect: true,
});
