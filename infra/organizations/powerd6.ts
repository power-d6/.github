import * as pulumi from "@pulumi/pulumi";
import * as github from "@pulumi/github";

const powerd6Organization = new github.OrganizationSettings("powerd6Organization", {
    billingEmail: "hector.zacharias@gmail.com",
    blog: "https://powerd6.org",
    dependabotAlertsEnabledForNewRepositories: true,
    dependabotSecurityUpdatesEnabledForNewRepositories: true,
    dependencyGraphEnabledForNewRepositories: true,
    description: "An exciting way to create, extend, and share tabletop role-playing games",
    email: "contact@powerd6.org",
    membersCanCreatePrivatePages: false,
    membersCanCreatePrivateRepositories: false,
    membersCanCreatePublicRepositories: false,
    membersCanCreateRepositories: false,
    name: "powerd6",
    secretScanningEnabledForNewRepositories: true,
}, {
    protect: true,
});