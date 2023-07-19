import * as pulumi from "@pulumi/pulumi";
import * as gandi from "@pulumiverse/gandi";

const SRV_pop3tcpDnsRecord = new gandi.livedns.Record("SRV-pop3tcpDnsRecord", {
    name: "_pop3._tcp",
    ttl: 10800,
    type: "SRV",
    values: ["0 0 0 ."],
    zone: "powerd6.org",
}, {
    protect: true,
});
