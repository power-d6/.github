import * as pulumi from "@pulumi/pulumi";
import * as gandi from "@pulumiverse/gandi";

const SRV_pop3stcpDnsRecord = new gandi.livedns.Record("SRV-pop3stcpDnsRecord", {
    name: "_pop3s._tcp",
    ttl: 10800,
    type: "SRV",
    values: ["10 1 995 mail.gandi.net."],
    zone: "powerd6.org",
}, {
    protect: true,
});
