import * as pulumi from "@pulumi/pulumi";
import * as github from "@pulumi/github";

const organization = new github.OrganizationSettings("powerd6Organization", {
    name: "powerd6",
    description: "An exciting way to create, extend, and share tabletop role-playing games",
    blog: "https://powerd6.org",
    email: "contact@powerd6.org",

    billingEmail: "hector.zacharias@gmail.com",

    dependabotAlertsEnabledForNewRepositories: true,
    dependabotSecurityUpdatesEnabledForNewRepositories: true,
    dependencyGraphEnabledForNewRepositories: true,
    secretScanningEnabledForNewRepositories: true,
    webCommitSignoffRequired: true,

    membersCanCreateRepositories: false,
    membersCanCreatePrivateRepositories: false,
    membersCanCreatePublicRepositories: false,
    membersCanCreatePages: true,
    membersCanCreatePrivatePages: false,

    hasOrganizationProjects: true,
    hasRepositoryProjects: false,
}, {
    protect: true,
});

export const output = {
    organization: organization.name,
}