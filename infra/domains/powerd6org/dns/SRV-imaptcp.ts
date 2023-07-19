import * as pulumi from "@pulumi/pulumi";
import * as gandi from "@pulumiverse/gandi";

const SRV_imaptcpDnsRecord = new gandi.livedns.Record("SRV-imaptcpDnsRecord", {
    name: "_imap._tcp",
    ttl: 10800,
    type: "SRV",
    values: ["0 0 0 ."],
    zone: "powerd6.org",
}, {
    protect: true,
});
