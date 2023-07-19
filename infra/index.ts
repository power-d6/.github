import { output as githubRepository } from './repositories/github';
import { output as landingpageRepository } from './repositories/landingpage';
import { output as specificationRepository } from './repositories/specification';
import { output as toolsRepository } from './repositories/tools';
import { output as corerulesRepository } from './repositories/corerules';

export const repositories = {
    "github": githubRepository,
    "landingpage": landingpageRepository,
    "specification": specificationRepository,
    "tools": toolsRepository,
    "corerules": corerulesRepository,
}

import { output as powerd6Domain } from './domains/powerd6org';

export const domains = {
    "powerd6.org": powerd6Domain,
};