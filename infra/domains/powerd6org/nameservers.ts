import * as pulumi from "@pulumi/pulumi";
import * as gandi from "@pulumiverse/gandi";

export const powerd6orgNameservers = new gandi.domains.Nameservers("powerd6orgNameservers", {
    domain: "powerd6.org",
    nameservers: [
        "ns-168-a.gandi.net",
        "ns-138-b.gandi.net",
        "ns-19-c.gandi.net",
    ],
}, {
    protect: true,
});
