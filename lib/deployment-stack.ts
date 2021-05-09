import * as cdk from '@aws-cdk/core';

import * as ec2 from "@aws-cdk/aws-ec2";
import * as ecs from "@aws-cdk/aws-ecs";
import * as ecs_patterns from "@aws-cdk/aws-ecs-patterns";
import { DockerImageAsset } from "@aws-cdk/aws-ecr-assets";
import { join } from 'path';

export class ApiDeploymentStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const image = new DockerImageAsset(this, "WebSocketRestApiImage", {
      directory: join(__dirname, "../../", "API"),
    });

    const vpc = new ec2.Vpc(this, "ApplicationVpc", { maxAzs: 2 });

    const cluster = new ecs.Cluster(this, "Cluster", {
      vpc,
    });

    const apiService = new ecs_patterns.ApplicationLoadBalancedFargateService(
      this,
      "ApiFargateService",
      {
        cluster: cluster,
        cpu: 256,
        desiredCount: 1,
        taskImageOptions: {
          image: ecs.ContainerImage.fromDockerImageAsset(image),
          containerPort: 3000,
        },
        memoryLimitMiB: 512,
        publicLoadBalancer: true,
      }
    ); 
  }
}
