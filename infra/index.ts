import * as pulumi from "@pulumi/pulumi";
import * as github from "@pulumi/github";

import {repositories, createRepository} from "./repositories";

export const createdRepositories = repositories.map(createRepository);